/*====================================================================
* main.js
=====================================================================*/


$(function(){
    $("#js-tab li").click(function(){
      $("#js-tab li").removeClass("active");
      $(this).addClass("active");
      var index = $(this).index();
      
      $(".tab-content").removeClass("active");
      $(".tab-content").eq(index).addClass("active");
    });
  });

  $(function(){
    $('a[href^="#"]').click(function(){
      var adjust = 0;
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });