function Mostrar()
{

	var contador=0;
	var numero=0;
	var sumNegativos=0;
	var sumPositivos=0;
	var acumulador=0;
	var contPositivos=0;
	var cantNegativos=0;
	var contCeros=0;
	var contPar=0;
	var promPos;
	var promNeg;
	var diferencia;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=parseInt(prompt("ingrse numero"));
		contador++;
		
		respuesta=prompt("seguir?");

	
	if(numero>0){
		sumPositivos=sumPositivos+numero;
		contPositivos=contPositivos+1;
	}else{
		if(numero<0){
			sumNegativos=sumNegativos+numero;
			cantNegativos=cantNegativos+1;
		}
	}
	if(numero==0){
		contCeros=contCeros+1;	
	}
	if(numero%2==0){
		contPar=contPar+1;
	}


}	
	promPos=sumPositivos/contPositivos;
	promNeg=sumNegativos/cantNegativos;
	diferencia=sumPositivos+sumNegativos;

	document.write("<br>la suma de positivos es  "+sumPositivos);
	document.write("<br>la suma de negativos es  "+sumNegativos);
	document.write("<br>la cantidad de positivos es  "+contPositivos);
	document.write("<br>la cantidad de negativos es  "+cantNegativos);
	document.write("<br>la cantidad de pares es  "+contPar);
	document.write("<br>el promedio de los positivos es   "+promPos);
	document.write("<br>el promedio de los negativos es   "+promNeg);
	document.write("<br>la diferencia entre positivos y negativos es   "+diferencia);






}//FIN DE LA FUNCIÓN