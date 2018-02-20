function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si"){

		numero=parseInt(prompt("ingresar numero"));
		acumulador=acumulador+numero;
		contador=contador+1;

		respuesta=prompt("continuar?");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN