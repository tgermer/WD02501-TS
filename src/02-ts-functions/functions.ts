function sayHi() {
    console.log("Hallo Jule");
}
sayHi();

function sayHiName(firstName?: string) {
    firstName = firstName ?? "Stanger";
    console.log(`Hallo ${firstName}`);
}

sayHiName("Tristan");
sayHiName();

function addMe(zahl1: number, zahl2: number) {
    console.log(zahl1 + zahl2);
}

addMe(40, 20);

function addTwenty(inputNumber: number) {
    return inputNumber + 20;
}

let newNumber = addTwenty(20);
console.log(newNumber);

// -> Functions-TS-Grundlagen-Level-1_7

function multiplyByTwo(inputNumber: number) {
    console.log(`Input = ${inputNumber} --> ${inputNumber * 2}`);
}

multiplyByTwo(10);

// --> Functions-TS-Grundlagen-Level-1_9

function moreOverMyself(
    firstName: string,
    lastName: string,
    placeOfBirth: string,
    age: number,
    city: string
) {
    console.log(
        "Mein Name ist " +
            firstName +
            " " +
            lastName +
            ". Ich bin in " +
            placeOfBirth +
            " geboren. Ich lerne bei SuperCode. Ich bin " +
            age +
            " Jahre alt. Ich wohne in " +
            city +
            "."
    );

    // console.log(
    //     `Mein Name ist ${firstName} ${lastName}.  Ich bin in ${placeOfBirth} geboren.  Ich lerne bei SuperCode.  Ich bin ${age} Jahre alt.  Ich wohne in ${city}.`
    // );
}
moreOverMyself("Tristan", "Germer", "Nordhausen", 43, "München");

// --> Functions-TS-Grundlagen-Level-1_4

function showHero(heroName: string, heroPower: string, heroEnemy: string) {
    let nameOutput = "Mein:e Liblingsheld:in ist: " + heroName;
    let powerOutput = "Er/sie hat die Fähigkeit: " + heroPower;
    let enemyOutput = "Sein/ihr größte/r Gener:in ist: " + heroEnemy;
    console.log(nameOutput, powerOutput, enemyOutput);
}

showHero("Spider-Man", "Spinnensinn und Wandkrabblen", "Der grüne Koblod");

// --> Functions-TS-Grundlagen-Level-1_6

function returnOne() {
    return 1;
}

let x = 1;
let y = returnOne();

if (x === y) {
    console.log("Wird das gedruck?");
} else {
}

// --> Functions-TS-Grundlagen-Level-1_8

function calculateAge(yearOfBirth: number) {
    let age = new Date().getFullYear() - yearOfBirth;
    return age;
}

let age = calculateAge(1981);
console.log(age);
