/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
import { Cpp } from "./subjects/Cpp"; // Import Cpp classes
import { Java } from "./subjects/Java"; // Import Java classes
import { React } from "./subjects/React"; //Import React classes
// Create and export constants for the subjects
export var cpp = new Cpp();
export var java = new Java();
export var react = new React();
// Create and export the teacher object
export var cTeacher = {
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
//# sourceMappingURL=main.js.map