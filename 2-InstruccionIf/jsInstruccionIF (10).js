function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota=Math.floor((Math.random()*10)+1);
	alert(nota);
	if(nota >4 && nota <8){
		alert("aprobo");
	}
	else{
		if(nota<4){
			alert("Vamos la proxima se puede");
		}
		else{
			alert("Exelente");
		}
	}

}//FIN DE LA FUNCIÓN