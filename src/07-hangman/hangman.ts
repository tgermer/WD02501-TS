const words = [
    "Abendbrot",
    "Brueckentag",
    "Erklaerungsnot",
    "Fingerspitzengefuehl",
    "Fremdschaemen",
    "Geborgenheit",
    "Geschmacksverirrung",
    "Schweinehund",
    "Kopfkino",
    "Kummerspeck",
    "Schnapsidee",
    "Torschlusspanik",
    "verabredet",
    "verschlimmbessern",
    "Vorfreude",
    "Weltschmerz",
    "Zeitgeist",
    "Zugzwang",
    "SuperCodeSuperTrainer",
    "Kronkorkenzackenzaehlmaschine",
    "Maise",
];

const score = document.querySelector(".score");
const buttons = document.querySelector(".letter-btns");
const searchWord = document.querySelector(".search-word");
const hitMeAgain = document.querySelector(".hit-me-again");

const maxScore = 6;
let currentScore = 0;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (const letter of alphabet) {
    // console.log(letter);
    if (buttons) {
        buttons.innerHTML += `<button class="letter-btn">${letter}</button>`;
    }
}

// console.log(allLetterBtns);
function randomWord() {
    const length = words.length;
    // console.log(length);
    const randomNum = Math.floor(Math.random() * length);
    // console.log(randomNum);
    // console.log(words[randomNum]);
    return words[randomNum];
}

const randomWordN = randomWord();
console.log("randomWord Ausgefürht:", randomWordN);

function addPlaceholder() {
    let placeholder = "_";
    const randomWordN = randomWord();
    console.log("addPlaceholder Ausgefürht:", randomWordN);
    if (searchWord) {
        searchWord.innerHTML = placeholder.repeat(randomWordN.length);
        searchWord.innerHTML += "<br>" + randomWordN.toUpperCase();
        // console.log(placeholder.repeat(randomWord().length));
    }
    return randomWordN;
}

hitMeAgain?.addEventListener("click", newGame);

function newGame() {
    const newSearchWord = addPlaceholder();
    console.log("NewGame", newSearchWord);
    return newSearchWord;
}

const allLetterBtns =
    document.querySelectorAll<HTMLButtonElement>(".letter-btn");

// console.log(allLetterBtns);

console.log("Nur Console", randomWordN);

allLetterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const clickedButton = event.currentTarget;
        if (clickedButton instanceof HTMLButtonElement) {
            clickedButton.disabled = true;
            clickedButton.style.cursor = "auto";
            const letter = clickedButton.innerText;
            console.log(`Geklickter Button: ${letter}`);
            console.log("buchstabe", newGame);

            // Herausfinde, ob Buchstabe im Searchword
            // if ()
        }
    });
});
