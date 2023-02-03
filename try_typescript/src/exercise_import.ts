import {
  username,
  age,
  isStudent,
  colors,
  Student,
  add,
  arrowAdd,
  identity,
  addArray,
} from "./exercise.js";

console.log(`username:${username} age:${age} isStudent:${isStudent}`);
for (const color of colors) {
  console.log("color", color);
}

const newStudent: Student = {
  name: "Mike",
  age: 19,
  email: "abc@cde",
  inClassRoom: false,
};

console.log("newStudent:", newStudent);
console.log("add:", add(4, 9));
console.log("arrowAdd:", arrowAdd(6, 7));
console.log("identity:", identity<string>("Dummy"));
for (const data of addArray<string>(["pom", "qom", "rom"], "som")) {
  console.log("data:", data);
}
