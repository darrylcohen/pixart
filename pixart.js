$('#set-color').on('click', function(event){
  event.preventDefault()
  $colour = $('#color-field').val()
  $('.brush').css("background-color", $colour);
})
