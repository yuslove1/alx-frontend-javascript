//creating instance of Student
var student1 = {
    firstName: 'Yusuf',
    lastName: 'Adesina',
    age: 28,
    location: 'Osun',
};
var student2 = {
    firstName: 'Hameed',
    lastName: 'Adedolapo',
    age: 24,
    location: 'Lagos',
};
//An array of Student instance
var studentsList = [student1, student2];
//rendering the instances of Student(array of student in table)
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    //creating table-data(i.e table cell) for each student info.
    var firstNameCell = document.createElement('td');
    var lastNameCell = document.createElement('td');
    var ageCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
    ageCell.textContent = String(student.age);
    locationCell.textContent = student.location;
    //append the cells containing the info. to the row 
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);
    //append the row to the table 
    table.appendChild(row);
});
//# sourceMappingURL=main.js.map