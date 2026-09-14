// Formula of Compound Interest :
//  A = P(1+(r/n))^nt
// where: 
// A = amount
// P = principal
// r = rate of interest
// n = number of times interest is compounded per year
// t = time (in years)

let P = 35590; // principal
const r = 0.12; // 12% rate of interest
const n = 1; // number of times interest is compounded per year
let t = 3; // time (in years)

let A; // Compound Interest Amount
A = P*(1+(r/n))**(n*t);
console.log("The compound interest after 3 years is:", A);
