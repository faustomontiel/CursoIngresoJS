function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5){
		numero=parseInt(prompt("ingresar 5 numeros"));
		acumulador=acumulador+numero;
		contador++;
	}







document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
