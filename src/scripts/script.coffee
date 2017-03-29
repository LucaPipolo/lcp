# IIFE - Immediately Invoked Function Expression
((project) ->
  "use strict"
  project window.jQuery, window, document
  return
) ($, window) ->
  "use strict"
  # The $ is now locally scoped
  # Listen for the jQuery ready event on the document
  $ ->
    $(window).on "load", ->
      scrollReveal()
      progressBarAnimation()
      return
    $("#fakeloader").fakeLoader
      timeToHide: 1500
      spinner: "spinner1"
      bgColor: "#ff7200"
    return
  progressBarAnimation = ->
    $animatedElements = $("[class*=\"animated\"]")
    $window = $(window)
    $window.on "scroll resize", ->
      windowHeight = $window.height()
      windowTopPosition = $window.scrollTop()
      windowBottomPosition = windowTopPosition + windowHeight
      $.each $animatedElements, ->
        $element = $(this)
        elementHeight = $element.outerHeight()
        elementTopPosition = $element.offset().top
        elementBottomPosition = elementTopPosition + elementHeight
        if elementBottomPosition >= windowTopPosition and elementTopPosition <= windowBottomPosition
          $element.addClass "in-view"
          if $element.hasClass("progress-bar--filled")
            $element.css "width", $element.attr("data-percent")
        return
      return
    $window.trigger "scroll"
    return
  scrollReveal = ->
    if typeof ScrollReveal != "undefined" and $.isFunction(ScrollReveal)
      window.sr = ScrollReveal()
      defaultConfig =
        duration: 500
        delay: 0
        easing: "ease"
        scale: 1
        mobile: false
      headerConfig = $.extend(false, defaultConfig,
        duration: 1200
        delay: 700)
      footerConfig = $.extend(false, defaultConfig,
        duration: 1500
        distance: 0
        viewOffset:
          top: 0
          right: 0
          bottom: 100
          left: 0)
      defaultDelay = 1
      sr.reveal "header img", headerConfig, defaultDelay
      sr.reveal "header .contact__details.animated", headerConfig, defaultDelay
      sr.reveal "header .contact__detail.animated", footerConfig, defaultDelay
      sr.reveal "header .website__title.animated", headerConfig, defaultDelay
      sr.reveal "header .website__subtitle.animated", headerConfig, defaultDelay
      sr.reveal "header .socials.animated", headerConfig, defaultDelay
      sr.reveal ".section__contact .website__title.animated", headerConfig, defaultDelay
      sr.reveal ".section__contact .website__subtitle.animated", headerConfig, defaultDelay
      sr.reveal ".section__contact .contact__details.animated", footerConfig, defaultDelay
      sr.reveal ".section__contact .contact__detail.animated", footerConfig, defaultDelay
    return
  return
