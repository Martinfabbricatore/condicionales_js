"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

if (texto1 > texto2)
alert("El texto1, " + texto1 + "es mayor que el texto2, " + texto2);
else{
    alert("El texto2, " + texto2 + "Es mayor que el texto1, " + texto1);
}

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda

let numero1 = parseInt(texto1);
let numero2 = parseInt(texto2);
if (numero1 > numero2)
alert("El numero, " + numero1 + "es mayor que el numero, " + numero2 );
else{
    alert("El numero, " + numero2 + "es mayor que el numero, " + numero1) 
}



//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)
