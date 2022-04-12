// NAO FUNCIONOU PRA REMOVER 
// SEGUI UM TUTORIAL POR QUE NAO ENTENDI 

$(document).ready(function () {
  var count = 0;
  $(".add").click(function () {
    var inputval = $(".form").val()
    if (inputval != '') {
      count ++;
      $(".lista-tarefa").append('<li><div class="cont-esquerd"><input       type="checkbox" id="check-'+count+'" name="" /><label for="check-'+count+'"></ label><span>'+inputval+'</span></div><span class="remove"> <i  class="material-icons">delete</i></span></li>');
}
$(".form").val('');
})

$(document).on('change', 'input[type="checkbox]', function(){
if ($(this).is(':checked')){
$(this).close("li").children(".remove").addClass("active");
} else{
$(this).close("li").children(".remove").removeClass("active");
}
})

$(document).on('click', '.remove', function(){
$(this).parent().remove();
})
})
