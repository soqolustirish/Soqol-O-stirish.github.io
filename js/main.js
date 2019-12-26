$(function(){
    
///////menu///////////
      $('.menu_btn').on('click', function(e) {
      e.preventDefault;
      $('.menu_ul').toggleClass('active');
    });
    
      $('.overlay').on('click', function(e) {
      e.preventDefault;
      $('.menu_ul').toggleClass('active');
    });
     
    
    $(window).resize(function() {
        if($(window).width() < 992){
            $('.menu_ul').removeClass('active');
        }
    })
    
    
       //////////////////////////////////////////для изменения menu
    
       function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = $(".menu");
            if (distanceY > shrinkOn) {
                header.addClass("sma");
            } else {
                if ( header.hasClass("sma")) {
                    header.removeClass("sma");
                }
            }
        });
    }
    window.onload = init();
    
    
    
///////menu end ///////////
    
   /*  <!-- slider --> */
   
   $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    /* autoplay: true,
    autoplaySpeed: 2000, */
});

/*  <!-- slider end--> */

/* img */

function parallax(event) {
  this.querySelectorAll('.layer').forEach(layer => {
      let speed = layer.getAttribute('data-speed');
      
      layer.style.transform = `translateX(${event.clientX*speed/1000}px) translateY(${event.clientY*speed/1000}px)`
  });
}
 
document.addEventListener('mousemove', parallax);
/* img end*/

 /*  <!-- slider end --> */
 

  /////////amazing-team card//////////////
  $('.amazing-team_card').click(function(){
    $(this).toggleClass('active');
    $(".amazing-team_card").removeClass("active");
    $(this).addClass("active");
  });

  //////////////////amazing-team card end//////////////////////////
  
  
  ////////////////slider-2 photoshop//////////////////
  


 
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '70px',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    
  });


///////////////slider-2 photoshop end//////////////////
   
  })