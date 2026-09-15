// Declaration of an Array
const arr = [4, 8, 2, 11, 6, 7, 10];
console.log("Array:-",arr);

// Find the maximum number in the array.
function findMaxNumber(arr){
    let max = arr[0];
    // console.log("arr length:",arr.length);
    
    for(let i=0; i<arr.length; i++){

        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// findMaxNumber function calling
console.log("Maximum number :",findMaxNumber(arr));

// =================================================================

// sum of all elements in the array.
let sumAllElements = function (arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

// anonymous function calling - sumAllElements
console.log("Sum of all the elements :", sumAllElements(arr));

// =================================================================

// Count the number of odd numbers in the array.
let countOddNumbers = (arr) => {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            count ++;
        }
    }
    return count;
}

// arrow function calling - countOddNumbers
console.log("Count of odd numbers :", countOddNumbers(arr));
