function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];      // Element to insert
        let j = i - 1;

        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;      // Insert key at correct position
    }
    return arr;                // Return the sorted array
}

// Example usage
let numbers = [50, 20, 40, 10, 30];
let sortedNumbers = insertionSort(numbers);

console.log("Sorted array:", sortedNumbers);