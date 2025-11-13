function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // update minimum index
            }
        }

        // Swap the found minimum element with the first element
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr; // return the sorted array
}

// Example usage
let numbers = [50, 20, 40, 10, 30];
let sortedNumbers = selectionSort(numbers);

console.log("Sorted array:", sortedNumbers);
