function Mostrar()
{
	var contador=0;
	var numero;
	
	var maximo=0;
	var minimo=0;
	while(contador<24){
		
		numero=parseInt(prompt("Ingrese numeros ventas de 24 dias habiles"));
		
		contador++;
		

		if(contador==1){
			maximo=numero;
			minimo=numero
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


		document.write("<br>el importe mayor fue "+maximo);
		document.write("<br>el importe minimo fue "+minimo);


}
