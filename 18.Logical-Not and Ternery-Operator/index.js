let price = 5000;
let cashback;
price > 3000 ? (cashback = 500) : (cashback = 0);
console.log(cashback);

const age = 28;
age > 15 ? console.log("Teenager") : console.log("Child");

const isLoggedIn = true;
isLoggedIn === true ? console.log("Welcome back") : console.log("Please login");

const isOilTankFull = false;

if (!isOilTankFull) {
  console.log("Fill the tank");
} else {
  console.log("Ready for long drive");
}

const passedTheExam = false;
passedTheExam === true
  ? console.log("Party time")
  : console.log("Next semister e serious study korbo");

const sunny = false;
if (!sunny) {
  console.log("Stay Home");
}

const Expensive = false;
if (!Expensive) {
  console.log("I will buy this item");
}
