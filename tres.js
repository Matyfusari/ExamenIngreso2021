function mostrar()
{let nombre;
	let estadoCivil;
	let edad;
	let temperatura;
	let sexo;
let respuesta;
let precioPorPasajero=600;
let precioDescuentoPorPasajero= (600*0.75);
let precioTotal;
let precioTotalDescuento;
	let contadorMayoresViudos =0;
let nombreMujerSolteraJoven;
let edadMujerSolteraJoven;
let contadorPasajeros=0;
let pasajerosMayores=0;


do{
		nombre= prompt ("ingrese su nombre");
		estadoCivil = prompt("ingrese su estado civil");
		while (estadoCivil != "soltero" && estadoCivil!= "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error, ingrese su estado civil");
		}
		edad = parseInt(prompt("ingrese su edad, si no es mayor de edad, no podra viajar"));
		while(edad< 18){
			edad = parseInt(prompt("Es menor de edad, si no es mayor de edad, no podra viajar"));
		}
		temperatura = parseFloat(prompt("ingrese su temperatura"));
		while(temperatura > 37.5){
			temperatura = parseFloat(prompt("Temperatura superior a 37.5, posible covid, ingrese su temperatura"));
		}
		sexo= prompt ("ingrese su sexo m o f");
		while(sexo != "m" && sexo!= "f"){
			sexo= prompt ("Error, ingrese su sexo m o f");
		}

if(edad> 60 && estadoCivil =="viudo"){
	contadorMayoresViudos++;               // punto A
}

if(sexo == "f" && estadoCivil == "soltero"){
	nombreMujerSolteraJoven = nombre;
	edadMujerSolteraJoven = edad;
}


if(edad > 60){
	pasajerosMayores++;
}
contadorPasajeros++;
seguir = prompt("Desea seguir, coloque si de asi serlo")
	}while(respuesta == "si");

	precioTotal = (600 * contadorPasajeros)
	
if((pasajerosMayores / contadorPasajeros) * 100 == 50 ){
precioTotalDescuento = (precioTotal * 0.75)
}else{
	precioTotalDescuento = precioTotal;
}

	document.write("A- La cantidad de personas viudas de mas de 60 años es de "+ contadorMayoresViudos+ "<br>");
	document.write("B- El nombre de la mujer soltera mas joven es " + nombreMujerSolteraJoven + " y su edad es "+ edadMujerSolteraJoven + "<br>");
	document.write("C- El precio total del viaje es de "+ precioTotal + "<br>");
	document.write("D- el precio con descuento es de " + precioTotalDescuento + "<br>");
	
}
