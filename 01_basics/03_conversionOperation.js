let score = "84abc"

//console.log(typeof score);
//console.log(typeof(score)); //methode

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "sowmya"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);

//**********************Operation**************************/
//console.log(2**3)
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**5);

// console.log("2"+2);
// console.log(2+"2");
// console.log("2"+2+2);
// console.log(2+2+"2");

console.log( (2+2) * (5 % 3));

let num1 = 4
let num2 = 6

let result = num1 > num2
// console.log(result);

// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 == num2);
// console.log(num1 != num2);

//**********************Increment and Decrement prefix and postfix**************************/
let gameCounter = 100
gameCounter++
console.log(gameCounter);

gameCounter--
console.log(gameCounter);

gameCounter += 10
console.log(gameCounter);

gameCounter -= 10
console.log(gameCounter);
