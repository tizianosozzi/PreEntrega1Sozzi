var sumaEdad = 0;
var edadPromedio = 0;
var cantidadJugadores = 0;

for (let i = 1; i < 16; i++){
    let jugador = prompt("Ingrese Nombre y apellido del jugador. Si no hay mas jugadores presione ESC.");
    let edad = prompt("Ingrese la edad del jugador. Si no hay mas jugadores presione ESC.");
    let anios = parseInt(edad);
    sumaEdad = sumaEdad + anios;
    cantidadJugadores = cantidadJugadores + 1;
    edadPromedio = (sumaEdad / cantidadJugadores);
    console.log("Jugador numero " + i + " " + jugador + ". Edad: " + anios);
    if( jugador == null || edad == null){
        console.log("Este es tu equipo final.");
        console.log("Tu equipo esta conformado por " + (cantidadJugadores - 1) + " jugadores y la edad promedio es de " + edadPromedio + " anios");
        break
    } 
    
}
 
/* no entiendo por que la linea 11 me tira un NaN y tampoco se como puedo hacer 
para que una vez apretado dos veces ESC para generar el break, que no aparezca 
en la consola del navegador la linea que dice NULL. */