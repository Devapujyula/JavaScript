/**
 * A fragment of code that produces a value is called an expression.
 * Every value writter literally is an operator
 */

// 1. Operators in Js
let a = 45;
let b = 35;
let c = 10;
console.log("a+b = ", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
console.log("a**b =", a ** b);
console.log("a%b =", a % b);
console.log("a++", a++);
console.log("value of a", a);
console.log("++b", ++b);
console.log("value of b", ++b);
console.group("a--", a--);
console.log("++c", ++c); // c = 11
console.log("c++", c++); // c = 11
console.log("--c", c--); // c = 12
console.log("c--", c--); // c = 11

// 2. Arthimetic Operators in JS
let assignment = 1;
assignment += 5; // same as a = a + 5
console.log(assignment); // 6

assignment -= 4;
console.log(assignment); // 2

assignment *= 6;
console.log(assignment); // 12

assignment /= 2;
console.log(assignment); // 6

assignment %= 6;
console.log(assignment); // 0

assignment **= 3;
console.log(assignment); // 0

// 3. Comparison Operators

let comp1 = 6;
let comp2 = "6";
console.log(typeof comp1);
console.log(typeof comp2);
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1 != comp2 is", comp1 != comp2);
console.log("comp1 === comp2 is", comp1 === comp2);
console.log("comp1 !== comp2 is", comp1 !== comp2);

let compA = 45;
let compB = 35;
console.log("compA > compB", compA > compB);
console.log("compA < compB", compA < compB);
console.log("compA >= compB", compA >= compB);
console.log("compA <= compB", compA <= compB);

// 4. Logical Operators
let x = 5;
let y = 6;
console.log(x < y && x == 5); // True and True
console.log(x > y || x == 5); // True or False
console.log(!false);
console.log(!true);

// This is a sample single line comment
/** This is a multiline comment
 * Multiline comment
 */
