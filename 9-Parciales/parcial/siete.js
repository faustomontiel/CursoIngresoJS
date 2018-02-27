/*ingresar dos datos . 1 letra 2 numero. numeros entre-50 y +50 . 
informar el promedio de los positivos
cant numeros impares
suma de todos los numeros cuya letra haya sido una vocal
el numero maximo y la letra con la cual fue ingresado*/

function Mostrar()
{
	var letra;
	var numero=0;
	var contador=0;
	var seguir="";
	var contPositivos=0;
	var sumPositivos=0;
	var promedio;
	var cantidadImpares=0;
	var sumaLetrasVocal=0;


	while(seguir!="no"){

		letra=prompt("ingrse letra");

		while(!iNan(letra)){
			letra=prompt("ingrse letra");
		}
		numero=parseInt(prompt("ingrse numero"));
		contador++;
		
		seguir=prompt("continuar");

		while(numero<-50 || numero>50 || isNan(numero)){
			numero=parseInt(prompt("ingrse numero"));
		}
		
		seguir=prompt("seguir?");
	
	if(numero>0){
		contPositivos=contPositivos+1;
		sumPositivos=sumPositivos+numero;
		
	}
	if(numero%2==1){
		cantidadImpares++;
	}
	if(letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"  ){
		sumaLetrasVocal=sumaLetrasVocal+letra;
	}

	
	
}
	 promedio=sumPositivos/contPositivos;

	document.write("<br> el promedio de los positivos es "+promedio);
	document.write("<br> la cantidad de impares es "+cantidadImpares);
	document.write("<br> suma de las letras vocales "+sumaLetrasVocal);




}
