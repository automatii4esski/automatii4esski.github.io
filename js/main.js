$(function () {

   $(document).scroll(function () {
      var $nav = $(".header-top");
      var $topBtn = $(".to-top-btn");
      $nav.toggleClass('header-top--scrolled', $(this).scrollTop() > 20);
      $topBtn.toggleClass('to-top-btn--visible', $(this).scrollTop() > 1600);
   });

   $('.header-filter__select').styler({
      selectPlaceholder: "Select"
   });

   $('.header-top__burger, .header-top__mobile-menu-bg').on('click', function () {
      $('.header-top__menu').toggleClass("header-top__menu--visible");
      $('.body').toggleClass("body--block");
      $('.header-top__burger').toggleClass("header-top__burger--active");
      $('.header-top__mobile-menu-bg').toggleClass("header-top__mobile-menu-bg--active");
      $('.header__register-link').toggleClass("header__register-link--active");
   });

   $('.location-slider').slick({
      infinite: true,
      slidesToShow: 3,
      appendArrows: $('.location__slider-btns'),
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56566 0.448962C9.84385 0.73334 10 1.11803 10 1.51901C10 1.91999 9.84385 2.30468 9.56566 2.58906L4.2782 8.03795L9.56566 13.4109C9.84385 13.6953 10 14.08 10 14.481C10 14.882 9.84385 15.2667 9.56566 15.551C9.42681 15.6933 9.26161 15.8062 9.0796 15.8833C8.89759 15.9603 8.70236 16 8.50518 16C8.30801 16 8.11278 15.9603 7.93077 15.8833C7.74875 15.8062 7.58356 15.6933 7.4447 15.551L1.1117 9.11558C0.971705 8.97448 0.860588 8.80661 0.784759 8.62166C0.708929 8.4367 0.669887 8.23831 0.669887 8.03795C0.669887 7.83758 0.708929 7.63919 0.784758 7.45424C0.860588 7.26928 0.971705 7.10141 1.1117 6.96031L7.4447 0.448963C7.58355 0.306702 7.74875 0.193787 7.93077 0.11673C8.11278 0.0396741 8.308 2.24914e-07 8.50518 1.98704e-07C8.70236 1.72493e-07 8.89759 0.039674 9.0796 0.11673C9.26161 0.193787 9.42681 0.306702 9.56566 0.448962Z" fill="#697687"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="next" type="button" style=""><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56566 0.448962C9.84385 0.73334 10 1.11803 10 1.51901C10 1.91999 9.84385 2.30468 9.56566 2.58906L4.2782 8.03795L9.56566 13.4109C9.84385 13.6953 10 14.08 10 14.481C10 14.882 9.84385 15.2667 9.56566 15.551C9.42681 15.6933 9.26161 15.8062 9.0796 15.8833C8.89759 15.9603 8.70236 16 8.50518 16C8.30801 16 8.11278 15.9603 7.93077 15.8833C7.74875 15.8062 7.58356 15.6933 7.4447 15.551L1.1117 9.11558C0.971705 8.97448 0.860588 8.80661 0.784759 8.62166C0.708929 8.4367 0.669887 8.23831 0.669887 8.03795C0.669887 7.83758 0.708929 7.63919 0.784758 7.45424C0.860588 7.26928 0.971705 7.10141 1.1117 6.96031L7.4447 0.448963C7.58355 0.306702 7.74875 0.193787 7.93077 0.11673C8.11278 0.0396741 8.308 2.24914e-07 8.50518 1.98704e-07C8.70236 1.72493e-07 8.89759 0.039674 9.0796 0.11673C9.26161 0.193787 9.42681 0.306702 9.56566 0.448962Z" fill="#697687"/></svg></button>',
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 920,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 631,
            settings: {
               slidesToShow: 1,
            }
         }
      ]

   });

   $('.testimonials-slider').slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      fade: true,
      dots: true,
   });

   $('.social__galery').slick({
      infinite: true,
      slidesToShow: 3,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 691,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 521,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });

   $(".location-slider__info-rate").rateYo({
      rating: 5,
      starWidth: "16px",
      ratedFill: "#FFD751",
      readOnly: true,
      spacing: "2px",
      "starSvg": '<svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">' +
         '<path d="M15.9105 5.73058C15.7625 5.27782 15.3694 4.94786 14.8961 4.8795L10.8999 4.30153L9.11257 0.697992C8.90097 0.271163 8.46411 0.000976562 7.98579 0.000976562C7.50755 0.000976562 7.07077 0.271246 6.85909 0.698076L5.07211 4.30153L1.07563 4.8795C0.602331 4.94786 0.209033 5.27782 0.061263 5.73058C-0.0865067 6.18333 0.0368022 6.68027 0.379336 7.01248L3.27115 9.81738L2.58834 13.7784C2.5075 14.2476 2.70126 14.7218 3.08819 15.0015C3.30708 15.1598 3.56635 15.2403 3.82688 15.2403C4.02692 15.2403 4.22771 15.1929 4.4115 15.0966L7.98579 13.2264L11.5604 15.0966C11.9837 15.3179 12.4966 15.2812 12.8837 15.0014C13.2706 14.7217 13.4644 14.2475 13.3836 13.7783L12.7009 9.81722L15.5924 7.0124C15.9349 6.68019 16.0582 6.18325 15.9105 5.73058Z"/>' +
         ' </svg>',
   });

   $('.social__galery').each(function () {
      $(this).magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {
            enabled: true
         },
         mainClass: 'mfp-fade',
         removalDelay: 300,
         zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',


            opener: function (openerElement) {

               return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
         }
      });
   });

   $('.discover__video-link').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
   });

});