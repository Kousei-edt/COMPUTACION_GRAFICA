var tops = 0;
var lefts = 0;
var cuadrado  = document.getElementById("cuadro");
var barrera  = document.getElementById("barrera");
var barreraTop = 0;
var barreraLeft= 0;
var barreraBottom= 0;
var barreraRight= 0;
window.onload = function(){
	document.onkeydown = teclas;
	var barrpos = barrera.getBoundingClientRect();
	barreraTop = barrpos.top;
	barreraLeft = barrpos.left;
	barreraBottom = barrpos.bottom;
	barreraRight = barrpos.right;

}


function teclas(event){
	var codigo = event.keyCode;
	var cuapos = cuadrado.getBoundingClientRect()
	var cuatop = cuapos.top;
	var cualeft = cuapos.left;
	var cuabottom = cuapos.bottom;
	var cuaright = cuapos.right;

	if (codigo==40){
		tops++;
		cuadrado.style.top = tops+"px";
	}
	if (codigo==38){
		tops--;
		cuadrado.style.top = tops+"px";
	}
	if (codigo==39){
		lefts++;
		cuadrado.style.left = lefts+"px";
	}
	if (codigo==37){
		lefts--;
		cuadrado.style.left = lefts+"px";
	}

	if (cuaright==barreraLeft && cuabottom>=barreraTop && cuatop<=barreraBottom){
		lefts = lefts -2;
	}
	if (cuabottom==barreraTop && cuaright>=barreraLeft && cualeft<=barreraRight){
		tops = tops-2;
	}
	if (cualeft==barreraRight && cuabottom>=barreraTop && cuatop<=barreraBottom){
		lefts = lefts +2;
	}
	if (cuatop==barreraBottom && cuaright>=barreraLeft && cualeft<=barreraRight){
		tops = tops+2;
	}
}