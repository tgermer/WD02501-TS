const words = [
    "HAUS",
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
const looser = document.querySelector(".looser");
const buttons = document.querySelector(".letter-btns");
const searchWord = document.querySelector(".search-word");
const hitMeAgain = document.querySelector(".hit-me-again");
const winner = document.querySelector<HTMLElement>(".winner");
let pressedLetters: string[] = [];
let searchWordOngoing: string[] = [];

const maxScore = 6;
let currentScore = 0;
let currentSearchWord = "";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (const letter of alphabet) {
    // console.log(letter);
    if (buttons) {
        buttons.innerHTML += `<button disabled class="letter-btn">${letter}</button>`;
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

function addPlaceholder() {
    let placeholder = "_";
    currentSearchWord = randomWord();
    console.log("Neues Wort gewählt:", currentSearchWord);
    if (searchWord) {
        searchWord.innerHTML = placeholder.repeat(currentSearchWord.length);
        // searchWord.innerHTML += "<br>" + currentSearchWord.toUpperCase();
        // console.log(placeholder.repeat(randomWord().length));
    }
}

hitMeAgain?.addEventListener("click", newGame);

function newGame() {
    addPlaceholder();
    // Buttons wieder aktivieren
    allLetterBtns.forEach((btn) => {
        btn.disabled = false;
        btn.style.cursor = "pointer";
    });
    if (hitMeAgain) {
        hitMeAgain.innerHTML = `Hit Me Baby One More Time`;
    }
    if (looser) {
        looser.innerHTML = "";
    }
    currentScore = 0;
    if (score) {
        score.innerHTML = `${currentScore} : ${maxScore}`;
    }
    if (pressedLetters) {
        pressedLetters = [];
    }
    console.log("Pressed Letters:", pressedLetters);
    if (searchWordOngoing) {
        searchWordOngoing = [];
    }
}

const allLetterBtns =
    document.querySelectorAll<HTMLButtonElement>(".letter-btn");

allLetterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const clickedButton = event.currentTarget;
        if (clickedButton instanceof HTMLButtonElement) {
            clickedButton.disabled = true;
            clickedButton.style.cursor = "auto";
            const letter = clickedButton.innerText;
            console.log(`Geklickter Button: ${letter}`);
            console.log("Suchwort:", currentSearchWord);

            if (currentSearchWord.toUpperCase().includes(letter)) {
                console.log("Buchstabe enthalten");

                pressedLetters.push(letter);
                console.log("Pressed Letters:", pressedLetters);

                searchWordOngoing = [];

                for (let i = 0; i < currentSearchWord.length; i++) {
                    if (
                        pressedLetters.includes(
                            currentSearchWord[i].toUpperCase()
                        )
                    ) {
                        searchWordOngoing.push(
                            currentSearchWord[i].toUpperCase()
                        );
                    } else {
                        searchWordOngoing.push("_");
                    }
                }
                if (searchWord) {
                    searchWord.innerHTML = searchWordOngoing.join("");
                }
            } else {
                console.log("Buchstabe NICHT enthalten");
                currentScore += 1;
                if (score) {
                    score.innerHTML = `${currentScore} : ${maxScore}`;
                }
            }

            if (currentScore === maxScore) {
                allLetterBtns.forEach((btn) => {
                    btn.disabled = true;
                    btn.style.cursor = "auto";
                });
                if (looser) {
                    looser.innerHTML =
                        "You're a looOoooOooser baby!?!?, so why don't you play again?";
                }
            }

            if (currentSearchWord === searchWordOngoing.join("")) {
                allLetterBtns.forEach((btn) => {
                    btn.disabled = true;
                    btn.style.cursor = "auto";
                });
                if (winner) {
                    winner.innerHTML = "💃🏼 The winner takes it all 🕺🏼";
                    winner.style.color = "rgb(27, 205, 39)";
                }
            }
        }
    });
});
