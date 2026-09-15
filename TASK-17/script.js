
const getDivision = (num1,num2) => {
    return new Promise((resolve, reject)=>{
        if(typeof num1 !== "number" || typeof num2 !== "number"){
            reject("Invalid Input : Both values should be number.");
        } else if(num2 === 0){
            console.log("Dividing",num1,"by",num2+"...");
            reject("Division by zero is not allowed.");
        } else {
            console.log("Dividing",num1,"by",num2+"...");
            resolve(num1/num2);
        }
    })
}

const testCases = [
    [10, 2], // normal case
    [20, 4], // normal case
    [10, 0], // division by zero
    [9, 3],  // normal case
    [0, 13], // divide zero by another number
    ["a", 5] // invalid input
];

// Sequential execution
const runTests = async () => {
    for (let i = 0; i < testCases.length; i++) {
        // Destructuring array values
        const [num1, num2] = testCases[i];
        // Or
        // const num1 = testCases[i][0];
        // const num2 = testCases[i][1];

        // Using backticks(` `) -> template literal (supports ${}) for better logging
        console.log(`\nTest Case ${i + 1}: (${num1}, ${num2})`);

        try {
            const result = await getDivision(num1, num2);
            console.log("Result:", result);
        } catch (err) {
            console.log("Error:", err);
        }
    }
}

// runTests variable is holding an async function in it. So, we can call it like a function as below.
runTests();

// Testing a single test case below:
// getDivision(10,2)
//     .then((result)=>{
//         console.log("Result:",result);
//     })
//     .catch((err)=>{
//         console.log("Error:",err);
//     });




