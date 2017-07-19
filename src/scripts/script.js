(function (project) {
  'use strict'
  project(window.jQuery, window, document)
})(function ($, window) {
  'use strict'
  var progressBarAnimation, fakeLoaderInit, scrollRevealInit
  $(function () {
    $(window).on('load', function () {
      scrollRevealInit()
      progressBarAnimation()
    })
    fakeLoaderInit()
  })

  /**
   * Initializes fakeLoder.
   *
   * @requires https://github.com/joaopereirawd/fakeLoader.js
   */
  fakeLoaderInit = function () {
    $('#fakeloader').fakeLoader({
      timeToHide: 1500,
      spinner: 'spinner1',
      bgColor: '#ff7200'
    })
  }

  /**
   * Animates progress bars in skills section.
   */
  progressBarAnimation = function () {
    var $animatedElements, $window
    $animatedElements = $('[class*=\'animated\']')
    $window = $(window)
    $window.on('scroll resize', function () {
      var windowBottomPosition, windowHeight, windowTopPosition
      windowHeight = $window.height()
      windowTopPosition = $window.scrollTop()
      windowBottomPosition = windowTopPosition + windowHeight
      $.each($animatedElements, function () {
        var $element, elementBottomPosition, elementHeight, elementTopPosition
        $element = $(this)
        elementHeight = $element.outerHeight()
        elementTopPosition = $element.offset().top
        elementBottomPosition = elementTopPosition + elementHeight
        if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
          $element.addClass('in-view')
          if ($element.hasClass('progress-bar--filled')) {
            $element.css('width', $element.attr('data-percent'))
          }
        }
      })
    })
    $window.trigger('scroll')
  }

  /**
   * Initializes scrollreveal.
   *
   * @requires https://github.com/jlmakes/scrollreveal
   */
  scrollRevealInit = function () {
    var defaultConfig, defaultDelay, footerConfig, headerConfig
    if (typeof ScrollReveal !== 'undefined' && $.isFunction(ScrollReveal)) {
      window.sr = ScrollReveal()
      defaultConfig = {
        duration: 500,
        delay: 0,
        easing: 'ease',
        scale: 1,
        mobile: false
      }
      headerConfig = $.extend(false, defaultConfig, {
        duration: 1200,
        delay: 700
      })
      footerConfig = $.extend(false, defaultConfig, {
        duration: 1500,
        distance: 0,
        viewOffset: {
          top: 0,
          right: 0,
          bottom: 100,
          left: 0
        }
      })
      defaultDelay = 1
      window.sr.reveal('header img', headerConfig, defaultDelay)
      window.sr.reveal('header .contact__details.animated', headerConfig, defaultDelay)
      window.sr.reveal('header .contact__detail.animated', footerConfig, defaultDelay)
      window.sr.reveal('header .website__title.animated', headerConfig, defaultDelay)
      window.sr.reveal('header .website__subtitle.animated', headerConfig, defaultDelay)
      window.sr.reveal('header .socials.animated', headerConfig, defaultDelay)
      window.sr.reveal('.section__contact .website__title.animated', headerConfig, defaultDelay)
      window.sr.reveal('.section__contact .website__subtitle.animated', headerConfig, defaultDelay)
      window.sr.reveal('.section__contact .contact__details.animated', footerConfig, defaultDelay)
      window.sr.reveal('.section__contact .contact__detail.animated', footerConfig, defaultDelay)
    }
  }
})
