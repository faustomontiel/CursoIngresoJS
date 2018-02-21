function Mostrar()
{	
	var numeroRandom;
	var porcen0=0;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var porcen0=0;
	var porcen1=0;
	var porcen2=0;
	var porcen3=0;
	var porcen4=0;
	var porcen5=0;
	var porcen6=0;
	var porcen7=0;
	var porcen8=0;
	var porcen9=0;

	for(contador=0;contador<100;contador++)
	{
		numeroRandom=Math.floor(Math.random() * 10);
		//document.write("<br>"numeroRandom);

	
	switch(numeroRandom){
		case 0:
			contador0++;
			break;
		case 1:
			contador1++;
			break;
		case 2:
			contador2++;
			break;
		case 3:
			contador3++;
			break;
		case 4:
			contador4++;
			break;
		case 5:
			contador5++;
			break;
		case 6:
			contador6++;
			break;
		case 7:
			contador7++;
			break;
		case 8:
			contador8++;
			break;
		case 9:
			contador9++;
			break;
		} 
												
	}//fin for

	porcen0=(contador0/(contador+1))*100;
	porcen0=Math.round(porcen0);
	document.write("<br>cant de 0 : "+contador0+"  porcen: "+ porcen0+" %");

	porcen1=(contador1/(contador+1))*100;
	porcen1=Math.round(porcen1);
	document.write("<br>cant de 1 : "+contador1+"  porcen: "+ porcen1+" %");

	porcen2=(contador2/(contador+1))*100;
	porcen2=Math.round(porcen2);
	document.write("<br>cant de 2 : "+contador2+"  porcen: "+ porcen2+" %");

	porcen3=(contador3/(contador+1))*100;
	porcen3=Math.round(porcen3);
	document.write("<br>cant de 3 : "+contador3+"  porcen: "+ porcen3+" %");

	porcen4=(contador4/(contador+1))*100;
	porcen4=Math.round(porcen4);
	document.write("<br>cant de 4 : "+contador4+"  porcen: "+ porcen4+" %");

	porcen5=(contador5/(contador+1))*100;
	porcen5=Math.round(porcen5);
    document.write("<br>cant de 5 : "+contador5+"  porcen: "+ porcen5+" %");

	porcen6=(contador6/(contador+1))*100;
	porcen6=Math.round(porcen6);
	document.write("<br>cant de 6 : "+contador6+"  porcen: "+ porcen6+" %");

	porcen7=(contador7/(contador+1))*100;
	porcen7=Math.round(porcen7);
	document.write("<br>cant de 7 : "+contador7+"  porcen: "+ porcen7+" %");
	porcen8=(contador8/(contador+1))*100;
	porcen8=Math.round(porcen8);
	document.write("<br>cant de 8 : "+contador8+"  porcen: "+ porcen8+" %");

	porcen9=(contador9/(contador+1))*100;
	porcen9=Math.round(porcen9);
	document.write("<br>cant de 9 : "+contador9+"  porcen: "+ porcen9+" %");


	/*document.write("<br>0: "+ contador0);
	document.write("<br>1: "+ contador1);
	document.write("<br>2: "+ contador2);
	document.write("<br>3: "+ contador3);
	document.write("<br>4: "+ contador4);
	document.write("<br>5: "+ contador5);
	document.write("<br>6: "+ contador6);
	document.write("<br>7: "+ contador7);
	document.write("<br>8: "+ contador8);
	document.write("<br>9: "+ contador9);
*/
}