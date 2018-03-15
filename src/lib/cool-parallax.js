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
  if(typeof contents === 'undefined') return
  $.map(contents, (val,prop) => {$(`#${prop}`).html(val)})
}

const chapterInitial = () => {

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

let menuVisible = false

const navClickEvents = () => {
  $('#sticky-menu a').click((e) => {
    e.preventDefault()
    const $target = $(e.currentTarget)
    $target.parent().parent().find('a').removeClass('active')
    $target.addClass('active')
    const targetLinkTo = $target.attr('href')

    if(targetLinkTo === '#principals' || targetLinkTo === '#clients' || targetLinkTo === '#contacts') {
      $('.section-video, .section-main, .section-about, .section-services').fadeOut()
      $('html, body').animate({
        scrollTop: 0
      }, 200);

      if(targetLinkTo === '#principals') {
        $('.section-clients, .section-contacts').fadeOut()
        $('.section-principals').delay(400).fadeIn()
      }
      if(targetLinkTo === '#clients') {
        $('.section-principals, .section-contacts').fadeOut()
        $('.section-clients').delay(400).fadeIn()
      }
      if(targetLinkTo === '#contacts') {
        $('.section-principals, .section-clients').fadeOut()
        $('.section-contacts').delay(400).fadeIn()
      }
    } else {
      $('.section-principals, .section-clients, .section-contacts').fadeOut()
      $('.section-video, .section-main, .section-about, .section-services').delay(400).fadeIn()
      $('html, body').animate({
        scrollTop: $(targetLinkTo).offset().top
      }, 400);
    }
    // console.log($(e.currentTarget).attr('href'));
  })
  $('#logo').click(() => {
    !$('#sticky-menu').hasClass('active') ? $('#sticky-menu').addClass('active') : $('#sticky-menu').removeClass('active')
    // $('#logo').siblings().css('opacity', menuVisible ? 1 : 0)
  })
}

chapterInitial()
navClickEvents()
genContents()
init()
scrollDetect()
win.scroll( _ =>  { scrollDetect() });