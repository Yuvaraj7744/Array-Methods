let students = [
  { name: "Arun", mark: 85 },
  { name: "Bala", mark: 65 },
  { name: "Kumar", mark: 90 },
  { name: "Ravi", mark: 55 },
];


const updateMark = (student) => {
  let increment = student.map((vlaue) => {
    vlaue.mark +=5;
    return vlaue;
  });
  console.log(increment);
};
updateMark(students);

const numbers = [10, 15, 20, 25, 30, 35];


let doubleNumbers=(number)=>{
 let result=number.map(value=>value*2);
 console.log(result);
}
doubleNumbers(numbers);