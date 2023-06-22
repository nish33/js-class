let fruits = ["Mango", "Orange", "Apple"];
let multi = [
    [1, 3, 5, 7],
    [2, 4, 6, 8]
];

/**
 * Array methods
 * 1. push
 * 2. pop
 * 3. shift
 * 4. unshift
 * 5. delete
 * 6. length
 */
console.log(fruits);
fruits.push("Banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Banana");
console.log(fruits);

/**
 * Iteration (Loop)
 * 1. while and do while
 * 2. for loop
 *  a. indexed
 *  b. for...in (used in objects)
 *  c. for...of (used in iterables like Array, String, NodeList)
 */
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let element of fruits) {console.log(element)};

const person = {
    firstname: "Nishant",
    lastname: "Phuyal"
};

console.log(person.firstname);

for(let property in person) {
    console.log(person[property]);
}

