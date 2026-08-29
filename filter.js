let numbers = [10, 25, 30, 15, 40, 5, 50];

const filterNumber = (number) => {
  const result = number.filter((value) => {
    if (value > 25) {
      return value;
    }
  });
      console.log(result);

};
filterNumber(numbers);


let students = [
    { name: "Yuvi", age: 20, mark: 85 },
    { name: "Arun", age: 21, mark: 65 },
    { name: "Kumar", age: 19, mark: 90 },
    { name: "Ravi", age: 22, mark: 55 }
];

const filterStudents=(student)=>{
    const answer=student.filter(value=>{
        if(value.mark>70){
            return value;
        }
    })
    console.log(answer);
}
filterStudents(students);