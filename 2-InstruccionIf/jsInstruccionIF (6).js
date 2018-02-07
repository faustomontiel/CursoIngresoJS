function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad<13){
		alert("niño");
	}
	else{
		if(edad>18){
			alert("es mayor");
		}else{
			alert("adolescente");
		}
	}



}//FIN DE LA FUNCIÓN