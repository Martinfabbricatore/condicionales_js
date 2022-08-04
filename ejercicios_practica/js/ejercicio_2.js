"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

if (texto1 > texto2){
    prompt("La primera palabra es mayor que la segunda.")
}else{
    prompt("La segunda palabra es mayor que la primera.")
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda

if (copiaTexto1 === texto1){
    alert("copiatexto1 y texto1 son iguales");
}else{
    alert("copiatexto1 y texto1 no son iguales");
}


// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda

if (copiaTexto1 != texto2){
    alert("copiadetexto1 y texto2 son distintas");
}else{
    alert("copiasdetexto1 y texto2 son iguales");
}
