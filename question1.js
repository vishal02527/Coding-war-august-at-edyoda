/*
  Question 1: 
  For a given 3 digit number, find whether it is Armstrong number or not. An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
  Return “Yes” if it is a Armstrong number else return “No”.
*/

function armstrongNumber(n) {
    if (n < 100 || n > 999) {
        return "No"; // Not a 3-digit number
    }

    const originalNumber = n;
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;
        sum += digit ** 3;
        n = Math.floor(n / 10);
    }

    if (sum === originalNumber) {
        return "Yes"; // It's an Armstrong number
    } else {
        return "No"; // It's not an Armstrong number
    }
}


const number = 153; 
console.log(armstrongNumber(number));
