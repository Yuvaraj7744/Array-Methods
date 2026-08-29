let numbers = [10, 25, 30, 15, 40, 5, 50];

const filterNumber = (number) => {
  let resultl = number.filter((value) => {
    if (value > 25) {
      return value;
    }
  });
      console.log(resultl);

};
filterNumber(numbers);


let students = [
    { name: "Yuvi", age: 20, mark: 85 },
    { name: "Arun", age: 21, mark: 65 },
    { name: "Kumar", age: 19, mark: 90 },
    { name: "Ravi", age: 22, mark: 55 }
];

const filterStudents=(student)=>{
    let answer=student.filter(value=>{
        if(value.mark>70){
            return value;
        }
    })
    console.log(answer);
}
filterStudents(students);