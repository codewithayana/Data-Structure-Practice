function removeDuplicates(arr) {
    return [...new Set(arr)]; // Convert array to Set (unique) and back to array
}

// Example usage
let numbers = [10, 20, 20, 30, 10, 40];
let result = removeDuplicates(numbers);

console.log(result); // [10, 20, 30, 40]
