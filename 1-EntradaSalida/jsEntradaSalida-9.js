/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var ingreso;
	var Resultado;

	ingreso=document.getElementById('sueldo').value;
	ingreso=parseInt(ingreso);
	Resultado=parseInt(Resultado);
	Resultado=ingreso*1.10;
	document.getElementById('resultado').value=Resultado;
	
}
