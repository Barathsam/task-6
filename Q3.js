
/**
 * Fixing bugs here:
 *  https://medium.com/@reach2arunprakash/www-guvi-io-zen-4fa483a7d359
 */

/**
 * BUG 1
 */
/* Change i-- to i++ and  */
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
 new_string += numsArr[i]
}
console.log(new_string);

/**
 * BUG 2
 */
/* Change the initialization to i = 10 */
var new_string = "";
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 10; i > 0; i--) {
 new_string += numsArr[i] + ""
}
console.log(new_string);

/**
 * BUG 3
 */
/* Initialize "odd" variable with 'even' */
let odd = "even";
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 === 0) {
    numsArr[i] = odd;
  }
}
console.log(numsArr);

/**
 * BUG 4
 */
/* Initialize the sum = 0
  Put a if check - numsArr[i] % 2 === 0 */
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
 if (numsArr[i] % 2 === 0) {
  sum += numsArr[i]
 }
}
console.log(sum);

/**
 * BUG 5
 */
/* Remove the ; from the if condition */
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!==0)
{sum += numsArr[i]
 } else {
 sum -= numsArr[i]
 }
}
console.log(sum);

/**
 * BUG 6
 */
/*
- Separate both the arrays with a comma
- Write a nested loop to fetch array of arrays at each index
- Once an individual array is fetched, iterate over each of its elements
*/
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
for (var arr of numsArr) {
  for (var num of arr) {
    console.log(num);
  }
}

/**
 * BUG 7
 */
/* Replace code inside if condition with str_all += "even" + " " */
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = "";
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 === 0) {
      str_all += "even" + " ";
    } else {
      str_all += inner_array[j] + " ";
    }
  }
}
console.log(str_all);

/**
 * BUG 8
 */
/* Pick array of arrays from the last index
  The inner array prints the numbers in reverse order */
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all= "";
for (var i = numsArr.length-1; i >= 0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
    str_all +=inner_array[j] + " "
}
console.log(str_all);

/**
 * BUG 9
 */
/* Replace the numsArr with inner_array in the inner loop and 
  i with j */
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 !== 0) {
      sum_odd += inner_array[j];
    } else if (inner_array[j] % 2 === 0) {
      sum_even += inner_array[j];
    }
  }
}
console.log(sum_odd);
console.log(sum_even);