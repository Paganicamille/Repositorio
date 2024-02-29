const nome = "Camille";
const idade = 16 ;
console.log ("Olá, meu nome é",nome," e eu tenho ",idade,"anos ")
/*1)*/

const minhaString = "Olá, Queridos!";
const stringMaiúscula = minhaString.toUpperCase();
console.log(stringMaiúscula);

const outraString = "Eu sou linda!";
const stringMinúscula = outraString.toLowerCase();
console.log(stringMinúscula);
/*2)*/

var valor = 42;
console.log(typeof valor);
/*3)*/

let peso = 58; 
let altura = 1.71;
let imc = (peso/(altura**2));
console.log (imc);
/*4)*/

let valor1= 5;
let valor2 = 7;
console.log (valor1 + valor2);
console.log (valor1 - valor2);
console.log (valor1 * valor2);
console.log (valor1 / valor2);
/*5)*/

let idade1 = 60;
let idade2 = 18;
console.log(idade1<idade2);
/*6)*/

let idade3 = 45;
let conferir = idade >=18 ? "maior de idade" : "Menor de idade ";
console.log(conferir);
/*7)*/

let num = 6;
let conferir2 = num % 2 == 0? "Par" : "Impar";
console.log(conferir2);
