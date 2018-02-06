/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numuno;
	var numdos;
	var suma;

	numuno=document.getElementById('numeroUno').value;
	numdos=document.getElementById('numeroDos').value;

	numuno=parseInt(numuno);
	numdos=parseInt(numdos);
	suma= numuno + numdos;

	alert("la suma es "+suma);


}

