interface MajorCredits {
    credits:number;
    brand: string;
}

interface MinorCredits {
    credits:number;
    brand: string;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
return{ 
    credits: subject1 + subject2,
    brand: "Major",
}
}
function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
    return{ 
        credits: subject1 + subject2,
        brand: "Minor",
    }
}

//example usage
const majorCredits = sumMajorCredits(3, 4);
console.log(majorCredits);

const minorCredits = sumMajorCredits(3, 4);
console.log(majorCredits);