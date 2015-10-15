$(document).ready(function(){
	$(".col").hover(function(){
		$(this).toggleClass("hover")
	})
	$(".col").on('click',function(){
		$(this).toggleClass("active")
	})
});