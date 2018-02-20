function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta=="si"){

		numero=parseInt(prompt("ingresar numero"));
		respuesta=prompt("continuar?");
		
	
	if (numero>0){
		positivo=positivo+numero;
		
	}
	else{
		negativo=negativo*numero;
	}
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN