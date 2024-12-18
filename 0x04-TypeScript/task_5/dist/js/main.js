function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1 + subject2,
        brand: "Major",
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1 + subject2,
        brand: "Minor",
    };
}
//example usage
var majorCredits = sumMajorCredits(3, 4);
console.log(majorCredits);
var minorCredits = sumMajorCredits(3, 4);
console.log(majorCredits);
//# sourceMappingURL=main.js.map