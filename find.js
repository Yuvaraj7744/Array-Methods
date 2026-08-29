let numbers = [10, 25, 30, 45, 50, 60];

const findNumber = (number) => {
  const findValue = number.find((value) => value > 40);
  console.log(findValue);
};
findNumber(numbers);

let students = [
  { name: "Arun", mark: 85 },
  { name: "Bala", mark: 65 },
  { name: "Kumar", mark: 90 },
  { name: "Ravi", mark: 55 },
];
const findStudent = (student) => {
  const findName = student.find((value) => value.mark > 50);
  console.log(findName);
};
findStudent(students);
