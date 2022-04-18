//  Calculo de Metabolismo Basal



alert("Ingresa los datos para calcular tu metabolismo basal");

// Solicito informacion de sexo //

let sexo;
let valor = true;
while (valor) {
    sexo = prompt("Ingresa tu sexo : Hombre o Mujer ");
    sexo = sexo.toLowerCase(); //convierto variable a minusculas //
    if (sexo == "hombre") {
        valor = false; // si es V entonces termina el ciclo //
    } else if (sexo == "mujer") {
        valor = false; // si es V entonces termina el ciclo //
    } else if (sexo == null) {
        break;
    } else {
        alert("sexo incorrecto");
    }
}

// Solicito informacion de edad //

let edad;
let valor2 = true;
while (valor2) {
    edad = Number(prompt("Ingresa tu edad en años"));
    if (edad > 3 && edad < 100 ) {
        valor2 = false;
    } 
    else { 
        alert("edad incorrecto");
        
    }
}

// Solicito informacion del peso//

let peso;
let valor3 = true;
while (valor3) {
    peso = Number(prompt("ingresa tu peso en kilos"));
    if (peso > 10 && peso < 200) {
        valor3 = false;
    } else {
        alert("peso incorrecto");
    }
}

// Solicito informacion de Altura//

let altura;
let valor4 = true;
while (valor4) {
    altura = Number(prompt("ingresa tu altura en cm"));
    if (altura > 50 && altura < 250) {
        valor4 = false;
    } else {
        alert("altura incorrecto");
    }
}

if (sexo === "mujer") {
    alert( "Tu indice de MTB "+" "+"es"+" " +(655 +9.6 * peso +1.8 * altura - 4.7 * edad )+"  " + " calorias diarias "
    );
} else if (sexo === "hombre") {
    alert("Tu indice de MTB "+" "+"es"+" " +(66 + 13.7 * peso + 5 * altura - 6.8 * edad )+ "  " + " calorias diarias "
    );
}







// let sexo = prompt ("Ingresa tu sexo  Hombre o Mujer");
// sexo = sexo.toLowerCase();
//     if (sexo=="hombre"){
//         let edad = Number (prompt ("Ingresa tu edad"));
//             if (edad >=2 && edad <= 100){
//                 let peso = Number (prompt ("ingresa tu peso en kilos"))
//                     if (peso >10 && peso <=200){
//                         let altura = Number (prompt ("ingresa tu altura en cm"))
//                             if(altura > 60 && altura <=240){
//                                 alert (( 66 + (13.7 * peso ) + (5 * altura) - (6.8 * edad ) )+"  " + " Kilocalorias diarias ")

//                             }

//                     }
//                     else {
//                         alert ("ingresa un Peso Correcto")
//                     }

//             }

//             else {
//                 alert ("Ingresa una edad entre 2 y 100")
//             }

//     }

// else if (sexo=="mujer"){
//     let edad = Number (prompt ("Ingresa tu edad"));

// }

// else{
//      alert ("que sexo es ese , sorete  ")
//      alert ("deja de joder")
// }

// else (sexo=="mujer");{
//     console.log (( 655 + (9.6 * peso ) + (1.8 * altura) - (4.7 * edad ) ) + "Kilocaloriasdiarias")
// }
