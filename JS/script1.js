$(document).ready(function() {
  
$('li a').click(function () {

  $('li.active').removeClass('active');

  $('li').eq($(this).parent().index()).addClass('active');

});          

});