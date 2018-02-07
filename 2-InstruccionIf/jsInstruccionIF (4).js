function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad >12 && edad<17){
		alert("es adolecente");
	}


}//FIN DE LA FUNCIÓN