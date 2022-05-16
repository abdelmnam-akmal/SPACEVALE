$(function() {
    'use strict';

    /* START :: Add Select2 to all SelectBoxs */
    if ($('select').length) {
        $('select').select2({
            language: {
                noResults: function (params) {
                  return ($('html').attr('dir') === "ltr") ? "No results found!" : "لا يوجد نتائج!";
                }
              }
        });
    }
    /* END :: Add Select2 to all SelectBoxs */

     // RateYou Plugin Style
     if ($('#rateYo').length) {
      $("#rateYo").rateYo({
        rating: 0,
        starWidth: ($(window).width() < 769) ? "12px": "16px",
        normalFill: "#AFAFAF",
        ratedFill: "#FFC400",
        rtl: ($('html').attr('dir') === "ltr") ? false : true,
      });
     }

    // Slick Plugin Style
    if ($('.slick-portfolio').length) {
      $('.slick-portfolio').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button><img src="images/chevron-left.svg"></button>',
        nextArrow: '<button><img src="images/chevron-right.svg"></button>',
        rtl: ($('html').attr('dir') == "ltr") ? false : true,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
    
    // Active FancyBox Plugin
    if ($('.image-container .gallary-image').length) {
      Fancybox.bind(".image-container .gallary-image", {
        groupAll : true, // Group all items
      });
    }

});