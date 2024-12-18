// Teacher interface
interface Teacher{
    readonly firstName: string; //Readonly after initialization
    readonly lastName: string; //Readonly after initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; //optional
    location: string;
    [key: string]:any; //allows adding anything other properties
}


// interface named Directors that extends Teacher

interface Director extends Teacher{
    numberOfReports: number;
}



//A function printTeacher
function printTeacher (firstName:string, lastName:string):string {
    return`${firstName[0]}. ${lastName}`;
}

//interface for the function named printTeacherFunction
interface printTeacherFunction {
    (firstName: string, lastName:string): string;
}

//Task 4(4. Writing a class)

//The class described through an Interface

interface StudentInterface{
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

//constructor of the class described through an Interface
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

//A Class named StudentClass
class StudentClass{
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}