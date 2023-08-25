/*
  Question 2: 
  Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.
  Return the answer in ascending order. If no such element is found, return list containing [-1].
*/

function duplicates(a, n) {
    let count = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        count[a[i]]++;
    }

    let result = [];
    for (let i = 0; i < n; i++) {
        if (count[i] > 1) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        return [-1];
    }

    return result;
}


const N = 4;
const a = [0, 3, 1, 2];
const output = duplicates(a, N);
console.log(output); 
