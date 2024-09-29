jQuery(window).scroll(function() {  
if (jQuery(this).scrollTop() > 0) {    
    jQuery('header').addClass("sticky");  
  } else {  
    jQuery('header').removeClass("sticky");  
  }  
});
jQuery(document).ready(function(){
    jQuery("#toggle").click(function() {
        jQuery(this).toggleClass("on");
        jQuery("#menu").slideToggle();
      });
    });
  
