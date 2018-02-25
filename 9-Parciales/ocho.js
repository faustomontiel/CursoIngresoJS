/*ingreso de aluimnos no sabemos cuantos alumnos hay, pedir nombres
cuantos alumnos ingrese */

function Mostrar()
{
	var nombre;
	var cantidadDeAlumnos=0;
	var seguir="";
	var nota=0;
	var promedio;
	var acumulador=0;
	var sexo;
	var masculino=0;
	var femenino=0;
	var cantVaronesDesaprobados=0;
	var maximo=0;
	var sumaMujeres=0;
	var promedioMujeres;
	var edad;
	var menor=0;
	var sumaEdad=0;
	var promedioEdad;
	var contarEdad=0;
		

	while(seguir!="no"){
		nombre=prompt("ingrse un nombre  ");
		cantidadDeAlumnos=cantidadDeAlumnos+1;
		nota=parseInt(prompt("ingrese una nota"));


    	while(nota<0 || nota>10){
    		nota=parseInt(prompt("ingrese una nota"));
    	}
    	acumulador=acumulador+nota;s

    	 sexo=prompt("ingrese sexo");
    	 edad=parseInt(prompt("ingrese edad"));

    	seguir=prompt("no para salir");


    while(sexo !="f" && sexo !="m"){
		sexo=prompt("ingrse sexo");
	}
	if(sexo=="f"){
		femenino++;
	}else{
	if(sexo=="m"){
		masculino++;
		}
	}// cantidad de mujeres y varones
	if(nota<4 || sexo==masculino){
		cantVaronesDesaprobados=cantVaronesDesaprobados+1;
	}
	if(nota==1){
		maximo=nombre;
	}else{6
		if(nombre>maximo){
			maximo=nombre;
		}
	}//nombre de la nota mayor
	if(sexo=="f"){
		sumaMujeres=sumaMujeres+nota;

	}
	if(edad==1){
		menor=sexo;

	}else{
		if(sexo>menor){
			sexo=menor;
		}
		
	}
	
	
	}
			promedio=acumulador/cantidadDeAlumnos;

			promedioMujeres=sumaMujeres/femenino;

			promedioEdad=sumaEdad/contarEdad;

	document.write("hay "+cantidadDeAlumnos+" alumnos");
	document.write("<br>el promedio es "+promedio);
	document.write("<br>la cantadidad de mujeres es "+femenino);
	document.write("<br>la cantidad de hombres es "+masculino);
	document.write("<br>la cantidad de hombres cantVaronesDesaprobados es "+cantVaronesDesaprobados);
	document.write("<br>el nombre de la mayor nota es  "+nombre);
	document.write("<br> el promedio de la nota de mujeres es "+promedioMujeres);
	document.write("<br> el sexo del menor es  "+sexo);
	document.write("<br> el promedio de edad de los aprobados es  "+promedioEdad);

	}
	





