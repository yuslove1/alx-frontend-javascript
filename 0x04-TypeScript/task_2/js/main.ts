//Director Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

//Teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

//Director Class that imoplement DirectorInterface
class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }

}

//Teacher Class that imoplements TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }

}

//A function that return either a Director or a Teacher instance
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}

// Example usage
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee("$500")); // Output: Director

//<------------------------6. Creating functions specific to employees--------------------->
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director
}
// function executeWork

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks()
    } else {
        return employee.workTeacherTasks()
    }
}

// <----------------------------7. String literal types------------------------------->

//string literal type
type Subjects = 'Math' | 'History';


function teachClass(todayClass: Subjects): void {
    if (todayClass === 'Math') {
        console.log('Teacher Math');
    } else if (todayClass === 'History') {
        console.log('Teaching History');
    } else {
        console.log('Invalid subject');
    }
}

//example usage
teachClass('Math');
teachClass('History');