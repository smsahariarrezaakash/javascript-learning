const price = 4500;

if (price > 3000) {
  const discount = (price * 5) / 100;
  const pay = price - discount;
  console.log(pay);
} else if (price > 6000) {
  const discount = (price * 15) / 100;
  const pay = price - discount;
  console.log(pay);
}

const age = 28;
if (age < 12) {
  console.log("Food for kids are free");
} else if (age > 60) {
  console.log("Senior citizen's will get 50% discount");
} else {
  console.log("Pay full payment");
}

const balance = 2700;

if (balance < 1000) {
  console.log("Please deposit");
} else if (balance >= 1000 && balance <= 5000) {
  console.log("Enjoy your bindas life");
} else if (balance > 5000) {
  console.log("You are rich marry me please");
}

const marks = 67;

if (marks < 50) {
  console.log("fail");
} else if (marks >= 50 && marks <= 80) {
  console.log("pass");
} else if (marks > 80) {
  console.log("A+");
}

const pages = 340;

if (pages < 100) {
  console.log("Small book");
} else if (pages >= 100 && pages <= 500) {
  console.log("Mid-size book");
} else if (pages < 500) {
  console.log("heart-attack size book");
}

const temperature = 50;

if (temperature < 0) {
  console.log("ice");
} else if (temperature >= 0 && temperature <= 20) {
  console.log("Ice");
} else if (temperature > 20) {
  console.log("Hot Hot");
}

const playerLevel = 10;

if (playerLevel < 10) {
  console.log("Novice");
} else if (playerLevel >= 10 && playerLevel <= 50) {
  console.log("Expert");
} else if (playerLevel > 50) {
  console.log("Pro Player");
}
