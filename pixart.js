$('#set-color').on('click', function(){
  $colour = $('#color-field').val()
  $('.brush').css("background-color", $colour);
})
