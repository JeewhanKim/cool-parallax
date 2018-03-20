import { setTimeout } from "timers";

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

const initAnimation = () => {
  if(currentChapter === 0) {
    $('.section-video').css('opacity', 1)
    logoAnimation()
  }
}

const genContents = () => {
  if(typeof contents === 'undefined') return
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

  // document.getElementById("video").play();
}

const hashDetect = () => {
  const hash = window.location.hash;
  if(hash.length === 0) return;

  $('.section-video, .section-main, .section-about, .section-services').hide()

  if(hash === '#principals') {
    currentChapter = 1
    $('.section-principals').fadeIn()
    $('#nav-principals').addClass('active')
  }
  if(hash === '#clients') {
    currentChapter = 2
    $('.section-clients').fadeIn()
    $('#nav-clients').addClass('active')
  }
  if(hash === '#contacts') {
    currentChapter = 3
    $('.section-contacts').fadeIn()
    $('#nav-contacts').addClass('active')
  }
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
      // console.log('revisedSt')
      if((revisedSt + o.offset) > $(o.target).offset().top) {
        $(elm.container).addClass(o.class)
      } else if(!o.once){
        $(elm.container).removeClass(o.class)
      }
    }
  })
}

let menuVisible = false
let currentChapter = 0

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
        currentChapter = 1
        $('.section-clients, .section-contacts').fadeOut()
        $('.section-principals').delay(0).fadeIn()
        window.location.hash = '#principals';
      }
      if(targetLinkTo === '#clients') {
        currentChapter = 2
        $('.section-principals, .section-contacts').fadeOut()
        $('.section-clients').delay(0).fadeIn()
        window.location.hash = '#clients'
      }
      if(targetLinkTo === '#contacts') {
        currentChapter = 3
        $('.section-principals, .section-clients').fadeOut()
        $('.section-contacts').delay(0).fadeIn()
        window.location.hash = '#contacts'
      }
      // scrollDetect()
    } else {
      window.location.hash = '';
      if(currentChapter != 0) {
        $('.section-principals, .section-clients, .section-contacts').fadeOut()
        $('.section-main .section-right').removeClass('section-ani')
        $('.section-about .section-right').removeClass('section-ani')
        $('.section-services .section-right').removeClass('section-ani')

        $('.video-static').hide()
        $('.video-slices, .video-placeholder').show().css('opacity', 0)
        
        $('.section-video, .section-main, .section-about, .section-services').delay(400).fadeIn(400, () => {
          currentChapter = 0
          initAnimation()
          
          if(targetLinkTo !== 'body') {
            $('html, body').delay(400).animate({
              scrollTop: $(targetLinkTo).offset().top - 20
            }, 300)
          }
        })
      } else {
        $('html, body').animate({
          scrollTop: $(targetLinkTo).offset().top - 20
        }, 600)
      }
    }

    $('#sticky-menu').addClass('active')
    // console.log($(e.currentTarget).attr('href'));
  })
  $('#logo').click(() => {
    !$('#sticky-menu').hasClass('active') ? $('#sticky-menu').addClass('active') : $('#sticky-menu').removeClass('active')
    // $('#logo').siblings().css('opacity', menuVisible ? 1 : 0)
  })
  $('.emailSubmit').click((e) => {
    const $tg = $(e.currentTarget).parent()
    const mailto = $tg.find('.vl-email').html()
    const subject = $tg.find('.subject').val()
    const body = $tg.find('.content').val()
    window.open(`mailto:${mailto}?subject=${subject}&body=${body}`)
  })
}

const logoAnimation = () => {
  // if(currentChapter !== 0) return
  console.log('logoAnimation')
  const $videoContainer = $('.video-slices')
  $videoContainer.css('opacity', 1)
  const videoHeight = $videoContainer.find('img:eq(0)').outerHeight()
  $videoContainer.find('img').css('height', videoHeight)
  const $videoSlices = $videoContainer.find('img')

  let offsetY = 0
  $.each($videoSlices, (index, val) => {
    // console.log('tttt')
    setTimeout(function(){ 
      $videoContainer.css('top', `-${offsetY}px`)
      offsetY += $(val).outerHeight()
    }, 33*index)
  })
}

const navLogoAnimation = () => {
  const $navContainer = $('.logo-slices')
  const navHeight = $navContainer.find('img:eq(0)').outerHeight()
  $navContainer.find('img').css('height', navHeight)
  const $navSlices = $navContainer.find('img')
  let offsetY = 0
  $.each($navSlices, (index, val) => {
    setTimeout(function(){ 
      $navContainer.css('top', `-${offsetY}px`)
      offsetY += $(val).outerHeight()
    }, 33*index)
  })
}

navClickEvents()
genContents()
init()
hashDetect()
scrollDetect()



win.scroll( _ =>  { scrollDetect() });
win.resize( _ =>  { 
  scrollDetect() 
  $('.video-slices, .video-placeholder, .logo-slices, .logo-placeholder').hide()
  $('.video-static, .logo-static').show()
});
win.load( _ => { 
  initAnimation()
  navLogoAnimation()
})
