/*
 * Fixing bugs here:
 *  https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb
 */

/**
 * BUG 1
 */
/* The string must be enclosed in double qoutes */
// alert( “I’m JavaScript!’);
alert( "I’m JavaScript!");

/**
 * BUG 2
 */
/* Though the string is enclosed in double qoutes 
  the qoutes must not be inclined*/
// alert(“I’m invoked!”);
alert("I’m invoked!");

/**
 * BUG 3
 */
/* 
There is no bug in this code 
The 3rd alert might look like a bug but its not it is template string - a feature of ES6
The last alert is also not a bug, a single line of code can be spanned across multiple lines
  and it will work fine unless it has some typo or a syntax error
*/
alert("I'm JavaScript!");
alert('Hello')
alert(`Wor
 ld`)
alert(3 +
1
+ 2);

/**
 * BUG 4
 */
/* To print "Guvi geek" replace 'admin' with 'fname + lname' in the alert() */
 let admin=9, fname=10.5;
 fname = "Guvi";
 lname = "geek"
 admin = fname+lname;
 alert( admin ); // "Guvi geek"

/**
 * BUG 5
 */
/* 
Use template string/literal to print "Hello Guvi geek"
Fix: alert(`hello ${name}`); 
*/
let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + lname;
alert("hello ${name}");

/**
 * BUG 6
 */
/* 
The numbers input from a PROMPT are taken as strings we must convert them to numbers explicity 
alert(parseInt(a) + parseInt(b))
*/
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

/**
 * BUG 7
 */
/* 
Either remove the qoutes 
  => var a = 2 > 12;
Or convert the strings to a number using parseInt()
  => var a = parseInt("2") > parseInt("12");
*/
var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

/**
 * BUG 8
 */
/* 
First convert the string to a number - parseInt(a)
Now we can enter 
- false
- null
- NaN
Using which we can get "Success" in the console
*/

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

/**
 * BUG 9
 */

/* 
Input from a PROMPT is always a string so convert that string to a number
parseInt(value) will fix the issue
*/
let value = prompt("How many runs you scored in this ball");
if (value === 4) {
  console.log("You hit a Four");
} else if (value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

/**
 * BUG 10
 */

let login = 'Employee';
let message = (login == 'Employee') ?  'Greetings' : 'No login';
console.log(login, message);

/**
 * BUG 11
 */
/* "let" variables are block scoped
  Remove "let" declarations inside the if-else block */

let message;
if (null || 2 || undefined) {
  let message = "welcome boss";
} else {
  let message = "Go away";
}
console.log(message);

/**
 * BUG 12
 */
/* Assign the 'lock' with some value to print "welcome" */
let message;
let lock = "";
//Dont change any code below this
if ((lock && "") || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);

/**
 * BUG 13
 */

/* Add (i > 0) condition to the 'while' loop */
let i = 3;
while (i) {
  console.log(--i);
}

/**
 * BUG 14
 */
/* Add a simple FOR loop that will run from 0 - 10 */
for (let i=1; i<=10; i++) {
  console.log(i);
}
let num = 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);

/**
 * BUG 15
 */
/* Change the increment condition to "num += 2" */
for (let num = 2; num <= 20; num += 1) {
  console.log(num);
}

/**
 * BUG 16
 */
/* 
Use template literal/string to print the array items
console.log(`Wrapped ${gifts[i]} and added a bow!`);
*/
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

/**
 * BUG 17
 */
/* no error*/
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if (countdown == 0) {
    console.log("bomb triggered");
  }
}

/**
 * BUG 18
 */
/* If we put proper qoutes to the strings the output will be "hi" 
  A string is passed to the if condition so that first if coniditon will execute
  Second if condition was passed a 0 - a numeric value (which is equivalent to false) as a result it does not execute */
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);


