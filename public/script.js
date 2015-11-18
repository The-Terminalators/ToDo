console.log("Script Started");


var $exes = $('.glyphicon-remove')
var $stars = $('.glyphicon-star')
var $checkboxes = $('.checkboxes')
var $span = $('span')
var $paras = $('p')
var text = $('#todo')

function removeDiv() {


  $(this).parent().hide('slow');
  //$(this).parent().remove();

  $.ajax({
    url: 'api/todos/' + $(this).parent().attr('id') ,
    method: 'DELETE',
    success: function(data){
        console.log('it is deleted');
    },
    error: function(err) {
      console.log(err);
    } 
   });
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

/*When window loads, we need to fill the list with todos from database*/
window.onload = function() {

  $.ajax({
    url: 'api/todos',
    method: 'GET',
     success: function(data){
      for (var i=0; i<data.length; i++) {

          $('.list').last().append('<p id='+ data[i]._id +'><input type="checkbox" class="checkboxes"><i class="glyphicon glyphicon-star"></i><span>'+ data[i].entry +'</span><i class="glyphicon glyphicon-remove"></i></p>');
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

      }/*end of for loop*/
     }/*end of success function*/
   });


}


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
