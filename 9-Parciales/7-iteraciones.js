//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var contador=0;
	var seguir="";
	var acumulador=0;
	var sexo;
	var promNotas;
	var minimo=0;

	while(seguir!="no"){

		nota=parseInt(prompt("ingrese una nota"));
	
		contador++;
	
	while(nota<0 || nota>10 && !isNan(nota)){
    		nota=parseInt(prompt("ingrese una nota"));
    		
    	}
    	acumulador=acumulador+nota;
		
    	sexo=prompt("ingrse sexo");
    	seguir=prompt("continuar?");

    	while(sexo!="f" && sexo!="m" ){
    		sexo=prompt("ingrse sexo");

    	}
    	if(contador==1){
    		minimo=nota;
    		}else{
    			if(nota<minimo){
    				minimo=nota;
    			}
    		}
    		
}

		promNotas=acumulador/contador;
    	alert("el promedio de las notas es "+promNotas);
    	alert("el nota mas baja fue "+minimo);

	
}

