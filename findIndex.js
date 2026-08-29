let numbers = [10, 25, 30, 45, 50, 60];
const findNumber = (number) => {
  const findPosition = number.findIndex((value) => value > 40);
  console.log(findPosition);
};
findNumber(numbers);


let students = [
  { name: "Arun", mark: 85 },
  { name: "Bala", mark: 65 },
  { name: "Kumar", mark: 90 },
  { name: "Ravi", mark: 55 },
];
const findStudent = (student) => {
  const findName = student.findIndex((value) => value.mark > 50);
  console.log(findName);
};
findStudent(students);