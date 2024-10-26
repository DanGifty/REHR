(function($) {
"use strict";
 
$(document).ready(function() {
 

$('#carouseltwo').owlCarousel({
loop:true,
margin:0,
dots: false,
nav: false,
autoplay:true,
singleItem:true,
items: 1,
slideSpeed: 1000,
mouseDrag: false,
animateOut: 'fadeOut',
});

$('.owl-carousel').owlCarousel({
loop:false,
Margin:0,
responsiveClass:true,
dots: false,
nav: true,
responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 3
                  }
    }
});
})
})(jQuery);