function Mostrar()
{

	var contador=0;
	var numero;
	var maximo=0;
	var minimo=0
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=parseInt(prompt("ingrese un numero"));
		respuesta=prompt("continuar?");
		contador ++;
		
      if(contador == 1) {
         maximo = numero;
         minimo = numero;
      } 
      if (numero>maximo) {
      		numero=maximo
      }
      if (numero<minimo) {
      	numero=minimo
      }

     
		
	}	
		
		document.getElementById('minimo').value=minimo;
		document.getElementById('maximo').value=maximo;



}//FIN DE LA FUNCIÓN