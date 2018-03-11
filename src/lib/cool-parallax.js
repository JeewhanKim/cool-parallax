/* 
* Cool Parallax
* version 0.5.0
* by Jeewhan Kim (webdeveloper.jee@gmail.com)
*/
const win = $(window)
const doc = $(document)
const nav = $('.nav')
const stickyNav = $('#sticky-menu')
const navButtons = nav.find('li')

let elements = []
let offSets = []
let animate = false
let scrollSpeed = 600

class Elements {
  constructor() {
    this.container = null,
    this.options = {}
  }
}

const genContents = () => {
  if(contents === undefined) return
  $.map(contents, (val,prop) => {$(`#${prop}`).html(val)})
}

const init = () => {
  $('.cool-parallax').each((i, elm) => {
    let obj = new Elements()
    obj.container = $(elm)
    obj.options = $(elm).attr('data-animate') ? JSON.parse($(elm).attr('data-animate')) : {}
    elements.push(obj)
    // console.log(obj.options)
  })
  $('.chapter').each((i, elm) => {
    offSets.push($(elm).offset().top + stickyNav.outerHeight())
  })

  navButtons.click((e) => {
    if(animate) return
    animate = true
    const target = $(e.currentTarget).data('for')
    , moveTo = $(target).offset().top - stickyNav.outerHeight()
    $("html, body").animate({
      scrollTop: moveTo
    }, scrollSpeed, () => {
      animate = false
    });
  });
}

const scrollDetect = () => {
  const st = $(window).scrollTop()
  const windowHeight = window.innerHeight 

  /* Chapter indicators */
  navButtons.each((i, elm) => {
    if(i === 0) {
      (st <= offSets[i+1] - windowHeight/2) ? $(elm).addClass('active') : $(elm).removeClass('active')
    } else if(i+1 < navButtons.length) {
      ((st > offSets[i] - windowHeight/2) && (st <= offSets[i+1] - windowHeight/2)) ? 
        $(elm).addClass('active') : $(elm).removeClass('active')
    } else {
      (st > offSets[i] - windowHeight/2) ? $(elm).addClass('active') : $(elm).removeClass('active')
    }
  })

  /* cool parallax animation handler */
  elements.forEach((elm) => {
    const o = elm.options
    if(o.effect === "stickyLogo" && o.target !== undefined) {
      return ($(o.target).offset().top + o.offset < st) ? $(elm.container).addClass('active') : $(elm.container).removeClass('active')
    }
    if(o.class !== undefined) {
      let revisedSt = o.trigger === "top" ? st : st + windowHeight
      if((revisedSt + o.offset) > $(o.target).offset().top) {
        $(elm.container).addClass(o.class)
      } else if(!o.once){
        $(elm.container).removeClass(o.class)
      }
    }
  })
}

genContents()
init()
scrollDetect()
win.scroll( _ =>  { scrollDetect() });