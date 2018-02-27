//se ingresa tres numeros, decir cual es menor y mayor//

function Mostrar()

{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	
	var maximo=0;
	var minimo=0;

	numeroUno=parseInt(prompt("Ingese un numero"));
	numeroDos=parseInt(prompt("Ingese  otro numero"));
	numeroTres=parseInt(prompt("Ingese el ultimo numero"));

	if(numeroUno== numeroDos&&numeroTres==numeroUno){
		maximo=numeroUno;
		minimo=numeroUno;
	}

	if(numeroUno > numeroDos&&numeroTres<numeroUno){
		maximo=numeroUno;	
	}
	else if(numeroDos>numeroTres){
		maximo=numeroDos;
	}//else if elimina los corchetes//
	else{
		maximo=numeroTres;
	}
	if(numeroUno < numeroDos&&numeroTres>numeroUno){
		minimo=numeroUno;	
	}
	else if(numeroDos<numeroTres){
		minimo=numeroDos;
	}
	else{
		minimo=numeroTres;
	}
	document.write("<br>el mayor numero es "+maximo);
	document.write("<br>el menor numero es "+minimo);
}