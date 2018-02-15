function Mostrar()
{
//tomo la edad  

	var edad;
	var estadocivil;

	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;
	edad=parseInt(edad);
	if(edad < 18 && estadocivil !=("solero")){
		
	}
	else{
		alert("Es solero y no es menor");
	}


}//FIN DE LA FUNCIÓN