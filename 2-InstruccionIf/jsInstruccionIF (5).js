function Mostrar()
{
//tomo la edad  

var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (!(edad >12 && edad<17)){
		alert("no es adolescente");
	}

	

}//FIN DE LA FUNCIÓN