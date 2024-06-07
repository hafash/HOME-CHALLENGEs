// This function checks if there exists a contiguous subarray within the given array 'arr' that sums up to the 'target'.
function subarray(arr, target) {
    let currentSum = 0; // Initialize the current sum of the subarray
    let start = 0; // Initialize the start index of the subarray window

    // Iterate through the array to expand the window
    for (let end = 0; end < arr.length; end++) {
        // Expand the window by adding the current element to the sum
        currentSum += arr[end];

        // Contract the window from the left if the current sum exceeds the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start]; // Subtract the element at the start index
            start++; // Move the start index to the right
        }

        // Check if the current sum equals the target
        if (currentSum === target) {
            return true; // Return true if a subarray with the target sum is found
        }
    }

    // If no subarray with the target sum is found, return false
    return false;
}

// Helper function to run a test case and display the result
function runTestCase(arr, target, expected) {
    // Call the subarray function to get the result
    const result = subarray(arr, target);

    // Display test input, expected output, and actual output
    console.log(`Input: arr = ${JSON.stringify(arr)}, target = ${target}`);
    console.log(`Expected: ${expected}, Actual: ${result}`);
    console.log(result === expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log('');
}

// Test Cases
const testCases = [
    { arr: [4, 2, 7, 1, 9, 5], target: 14, expected: true },    // Typical case with positive numbers
    { arr: [1, 2, 3, 4, 5], target: 9, expected: true },         // Case with multiple possible subarrays
    { arr: [1, 2, 3, 4, 5], target: 15, expected: true },        // Case where the entire array sums to the target
    { arr: [1, 2, 3, 4, 5], target: 16, expected: false },       // Case where no subarray sums to the target
    { arr: [0, 0, 0, 0], target: 0, expected: true },            // Case with zeroes
    { arr: [5], target: 10, expected: false },                   // Single element array that does not match the target
    { arr: [5, -3, 2, 3, 1], target: 5, expected: true },        // Case with negative numbers
    { arr: [1, -1, 1, -1, 1, -1], target: 0, expected: true },   // Case with alternating positive and negative numbers
];

// Running Test Cases
testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    runTestCase(test.arr, test.target, test.expected); // Execute each test case and display the result
});
