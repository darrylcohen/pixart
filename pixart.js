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

for(var i = 0; i < 1000; i++) {
  var $square = $('<div>')
  $square.addClass('square')
  $('body').append($square)
}
