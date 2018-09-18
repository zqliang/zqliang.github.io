$(document).ready(function(){

  //fade images on mouse hover
  $(".logos").hover(function(){
        $(this).animate({
        opacity: '0.7',
        padding: '5px'
    }, 100);
        }, function(){
        $(this).animate({
        opacity: '1',
        padding: '5px'

    });

    });
 
  // Add smooth scrolling to all links in navbar + footer link
  $("a, .navbar a, footer a[href='#home'], section a[href='#ct']").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, function(){
   
        window.location.hash = hash;

      });
    }

  });
  
  $(window).scroll(function() {
    //change nav bar color on scroll/click
    if ($(document).scrollTop() > 600){
      $('nav').css('background-color', '#c8c3cc');
    }
    else{
      $('nav').css('background-color', '#948A97');
    }

    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });

  });
})