
function Mostrar()
{
	var base;
	var altura;
	var perimetroTriangulo;
	var superficie;
	
	base=document.getElementById('laBase').value;
	
	altura=prompt("ingresar altura: ")

	perimetroTriangulo=base*3;
	superficie=(base*altura)/2;
	
	alert("El perimetro es "+perimetroTriangulo);
	alert("la superficie es "+superficie);
}