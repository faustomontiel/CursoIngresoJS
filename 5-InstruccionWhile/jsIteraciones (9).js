function Mostrar()
{

	var contador=0;
	var numero;
	var maximo=0;
	var minimo=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')

	{	
		
		numero=parseInt(prompt("ingrese un numero"));
		
		contador ++;
		
		
      if(contador == 1) {
         maximo = numero;
         minimo = numero;
      }else{
      	if(maximo<numero){
      		maximo=numero;
      	}else{
      		if(minimo>numero){
      			minimo=numero;
      		}
      	}
      } 
		      
      respuesta=prompt("continuar?");

     
		
	}	
		
		document.getElementById('minimo').value=minimo;
		document.getElementById('maximo').value=maximo;



}//FIN DE LA FUNCIÓN