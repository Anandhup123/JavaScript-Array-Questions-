function countPositivesAndNegatives(arr) {
    // Initialize counts
    let result = { positives: 0, negatives: 0 };

    // Iterate through the array
    for (let num of arr) {
        if (num > 0) {
            result.positives++;
        } else if (num < 0) {
            result.negatives++;
        }
    }

    return result;
}

// Test case
let arr = [4, -1, 9, -6, 7, -3, 0, 2];
console.log(countPositivesAndNegatives(arr)); // Expected output: { positives: 4, negatives: 3 }

// Edge case: Empty array
let emptyArr = [];
console.log(countPositivesAndNegatives(emptyArr)); // Expected output: { positives: 0, negatives: 0 }
