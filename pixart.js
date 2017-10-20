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

$colour = $('.brush').css("background-color")
for(var i = 0; i < 1000; i++) {
  var $square = $('<div>')
  $square.addClass('square')
  $square.on('mouseover', function(event){
    $(event.target).css("background-color", $colour);
  })
  $('body').append($square)
}
