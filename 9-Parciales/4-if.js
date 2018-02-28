/*Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'. se ingrsan dos numeros
  si son iguales se concatenan 
  si el primero es mayor que el segundo se multiplican,
  si el segundo es ,mas grande se resta, 
si la multiplicacion da un numero par ademas de mostrar el resultado se muestre es par*/
function Mostrar()
{
	var numeroUno=prompt("ingrse");
	var numeroDos=prompt("ingrese");
	var resultado;


	if(numeroUno==numeroDos){
		resultado=numeroUno+numeroDos;
	}else{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if(numeroUno>numeroDos){

			resultado=numeroUno*numeroDos;
			if(resultado%2==0 && resultado!=0){
				resultado=resultado+" es par";
			}
		}else{
			resultado=numeroUno-numeroDos;
		}
		
	}

	alert(resultado); 
	


}

