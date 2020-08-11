$(document).ready(function() {
  
$('li a').click(function () {

  $('li.active2').removeClass('active2');

  $('li').eq($(this).parent().index()).addClass('active2');

});          

});