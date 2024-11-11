function findIntersection(arr1, arr2) {
    // Convert the arrays to sets to get unique values and for fast lookup
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    // Filter elements in set1 that also exist in set2
    let intersection = [...set1].filter(item => set2.has(item));

    // Sort the result in ascending order
    return intersection.sort((a, b) => a - b);
}

// Test cases
let arr1 = [1, 3, 4, 7, 9];
let arr2 = [3, 4, 5, 7, 8];
console.log(findIntersection(arr1, arr2)); // Expected output: [3, 4, 7]

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
console.log(findIntersection(arr3, arr4)); // Expected output: []
