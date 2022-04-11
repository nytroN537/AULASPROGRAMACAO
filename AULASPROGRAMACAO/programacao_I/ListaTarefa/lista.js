$(document).ready(function () {
  $('add').click(function () {
    var inputval = $('.form').val()
    if (inputval != '') {
      $('.lista-tarefa').append(
        '<li><div class="cont-esquerd"><input type="checkbox" id="check-1" name="" /><label for="check-1"></label><span>Tarefa 1</span></div><span class="remove"> <i class="material-icons">delete</i></span></li>'
      )
    }
  })
})
