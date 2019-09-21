jQuery(document).ready(function($) {
//permite que ao clicar no card da cardápio, habilite o cardápio clicado
$("a[id='cardapio-sanduiche']").tab('show')
$('.card-sanduiche').click(function(){
	$("a[id='cardapio-sanduiche']").tab('show');
});
$('.card-salgado').click(function(){
	$("a[id='cardapio-salgado']").tab('show')
});
$('.card-tapioca').click(function(){
	$("a[id='cardapio-tapioca']").tab('show')
});
$('.card-suco').click(function(){
	$("a[id='cardapio-suco']").tab('show')
});

//permite que o usuario ao clicar no menu, mova a página lentamente para o ponto desejado
  $(".scroll").click(function(event) {
	event.preventDefault();
	$('html,body').animate({
	  scrollTop: $(this.hash).offset().top
	}, 800);
  });
  
//exibe o ano atual no rodapé
  $('pingendo').css('visibility', 'hidden');
  var data = new Date();
  document.getElementById("data").innerHTML = data.getFullYear();
	  
});