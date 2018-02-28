//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var animal;
	var cantidadAnimal=0;
	var tempHabitad;
	var peso;
	var contador=0;
	var seguir="";
	var acumulador=0;
	var contTempPar=0;
	var contTempImpar=0;
	var pesoMaximo=0;
	var pesoMinimo=0;
	var animalPesado;
	var animalLiviano;



	while(seguir!="si"){

		animal=prompt("ingrese el nombre de un animal");
		peso=parseInt(prompt("ingrese peso"));

		while(peso<0 || isNan(peso)){
			peso=parseInt(prompt("ingrese peso"));
		}
		
		acumulador=acumulador+peso;

		tempHabitad=parseInt(prompt("tempHabitad"));

		while(tempHabitad<-40 || tempHabitad >40 || isNaN(tempHabitad)){
			tempHabitad=parseInt(prompt("tempHabitad"));
		}
		if(tempHabitad%2==0 && tempHabitad !=0){
			contTempPar++;
		}else if (tempHabitad%2==1 && tempHabitad !=0) {
			contTempImpar++;
		}

		contador++;
		if(contador==1){
			pesoMaximo=peso;
			animalPesado=animal;
			pesoMinimo=peso;
			animalLiviano=animal;
		}else{
			if(peso>pesoMaximo){
				pesoMaximo=peso;
				animalPesado=animal

			}else{
			if(peso<pesoMinimo){
				pesoMinimo=peso;
				animalLiviano=animal;
			}
			document.write("<br>cantidad de numeros pares "+contTempPar);
			document.write("<br>cantidad de numeros impares "+contTempImpar);
			document.write("<br>el de mayor peso es "+pesoMaximo);
			document.write("<br>el de menor peso es "+pesoMinimo);
}
	
		









