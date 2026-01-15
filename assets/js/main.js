(function ($) {

  "use strict";

  $(window).on('load', function () {

    /* 
   MixitUp
   ========================================================================== */
    $('#portfolio').mixItUp();

    /* 
     One Page Navigation & wow js
     ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    /*Page Loader active
      ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* WOW Scroll Spy
  ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
      delay: 10,
      time: 1000
    });


    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });
    /* Skills Progress Bar Animation
========================================================= */

    const skillsSection = document.querySelector(".skills-section");
    const progressBars = document.querySelectorAll(".progress");
    const skillPercents = document.querySelectorAll(".skill-title span:last-child");

    let hasAnimated = false;

    function animateSkills() {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionTop < screenHeight - 150 && !hasAnimated) {
        progressBars.forEach((bar, index) => {
          const target = parseInt(bar.getAttribute("data-progress"));
          bar.style.width = target + "%";
          bar.classList.add("glow");

          let count = 0;
          const percentSpan = skillPercents[index];

          const counter = setInterval(() => {
            if (count >= target) {
              clearInterval(counter);
            } else {
              count++;
              percentSpan.textContent = count + "%";
            }
          }, 15);
        });
        hasAnimated = true;
      }

      // Reset when scrolled away
      if (sectionTop > screenHeight) {
        progressBars.forEach(bar => {
          bar.style.width = "0";
          bar.classList.remove("glow");
        });
        skillPercents.forEach(span => span.textContent = "0%");
        hasAnimated = false;
      }
    }

    window.addEventListener("scroll", animateSkills);

  });



}(jQuery));