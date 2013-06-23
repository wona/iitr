jQuery(window).ready(function($) {
  var height = $(window).height();
  var width = $(window).width();

  $('section').height(height);

  var x = height *.5 - $('.home .nav').height();
  var y = width - 512;
  $('.home .nav').css('padding-top', x/2);
  $('.home .nav').css('margin-left', y/2);

});
