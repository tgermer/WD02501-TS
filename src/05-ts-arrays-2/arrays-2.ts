//  concat()
// fügt zwei oder mehr Arrays zusammen und speichert sie in einem neuen Array

const groceries: string[] = [
    "Avocado",
    "Tomato",
    "Sour Cream",
    "Cheddar",
    "Tacos",
];

const beverages: string[] = ["Wasser", "Radler", "Bionade", "Cidre"];

const shoppingList = groceries.concat(beverages);

console.log(shoppingList);

// Arrays kopieren
// kopieren von einfachen Datentypen ist problemlos möglich

let priceOfShoes = 69.99;
let priceOfBackpack = priceOfShoes;
console.log(priceOfBackpack);

// -> kopieren von Arrays
const fruits = ["Annanas", "Bananen", "Pfirsich", "Kirsche"];
console.log(fruits);

// Array-TS-Sort-Level-1_3 (sort)
console.log("Array-TS-Sort-Level-1_3 (sort)––––––––––––––");

const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

const numArray1Sort = numArray1.sort((a, b) => a - b);
console.log(numArray1Sort);

// Array-TS-Sort-Level-1_1 (sort)
console.log("Array-TS-Sort-Level-1_1 (sort)––––––––––––––");

const languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift",
];

function sortAlphabetically(array: string[]) {
    const arraySorted = array.sort((a, b) => a.localeCompare(b));
    return arraySorted;
}

console.log(sortAlphabetically(languages));

const europeanCountries = [
    "France",
    "Germany",
    "Sweden",
    "Czech Republic",
    "Switzerland",
    "Great Britain",
];

console.log(sortAlphabetically(europeanCountries));

// Array-TS-Iteration-Level-1_1 (forEach)
console.log("Array-TS-Iteration-Level-1_1 (forEach)––––––");

const getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta",
];

function myDrinks(input: string[]) {
    const sorted = input.sort((a, b) => a.localeCompare(b));
    sorted.forEach((item) => console.log(item));
    const output = document.querySelector(".my-drinks");
    sorted.forEach((item) => (output.innerHTML += `<li>${item}</li>`));
}

myDrinks(getraenke);

// Array-TS-Iteration-Level-1_2 (map)
console.log("Array-TS-Iteration-Level-1_2 (map)–––––––––");

const drinks = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta",
];

drinks.map((item) => console.log(item.toUpperCase()));

drinks.map((item) => console.log(`I linke ${item}`));

// Array-TS-Iteration-Level-1_8 (filter)
console.log("Array-TS-Iteration-Level-1_8 (filter)––––––");

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(input: number[]) {
    return input.filter((item) => {
        if (item % 2) {
        } else {
            return item;
        }
    });
}

function printEvenNumbersShort(input: number[]) {
    return input.filter((item) => (item % 2 === 0 ? item : 0));
}

function printOddNumbers(input: number[]) {
    return input.filter((item) => {
        if (item % 2) {
            return item;
        } else {
        }
    });
}

function printOddNumbersShort(input: number[]) {
    return input.filter((item) => (item % 2 !== 0 ? item : 0));
}

console.log(printEvenNumbers(zahlen));
console.log(printEvenNumbersShort(zahlen));
console.log(printOddNumbers(zahlen));
console.log(printOddNumbersShort(zahlen));

// Array-includes()-Level-1_11
console.log("Array-includes()-Level-1_11–––––––-––––––");

let string =
    "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

console.log(string.includes("Piper"));
console.log(string.includes("piper"));
console.log(string.toLowerCase().includes("piper"));
console.log(string.includes("peck"));
console.log(string.includes("peck", 22));
