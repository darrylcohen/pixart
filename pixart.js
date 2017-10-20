$('#set-color').on('click', function(event){
  event.preventDefault()
  $colour = $('#color-field').val()
  $('.brush').css("background-color", $colour);
})

$("#color-field").keydown(function (e) {
  if (e.keyCode == 13) {
    event.preventDefault()
    $colour = $('#color-field').val()
    $('.brush').css("background-color", $colour);
  }
});

var doColour = function() {
  $colour = $('.brush').css("background-color")
  for(var i = 0; i < 1000; i++) {
    var $square = $('<div>')
    $square.addClass('square')
    $square.on('click', function(event){
      $(event.target).css("background-color", $colour);
    })
    $('body').append($square)
  }
}

var imageString = '';
$('.movieBTN').on('click', function(){

  $.ajax({
        url: 'http://omdbapi.com/?',
          method: 'get',
          data: {
            t: 'Jaws',
            apikey: '2f6435d9'
          }
      }).done(function(resp) {
        imageString = resp.Poster
      })
})


var doStamp = function() {

  for(var i = 0; i < 1000; i++) {
    // var $square = $('<div>')
    var $image = $('<img>')
    // $square.append($image)
    $image.addClass('square')
    $image.on('click', function(event){

      $(event.target).attr("src", imageString);

    })
    $('body').append($image)
  }
}

$('.doColourBTN').on('click', function(){
  doColour()
})
$('.doMovieBTN').on('click', function(){
  doStamp()
})
