function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño){
	case "Febrero":

		alert("Tiene 28 dias");
		break;
    case "Abril":
    case "Junio":
    case "Agosto":
    case "Noviembre":
    	alert("Tienen 30 dias");
    	break;
    default :
    	alert("Tienen 31 dias");
    }
	
	



}//FIN DE LA FUNCIÓN