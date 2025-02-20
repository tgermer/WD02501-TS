function greet(name: string, message?: string) {
    console.log(`Hallo ${name}${message ? ", " + message : ""}`);
}

greet("Tristan");
greet("Tristan", "Wie gehts?");

function greetIf(name: string, message?: string) {
    if (message) {
        console.log(`Hallo ${name}, ${message}`);
    } else {
        console.log(`Hallo ${name}`);
    }
}

greetIf("Tristan");
greetIf("Tristan", "Wie gehts?");

function isEven(number: number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(10));
console.log(isEven(5));

// --> Arrow Functions

const printMessage = (message: string) => {
    console.log(message);
};
printMessage("Nachricht");

// EventListener

// 1. Element auswählen. Element, auf das der EventListener angewendet werden soll.
const changeColorVar =
    document.querySelector<HTMLHeadingElement>(".change-color");
console.log(changeColorVar);
// 2. EventListener hinzufügen mit der Methode addEventListner() wird der EventListner auf das Element angehängt. Diese Methode benötigt zwei Argumente.
// a) Das Ereignis, auf das gewartet werden soll: z.B. Click
changeColorVar?.addEventListener("click", changeColor);
// 2. Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.
function changeColor() {
    if (changeColorVar) {
        changeColorVar.style.color = "teal";
    }
}

const changeHueVar = document.querySelector<HTMLImageElement>(".change-hue");

changeHueVar?.addEventListener("mouseover", changeHue);
function changeHue() {
    if (changeHueVar) {
        changeHueVar.style.filter = "hue-rotate(-10deg) saturate(2)";
    }
}

changeHueVar?.addEventListener("mouseout", resetHue);
function resetHue() {
    if (changeHueVar) {
        changeHueVar.style.filter = "none";
    }
}

// Dark-Light Mode
const szeneSwitchVar = document.querySelector(".szene-switch");
const bodyElement = document.querySelector("body");
szeneSwitchVar?.addEventListener("click", darkLightToggle);
function darkLightToggle() {
    if (bodyElement) {
        bodyElement.classList.toggle("dark");
    }
}

// Values Auslesen
const nameInputForm = document.querySelector("form");
const userNameInput = document.querySelector<HTMLInputElement>("#name");
const outputDiv = document.querySelector(".outputForm");

nameInputForm?.addEventListener("submit", greetUser);
function greetUser(event: Event) {
    event.preventDefault();
    let userName;
    if (nameInputForm) {
        userName = userNameInput.value;
        if (outputDiv) {
            outputDiv.innerHTML = `<h3>Hallo ${userName}</h3>`;
        }
    }
}

// --------
//  Register form

const registerForm = document.querySelector(".register-form");
const userNameForm = document.querySelector<HTMLInputElement>("#userName");
const userPassword = document.querySelector<HTMLInputElement>("#userPassword");
const userEmail = document.querySelector<HTMLInputElement>("#userEmail");
const userIcon = document.querySelector<HTMLInputElement>("#userIcon");
const userDatenschutz =
    document.querySelector<HTMLInputElement>("#userDatenschutz");

registerForm?.addEventListener("submit", printUserData);

function printUserData(event: Event) {
    event.preventDefault();
    if (
        !userNameForm ||
        !userEmail ||
        !userIcon ||
        !userPassword ||
        !userDatenschutz
    ) {
        console.log("Eines oder mehrere Formularfelder wurden nicht gefunden.");
    } else {
        const name = userNameForm?.value;
        const email = userEmail.value;
        const password = userPassword.value;
        const icon = userIcon.value;
        const datenschutz = userDatenschutz.checked;

        if (outputDiv) {
            outputDiv.innerHTML = `
                    <h4>Erfolgreich registiert</h4>
                    <p>Ihr Benutzername: ${name}</p>
                    <p>Ihr Passwort: ${password}</p>
                    <p>Ihre E-Mail: ${email}</p>
                    <p>Ihr Icon: ${icon}</p>
                    <p>Datenschutz akzeptiert: ${datenschutz}</p>
                    `;
        }
    }
}

// Übungen
// Events-TS-Level-1_6

const select1_6 = document.querySelector("#selectLevel-1_6");
const output1_6 = document.querySelector(".output-selectLevel-1_6");

select1_6?.addEventListener("change", () => {
    output1_6.innerHTML = `<p>Es wurde ausgewählt: <strong>${select1_6.value}</strong></p>`;
});

// Project-TS Kreditkarte

const cardForm = document.querySelector("#cardForm");
const cardHolderInput = document.querySelector<HTMLInputElement>("#cardHolder");
const cardNumberInput = document.querySelector<HTMLInputElement>("#cardNumber");
const cardDateInput = document.querySelector<HTMLInputElement>("#cardDate");
// const cardVCCInput = document.querySelector<HTMLInputElement>("#cardVCC");

const cardNumberOutput = document.querySelector(".cardNumber");
const cardHolderOutput = document.querySelector(".cardHolder");
const cardDateOutput = document.querySelector(".cardDate");

cardForm?.addEventListener("submit", fillCard);

function fillCard(event: Event) {
    event.preventDefault();

    const holder = cardHolderInput.value;
    const number = cardNumberInput.value;
    const dateValue = cardDateInput.value; // Format: YYYY-MM
    const [year, month] = dateValue.split("-");

    cardNumberOutput.innerHTML = number.replace(/(\d{4})(?=\d)/g, "$1 ");
    cardHolderOutput.innerHTML = holder;
    const formattedDate = `${month}/${year.slice(-2)}`;
    cardDateOutput.innerHTML = formattedDate;
}

// Forms-TS-Level-1_1

const verdoppelMichForm = document.querySelector("#level1_1");
const numberInOut = document.querySelector<HTMLInputElement>("#verdoppelMich");

verdoppelMichForm?.addEventListener("submit", verdoppelMichFkt);

function verdoppelMichFkt(event: Event) {
    event.preventDefault();
    const wert = numberInOut?.value;
    numberInOut.value = wert * 2;
}

// Forms-TS-Level-1_2

const ageForm = document.querySelector("#level1_2");
const yearOfBirth = document.querySelector<HTMLInputElement>("#yearOfBirth");
const ageOutput = document.querySelector(".ageOutput");
console.log(yearOfBirth.value);

ageForm?.addEventListener("click", calculateAge);

function calculateAge(event: Event) {
    event.preventDefault();

    const currentYear = new Date().getFullYear();

    const age = currentYear - Number(yearOfBirth?.value);
    console.log(age);

    ageOutput.innerHTML = `<p>Du bist ${age} alt.</p>`;
}
