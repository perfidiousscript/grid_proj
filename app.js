function Unit(row,col,HP,AP){
	this.row = row,
	this.col = col,
	this.HP = HP,
	this.AP = AP
}

var player1 = new Unit(1,1,60,10);
var enemy = new Unit(8,8,20,10);


$(document).ready(function(){
	$(".col").hover(function(){
		$(this).toggleClass("hover")
	})
	$(".col").on('click',function(){
		$(this).toggleClass("active")
	})
});