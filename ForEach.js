let sports = ["Basketball", "Football", "Cricket"];
let  numbers = [1, 2, 3, 4, 5];


//Native Function

sports.forEach(function (sport) {
  console.log(sport);
});

numbers.forEach(function (number) {
  console.log(number);
});

// Arrow function for forEach Method
const displaySport=(sport)=>{
  sport.forEach(value=>console.log(value));

}
displaySport(sports);

const displayNumbers=()=>{
  numbers.forEach(value=>console.log(value));
}
displayNumbers();