function Mostrar()
{
	var contador=0;
	var numero;
	var maximo=0;
	var minimo=0;
	var acumulador=0;
	

	while(contador<7)
	{
		numero=parseInt(prompt("Ingrese numeros ventas de 7 dias habiles"));
		contador++;
		acumulador=acumulador+numero;
		

		if(contador==1){
			numero=maximo;
		} else{
			if(maximo<numero){
				numero=maximo;
			}else{
				if(minimo>numero){
					minimo=numero;
				}
			}
		}

}

		document.write("el importe mayor fue"+maximo);
		document.write("el importe minimo fue"+minimo);

}
