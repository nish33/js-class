var str = "My Name is \"Nishant Phuyal\"";

/**
 * Escape sequences
 * 1. \b
 * 2. \n
 * 3. \r 
 * 4. \t
 * 5. \v
 * 6. \f
 */

const firstName = "Nishant";
const lastName = "Phuyal";
const fullName = `${firstName} ${lastName}`;

let normStr = "John";
let objStr = new String("John");

console.log(normStr == objStr);
console.log(normStr === objStr);
console.log(typeof(normStr), typeof(objStr));

/**
 * String Methods
 * 1. length
 */

const myStr = "A quick BROWN fox and a blue FOX and jumped over the LAZY Dog";
console.log(myStr.length);

/**Parts of string
 * 1. slice(start, end)
 * 2. substring(start, end)
 * 3. substr(start, length)
 */

// Slice with only one parameter
console.log(myStr.slice(4));
// Slice with only one negative parameter
console.log(myStr.slice(-4));
// Slice with two parameters
console.log(myStr.slice(4, -4));
console.log(myStr.slice(4, 12));
console.log(myStr.slice(-4, 12));
console.log(myStr.slice(-4, -1));

/**Replacing string content
 * 1. replace
 * 2. replaceAll
 */
console.log(myStr.replace(/FOX/gi, "jackal"));
console.log(myStr.replaceAll(/fox/gi, "jackal"));

/*
*UPPERCASE: toUpperCase
 */

// trim
str = "  Nishant   ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// pad
str = '5';
console.log(str.padStart(5, "0"));
console.log(str.padEnd(5, "0"));

/**
 * Extracting string characters
 * 1. charAt(position)
 * 2. charCodeAt(position)
 * 3. property access i.e. [position]
 */

console.log(myStr.charAt(4));
console.log(myStr.charCodeAt(4));

const games = "TableTennis, Football, Cricket";
console.log(games.split(", "));

/**
 * Search String
 */
console.log(myStr);
console.log(myStr.indexOf("FOX"));
console.log(myStr.lastIndexOf("and"));
console.log(myStr.match("and"));
console.log(myStr.matchAll("and"));
console.log(myStr.endsWith("and"));