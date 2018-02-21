function Mostrar()
{	
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCeros=0;
	var contadorDePares=0;
	var contadorDeImares=0;
	var contador50=0;
	for(contador=-100;contador<100;contador++){
		if(contador>0){
			contadorDePositivos++;
		}else{
			if (contador<0) {
				contadorDeNegativos++;
			}else{
				contadorDeCeros++;

			}

		}
		if(contador%2==0 && contador!=0){
			contadorDePares++;
		}else{
			if(contador!=0){
				contadorDeImares++;
			}
		}

		switch(contador){
			case 50:
				contador50 ++;
				break;

		}
	}

	document.write("positivos"+contadorDePositivos);
	document.write("negativos"+contadorDeNegativos);
	document.write("ceros"+contadorDeCeros);
	document.write("pares"+contadorDePares);
	document.write("impares"+contadorDeImares);
	document.write("de 50 "+contador50);







}

	/*for(;;){
		contador++;
		document.write("<br>"+contador);
		if(contador==10){
			
			document.write("<br>break"+contador);	
			break;

		}
		if(contador==5)
		{
			continue;
		}
		document.write("<br>continue"+contador);
	}

}*/