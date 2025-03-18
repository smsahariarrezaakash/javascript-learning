const fruits = ["apple", "banana", "mango", "lichi"];
if (fruits.includes("mango")) {
  console.log("yes there are mango in the list");
} else {
  console.log("no mango here gache uthe jao");
}

const people = ["babul", "alif", "choton"];
console.log(people.indexOf("babul"));

const friendList = ["rimon", "rifat", "rajib"];
console.log(friendList.indexOf("rifat"));

const townList = ["Dhaka", "Chittagong", "Sylhet"];
townList.push("rajshahi");
console.log(townList);
console.log(townList.includes("RajShahi"));

const randomArray = ["Lake", "Cloud", "Rain", "Rainy"];
if (randomArray.includes("rain")) {
  console.log("I need umbrella");
} else {
  console.log("No rain no pain");
}

const favoriteSports = ["Football", "Cricket", "Vollyball"];
console.log(favoriteSports.includes("badminton"));
