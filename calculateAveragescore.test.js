// inside calculateAverageScore.test.js
// Import the function to be tested
const calculateAverageScore = require("./calculateAveragescore.js");

// Describe the test suite
describe("calculateAverageScore", () => {
    // Test case 1: Average score of an empty array should be 0
    test("should return 0 for an empty array", () => {
        const students = [];
        const averageScore = calculateAverageScore(students);
        expect(averageScore).toBe(0);
    });

    // Test case 2: Average score of a non-empty array
    test("should return the correct average score for a non-empty array", () => {
        const students = [
            { name: "John", score: 80 },
            { name: "Jane", score: 90 },
            { name: "Mike", score: 75 },
            { name: "Sara", score: 85 },
        ];
        const averageScore = calculateAverageScore(students);
        expect(averageScore).toBe(82.5);
    });
});







