/**
 * Datatypes:
 * 1. Number (32-bit)
 * 2. Bigint (64-bit)
 * 3. String (Text)
 * 4. Boolean (true, false)
 * 5. Undefined (Variable is declared but value not set)
 * 6. Null (null value)
 * 7. Symbol
 * 8. Object
 *  a. An Object
 *  b. An Array
 *  c. A Date
 */

let number = 5;
console.log(typeof number);
number = "5";
console.log(typeof number);

/**
 * Operators
 * 1. Arithmetic (+, -, *, **, /, %, ++, --)
 * 2. Assignment (=, +=, -=, *=, /=, %=, **=)
 * 3. Comparison (==, ===, !=, !==, >, <, >=, <=, ?)
 * 4. String (Comparison, Concatenation, Addition with number)
 * 5. Logical (&&, ||, !)
 * 6. Bitwise (&, |, ~, ^, <<, >>, >>>)
 * 7. Ternary (? :)
 * 8. Type (Datatypes and type casting)
 */

const num1 = 5;
const num2 = 6;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Exponential:", num1 ** num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);

let num3 = 10;

num3 += 2; // num3 = num3 + 2;
console.log("num3 +=  2: ", num3);

const some_num = 12;
const some_str = "12";
console.log("Compare some_num and some_str with ==", some_num == some_str);
console.log("Compare some_num and some_str with ===", some_num === some_str);

const saved_name = "Nishant";
const input_name = "nishant";
console.log(saved_name == input_name);

const first_name = "Nishant";
const last_name = "Phuyal";
console.log("Concatenate:", first_name + last_name);

const a = 10;
const b = "10";
console.log("Adding string and number: ", b + a);

if (a === 10) {
  console.log("Ten");
} else {
  console.log("Not Ten");
}
//expression ? statement if expression is true : (else statement ? state if else statement is true : else else statement)
a === 10 ? console.log("ten") : console.log("not ten");


/**
 * a = 20;
 * b = 2;
 * a+b
 * a++
 * a+b
 * ++a + b
 */


var variable1 = "Value1";
var variable1 = "Value3";
variable1 = "Value2";
