/* find max & min element */
function findMaxMin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min };
}

// Example usage
let numbers = [50, 20, 40, 10, 30];
let result = findMaxMin(numbers);

console.log("Maximum:", result.max);
console.log("Minimum:", result.min);
