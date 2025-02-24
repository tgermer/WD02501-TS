// ! Array-TS-Level-1_1
console.log("Array-TS-Level-1_1–––––––––––––––––––––––––––––––––");

const bucketList: string[] = ["Buenos Aires", "Iceland", "Amsterdamm"];
const luckyNumbers: number[] = [21, 77, 111];
const favoritePeople: string[] = ["Suzy", "Lucy", "Macy"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

// ! Array-TS-Level-1_2
console.log("Array-TS-Level-1_2–––––––––––––––––––––––––––––––––");
console.log(bucketList[0]);
console.log(luckyNumbers[1]);
console.log(favoritePeople[2]);

// ! Array-TS-Level-1_3 (length)
console.log("Array-TS-Level-1_3 (length)––––––––––––––––––––––––");
console.log("BucketList Länge:", bucketList.length);
console.log("LuckeNumbers Länge:", luckyNumbers.length);
console.log("FavoritePeople:", favoritePeople.length);

// ! Array-TS-Level-1_4 (push)
console.log("Array-TS-Level-1_4 (push)––––––––––––––––——––––––––");

const cities: sting[] = [
    "München",
    "Hamburg",
    "Berlin",
    "Leipzig",
    "Stuttgard",
];
console.log(cities);
cities.push("Düsseldorf", "Dortmund");
console.log(cities);

// ! Array-TS-Level-1_5 (pop)
console.log("Array-TS-Level-1_5 (pop)—––––––––––––––––——––––––––");

const cityRemoved = cities.pop();
console.log("Entfernt:", cityRemoved);
console.log(cities);

const luckyNumberRemoved = luckyNumbers.pop();
console.log("Entfernt:", luckyNumberRemoved);
console.log(luckyNumbers);

// ! Array-TS-Level-1_6 (shift)
console.log("Array-TS-Level-1_6 (shift)—–––––––––––––––——––––––––");

const cityRemovedFirst = cities.shift();
console.log("Entfernt:", cityRemovedFirst);
console.log(cities);

const luckyNumberRemovedFirst = luckyNumbers.shift();
console.log("Entfernt:", luckyNumberRemovedFirst);
console.log(luckyNumbers);

// ! Array-TS-Level-1_7 (unshift)
console.log("Array-TS-Level-1_7 (unshift)—–––––––––––––––——––––––––");

cities.unshift("Dortmund", "Bremen", "Lübeck");
console.log(cities);

// ! Array-TS-Level-1_8 (slice)
console.log("Array-TS-Level-1_8 (slice)—–––––––––––––––——––––––––");
const lieblingsziele: string[] = [
    "Tokyo",
    "Japan",
    "Los Angales",
    "Oslo",
    "Südtirol",
    "China",
    "Hong Kong",
];

console.log(lieblingsziele);
const lieblingszieleSliced = lieblingsziele.slice(3, 5);
console.log("Rausgeschnitten:", lieblingszieleSliced);

console.log(lieblingsziele);
