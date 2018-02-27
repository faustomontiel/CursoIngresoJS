//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	

	var numero;
	var contarNum=0;
	var seguir="";
	var acumulador=0;
	var contPar=0;


	while(seguir!="no"){
			numero=parseInt(prompt("Ingrese un numero positivo"));

			contarNum=contarNum+1;

		while(numero<0){
			numero=parseInt(prompt("Ingrese un numero positivo"));
		}	
		acumulador=acumulador+numero;

		seguir=prompt("continuar?");

		if(numero%2==0){
			contPar=contPar+1;
		}	




	}
	


	document.write("<br>la cantidad de numeros pares es "+contPar);
}

