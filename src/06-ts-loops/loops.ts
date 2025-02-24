console.log("Aufgabe");

let sumOfNumber = 0;

for (let i = 1; i <= 10; i++) {
    console.log(`${sumOfNumber} plus ${i} =`);
    sumOfNumber += i;
    console.log(sumOfNumber);
    if (i === 10) {
        console.log("Wir sind am Ende der Schleife angekommen");
    }
}

// Loops-TS-Level-1_1
console.log("----------Loops-TS-Level-1_1-----------");

for (let i = 1; i < 11; i++) {
    console.log(`Hello World ${i}`);
}

// Loops-TS-Level-1_2
console.log("----------Loops-TS-Level-1_2-----------");

let numbersToTen: number[] = [];

for (let i = 0; i < 11; i++) {
    numbersToTen.push(i);
}

console.log(numbersToTen);

// Loops-TS-Level-1_3
console.log("----------Loops-TS-Level-1_3-----------");

let whileCounter = 0;

while (whileCounter < 10) {
    whileCounter++;
    console.log(`Hallo World ${whileCounter}`);
}

// Loops-TS-Level-1_4
console.log("----------Loops-TS-Level-1_4-----------");

let friendsNames: string[] = [
    "Georg",
    "Anass",
    "Elaine",
    "Hakan",
    "Eric",
    "Kim",
    "Sergio",
];

for (let i = 0; i < friendsNames.length; i++) {
    console.log(friendsNames[i]);
}

console.log("--------");

for (const item of friendsNames) {
    console.log(item);
}

// Loops-TS-Level-1_7
console.log("----------Loops-TS-Level-1_7-----------");

let counterDoWhile = 1;
let output = document.querySelector(".do-while");
do {
    console.log(`The number is ${counterDoWhile}`);
    if (output) {
        output.innerHTML += `<p>The number is ${counterDoWhile}</p>`;
    }
    counterDoWhile++;
} while (counterDoWhile < 6);

// Loops-TS-Level-1_8
console.log("----------Loops-TS-Level-1_8-----------");

let evenNumbers = 1;
let outputEven = document.querySelector(".even-numbers");

do {
    if (evenNumbers % 2 === 0) {
        if (outputEven) {
            outputEven.innerHTML += `<p>${evenNumbers}</p>`;
        }
    }
    evenNumbers++;
} while (evenNumbers <= 20);

// Loops-TS-Level-2_2
console.log("----------Loops-TS-Level-2_2-----------");

const loopMeOutput = document.querySelector<HTMLParagraphElement>(".loop-me");
const loopNumber = document.querySelector("#number");
const form = document.querySelector("#loop-me");

form?.addEventListener("submit", loopMe);

function loopMe(event: Event) {
    event.preventDefault();
    let loopString: string[] = [];
    for (let i = 0; i < loopNumber.value; i++) {
        loopString.push("o");
    }
    if (loopMeOutput) {
        if (Number(loopNumber.value) < 3) {
            loopMeOutput.innerHTML = `L…p<br><i>Loop kann nicht aus weniger als 2 "o" bestehen!</i>`;
            loopMeOutput.style.color = "red";
        } else {
            loopMeOutput.innerHTML = `L${loopString.join("")}p`;
            loopMeOutput.style.color = "green";
        }
    }
}
