function insertionSort(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        // Initialize a pointer for comparing elements
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert the current element into the correct position
        arr[j + 1] = current;
    }
    // Return the sorted array
    return arr;
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));
