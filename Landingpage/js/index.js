
//     $(document).ready(function(){
//   $("#owl-demo").owlCarousel({
//     autoPlay: 3000, //Set AutoPlay to 3 seconds
 
//     items : 4,
//     itemsDesktop : [1199,3],
//     itemsDesktopSmall : [979,3]
//   });
// });
$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
     
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 4
      },
  
      1024: {
        items: 5
      },
  
      1366: {
        items: 5
      }
    }
   });
    console.log("owl-courosel calling");
});
$(document).ready(function(){
  $('#owl-demo').owlCarousel({
   autoplay: true,
   rewind: true,
   margin: 20,
    
   responsiveClass: true,
   autoHeight: true,
   autoplayTimeout: 7000,
   smartSpeed: 800,
   nav: true,
   responsive: {
     0: {
       items: 1
     },
 
     600: {
       items: 1
     },
 
     1024: {
       items: 1
     },
 
     1366: {
       items: 1
     }
   }
  });
   console.log("owl-courosel calling");
});

$(window).scroll(function() {    // this will work when your window scrolled.
  var height = $(window).scrollTop();  //getting the scrolling height of window
  if(height  > 100) {
    $("#sticky-wrapper").css({"position": "fixed"});
  } else{
    $("#sticky-wrapper").css({"position": "relative"});
  }
});


