function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var acumulador=0;

	
	var respuesta='si';

	while(respuesta=="si"){

		numero=parseInt(prompt("ingresar numero"));
		acumulador=acumulador+numero;
		contador=contador+1;

		respuesta=prompt("continuar?");

	
	if (numero>0){
		contador++;
		
	}
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN