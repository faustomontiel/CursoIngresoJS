function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo !="f" && sexo !="m"){
	alert("vuelva a ingresar el sexo");
	sexo=prompt("ingrese f ó m .");

}

if(sexo=="f"){
document.getElementById('Sexo').value="femenino";
}
else{
	document.getElementById('Sexo').value="masculino";
}

}//FIN DE LA FUNCIÓN