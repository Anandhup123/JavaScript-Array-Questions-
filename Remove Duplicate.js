function removeDuplicate(arr) {
    let set1 = new Set(arr);  // Create a set to remove duplicates
    arr = [...set1];          // Spread the set back into an array
    return arr;               // Return the array with duplicates removed
}

console.log(removeDuplicate([2, 3, 2, 3, 4, 56, 7, 5, 2]));  // Expected output: [2, 3, 4, 56, 7, 5]