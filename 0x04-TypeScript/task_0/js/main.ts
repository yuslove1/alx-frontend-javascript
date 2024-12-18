//interface for student(contract)
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//creating instance of Student
const student1: Student = {
    firstName: 'Yusuf',
    lastName: 'Adesina',
    age: 28,
    location: 'Osun',
}

const student2: Student = {
    firstName: 'Hameed',
    lastName: 'Adedolapo',
    age: 24,
    location: 'Lagos',
}

//An array of Student instance
let studentsList:Student[] = [student1, student2];

//rendering the instances of Student(array of student in table)
const table = document.createElement('table');

studentsList.forEach((student) => { //looping over array of students
const row = document.createElement('tr')

//creating table-data(i.e table cell) for each student info.
const firstNameCell = document.createElement('td');
const lastNameCell = document.createElement('td');
const ageCell = document.createElement('td');
const locationCell = document.createElement('td');

firstNameCell.textContent = student.firstName;
lastNameCell.textContent = student.lastName;
ageCell.textContent = String(student.age);
locationCell.textContent = student.location;

//append the cells containing the info. to the row 
row.appendChild(firstNameCell)
row.appendChild(lastNameCell)
row.appendChild(ageCell)
row.appendChild(locationCell)

//append the row to the table 
table.appendChild(row)
});