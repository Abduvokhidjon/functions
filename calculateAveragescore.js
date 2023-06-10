let array1 = [
  { name: "Ali", score: 75 },
  { name: "Shak", score: 95 },
  { name: "Sukhrob", score: 47 },
  { name: "Aziz", score: 53 },
  { name: "Mahmud", score: 70 },
];

function calculateAverageScore(array1) {
  if (array1.length === 0) {
    return 0
  } else {
    var sum = 0;

    for (i = 0; i < array1.length; i++) {
      sum += array1[i].score;
    }
    var average = sum / array1.length;

    return average;
  }
}
var average = calculateAverageScore(array1);
console.log("Average score: " + average);

module.exports = calculateAverageScore;
