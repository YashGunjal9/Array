// How to create an array

let fruits = ["mango", "apple", "banana", "grapes"]; //array

// Push
fruits.push("pineapple");

// How to access array data
let accessMango = fruits[0];
let accessApple = fruits[1];
let accessBanana = fruits[2];
let accessGrapes = fruits[3];

// Pop
let books = ["FullStack Web Development", "DSA", "AI&ML", "Cyber Security"];
// books.pop();
// console.log(books);

// Shift
// books.shift();
// console.log(books);

// Unshift
books.unshift("MERN Stack");
// console.log(books);

// Concat
const colors1 = ["orang", "yellow"];
const colors2 = ["red", "gray"]

const allColors = colors1.concat(colors2);

// slice
const techCompanies = ["Google", "Black Rock", "Microsoft", "TCS",
    "Tech Mahindra"];

const selectedCompanies = techCompanies.slice(1, 4);
// console.log(selectedCompanies);
// console.log(techCompanies);

// .length
const totalCompanies = techCompanies.length;
console.log(totalCompanies);
