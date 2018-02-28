//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var numero;
	var maximo=0;
	var minimo=0;

	

	while(contador<7)
	{
		numero=parseInt(prompt("Ingrese numeros ventas de 7 dias habiles"));
		contador++;
		
		

		if(contador==1){
			maximo=numero;
			minimo=numero;
		} else{
			if(maximo<numero){
				maximo=numero;
			}else{
				if(minimo>numero){
					minimo=numero;
				}
			}
		}

}

		document.write("<br>el importe mayor fue"+maximo);
		document.write("<br>el importe minimo fue"+minimo);

	
}

