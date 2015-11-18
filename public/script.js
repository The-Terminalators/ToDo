console.log("Script Started");
var $exes = $('.glyphicon-remove')
var $stars = $('.glyphicon-star')
var $checkboxes = $('.checkboxes')
var $span = $('span')
var $paras = $('p')
var text = $('#todo')

function removeDiv() {
  $(this).parent().hide('slow');
}
$exes.click(removeDiv);

function colorStar(){
  $(this).toggleClass('active');
}
$stars.click(colorStar);

function strikethrough(){
  $(this).next().next().toggleClass('strikethrough');
}

$checkboxes.click(strikethrough);




/*THIS IS THE ADD BUTTON WE USE AJAX HERE*/
$('.btn').click(function(){

  event.preventDefault();

  text = $('#todo');
  var value = text.val();

  $('.list').last().append('<p><input type="checkbox" class="checkboxes"><i class="glyphicon glyphicon-star"></i><span>'+ text.val() +'</span><i class="glyphicon glyphicon-remove"></i></p>');

  /********************/
  //console.log(value)
  $.ajax({
    url: 'api/todos',
    method: 'POST',
    data: {
     entry: value,
     done: false
     },
     success: function(data){
       console.log(data);
     },
     dataType: 'json'
   });
   /**********************/

  text.val('');
  $('p').last().hide();
  $('p').last().show('slow');
  $exes = $('.glyphicon-remove')
  $star = $('.glyphicon-star')
  $checkboxes = $('.checkboxes')
  $span = $('span')
  $paras = $('p')
  $exes.click(removeDiv);
  $stars.click(colorStar);
  $checkboxes.click(strikethrough);

});
