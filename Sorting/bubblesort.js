/* bubble sort */
// function bubbleSort(arr) {
//     let n = arr.length;
//     // Outer loop (number of passes)
//     for (let i = 0; i < n - 1; i++) {
//         // Inner loop (comparisons in each pass)
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap values
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // Example usage
// let nums = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original:", nums);
// let sorted = bubbleSort(nums);
// console.log("Sorted:", sorted);