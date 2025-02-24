// # Arrays

// -> Arrays IMMER mit const definieren, auch wenn sich die Werte ändern können.
const shoppingItems: string[] = [
    "Toilet Paper",
    "Beer",
    "Ice Cream",
    "Peanuts",
    "Coffee",
    "Broccoli",
];

// wie greife ich auf die Elemente des Arrays hinzu?
// -> [#] mit einem Index - es geht bei 0 los.

console.log(shoppingItems[4]);

// number-Array
const prices: number[] = [12.99, 2.5, 34.99, 99.99];

console.log(prices[1]);

// boolean-Array
const booleanArray: boolean[] = [true, false, false, true, true];
console.log(booleanArray[4]);

// wir können direkt einen Wert im Array setzen
// dazu verwenden wir den Index-Zugriff [] und ein =

shoppingItems[3] = "Peanut Butter";
console.log(shoppingItems);

// -> Array Methoden
// Länge des Arrays: lenght
console.log("Länge des Arrays:", shoppingItems.length);

// push(): am Ende des Arrays ein neues Element hinzufügen
// push gibt mir die neue Länge des Arrays zurück
const lenghtAfterPasta = shoppingItems.push("Pasta");
console.log(shoppingItems);
console.log(lenghtAfterPasta);

// es können auch mehrere Elemente eingefügt werden.
shoppingItems.push("Pizza", "Soap");
console.log(shoppingItems);

// pop(): am Ende des Arrays ein Element entfernen
// pop gibt den Wert des entfernten Elements zurück
const removedItem = shoppingItems.pop();
// shoppingItems.pop();
console.log(shoppingItems);
console.log(removedItem);

// shift(): entfernt das erste Element aus dem Array
// shift gibt den Wert des entfernten Elements zurück
const firstElement = shoppingItems.shift();
console.log(shoppingItems);
console.log(firstElement);

// unshift(): vorne Elemente einfügen
// unshift gibt mir die neue Länge des Arrays zurück
const lenghtAfterUnshift = shoppingItems.unshift("Tea", "Cookies");
console.log(shoppingItems);
console.log(lenghtAfterUnshift);

// splice, slice, split

const shoppingItems2: string[] = [
    "Toilet Paper",
    "Beer",
    "Ice Cream",
    "Peanuts",
    "Coffee",
    "Broccoli",
];

// splice(): fügt an einer bestehen Stelle ein neues Element hinzu üfer entfernt sie
// / wir wollen Pasta einfügen - Pasta soll index 3 bekommen / an der Stelle stehen.

shoppingItems2.splice(3, 0, "Pasta");
console.log(shoppingItems2);

// wie entferne ich Pasta und Peanuts?
shoppingItems2.splice(3, 2);
console.log(shoppingItems2);

// slice(): zum kopieren (von Teilen) des Arrays – Wie ein Pizzastück, welches ich mir nehme.
// Das Original-Array bleibt dabei erhalten.

// ganzes Array kopieren
const allItemsSlice = shoppingItems2.slice();
console.log("ganzes Array kopiert:");
console.log(allItemsSlice);

// wie kopiere ich mit coffee und brokkoli?
// slice ab index 3
const sliceFrom3 = shoppingItems2.slice(3);
console.log("ab Index 3 kopiert:", sliceFrom3);

// wie kopiere ich mir Ice Cream und Coffee?
const sliceExample = shoppingItems2.slice(2);
console.log(sliceExample);

// split() teilt einen String in mehrere Teile auf
// das Ergebnis ist ein String-Array
const songText = "Atemlos durch die Nacht Spür was Liebe mit uns macht";
const singleWords = songText.split(" ");
console.log(singleWords);

const hangman = "Kronkorkenzackenzählmaschine";
const singleLetters = hangman.split("");
console.log(singleLetters);

// jetzt teilen wir beim "." – Ich will einzelne Sätze haben.
const lyrics =
    "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you.";
const lyricsSentences = lyrics.split(".");
console.log(lyricsSentences);

// join() führ ein String-Array zu einem gesamt String zusammen.
console.log(lyricsSentences.join("|"));
