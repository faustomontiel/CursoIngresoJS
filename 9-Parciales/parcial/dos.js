function Mostrar()
{ 
	 var importe;
	 var importeFinal;
	 var descuento;

	 importe=parseInt(prompt("ingrese precio"));
	 descuento=parseInt(prompt("ingrse el descuento"));

	 

	 descuento=(importe*descuento)/100;
	 importeFinal=importe-descuento;

	 document.getElementById('importeFinal').value=importeFinal;

}
