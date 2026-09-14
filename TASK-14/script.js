// Sum of first n numbers where n is a variable.
let n = 153;
let sum = 0;
console.log("=====================================");
if(n>0){
    for(let i = 1; i <= n; i++){
        sum = sum + i
    }
    console.log("Sum of first", n ,"numbers is:", sum);
    console.log("=====================================");
}

// table of n where n is a variable.
let t = 4;
let tn = 1;
console.log("Table of", t ,"is :");
do{
    console.log(t*tn);
    tn++;
    
}while(tn<=10)
console.log("=====================================");

// Check the prime number
// If number is prime then :-
// It is greater than 1
// It is only divisible by 1 and itself
let num = 7;
let isPrime = true;

if(num <= 1){
    isPrime = false; // If number is less than 1 - not prime
} else {
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false; // if number is divisible by any 2 to n-1 - not prime
            break;
        }
    }
}

if(isPrime){
    console.log("Is", num,"a prime number ? : Yes");
} else{
    console.log("Is", num,"a prime number ? : No");
}
console.log("=====================================");

// Find all the factors of a number.
let factNum = 146;
let result = "Factors : ";
for(let i = 1; i <= factNum; i++){
    if(factNum % i === 0){
        if(result === "Factors : "){
            result = result + i; // skiping comma ',' in first factor
        } else {
            result = result + ", " + i;
        }
    }
}
console.log(factNum +" "+ result);

console.log("=====================================");

// Sum of all digits of a number
let digitNum = 139;
let temp = digitNum;
let total = 0;
while(temp > 0){
    let digit = temp % 10; // get the last digit 
    total = total + digit; // add to total
    temp = Math.floor(temp / 10); // remove last digit // Math.floor() to cut decimal or round down
    // temp = parseInt(temp / 10); // parseInt() to cut off decimal value
}

console.log("Sum of all digits of",digitNum,"is : "+total);

console.log("=====================================");

// Check Armstrong number:
// Sum of its digits raised to the power of number of digits = original number
let num2 = 407;
let temp2 = num2;

let count = 0;
let sum2 = 0;

// Count digits
while(temp2 > 0) {
    count++; // counting number of digits in variable count
    temp2 = parseInt(temp2 / 10); // remove last digit and cut off decimal values
}

// Calculate sum of powers
temp2 = num2;

while(temp2 > 0) {
    let digit = temp2 % 10; // get last digit

    let power = 1;

    // calculate digit^count manually i.e. digit^number of digits(count)
    for(let i = 1; i <= count; i++) {
        power = power * digit; // just doing - digit*digit*digit
    }

    sum2 = sum2 + power; // add calculated value above to the sum
    temp2 = parseInt(temp2 / 10); // remove last digit

}

// Check Armstrong
if(sum2 == num2){
    console.log("Is", num2,"an Armstrong number ? : Yes");
} else {
    console.log("Is", num2,"an Armstrong number ? : No");
}

console.log("=====================================");