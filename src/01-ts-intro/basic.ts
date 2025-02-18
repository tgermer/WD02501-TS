console.log("Welcome :)");

// Intro-TS-Level-1_8 (Variablen)
console.log("%cIntro-TS-Level-1_8 (Variablen)", "color: red;");

let x: number = 20;
let y: number = 30;

console.log(`x + y = ${x + y}`);
console.log(`y - x = ${y - x}`);
console.log(`x - y = ${x - y}`);
console.log(`x * y = ${x * y}`);
console.log(`x / y = ${x / y}`);

// let z: number = 10;
let resultOne: number = (x * y) / 10;
console.log(`x * y / 10 = ${resultOne}`);

let a: number = 15;
let b: number = 9;

console.log(`Modulo a / b = ${a % b}`);

let c: number = 20;
let resultTwo: number = (a + b) * c;
console.log(`(a + b) * c = ${resultTwo}`);

console.log(`a inkrementiert um 1 = ${a++}`);
console.log(`b dekrementiert um 1 = ${b--}`);

let resultThree: Number = a - b;
console.log(`a - b = ${resultThree}`);

console.log(`Modulo resultOne / resultTwo ${resultOne % resultTwo}`);

// Intro-TS-Level-1_12
console.log("%cIntro-TS-Level-1_12", "color: red;");

let dogName = "Leon";
console.log(dogName);

dogName = "elf";

// let wahr: boolean = true;
// wahr = false;

let seventeen: number = 17;

const sum = seventeen + 44;
console.log(sum);

// Intro-TS-Level-1_13 (Operatoren)
console.log("%cIntro-TS-Level-1_13 (Operatoren)", "color: red;");

// Addition
let addition_operator: number = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log("division: " + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log("modulus: " + modulo_operator);

// Intro-TS-Level-1_16 (Arithmetische Operatoren)
console.log("%cIntro-TS-Level-1_16 (Arithmetische Operatoren)", "color: red;");

let score1: number = 5 + 5 * 10;
console.log("Ergebnis: " + score1);

let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);

score3 += 10;
console.log("Ergebnis: " + score3);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("dekrement: " + zahl);
