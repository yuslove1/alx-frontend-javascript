
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />


import { Cpp } from "./subjects/Cpp"; // Import Cpp classes
import { Java } from "./subjects/Java"; // Import Java classes
import { React } from "./subjects/React"; //Import React classes
import { Subjects } from "./subjects/Teacher"; // Assuming Teacher.ts exports the Subjects namespace


// Create and export constants for the subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export the teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: "Yusuf",
  lastName: "Adesina",
  experienceTeachingC: 10,
};


// C++ Subject
console.log("C++");
cpp.setTeacher = cTeacher; 
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());