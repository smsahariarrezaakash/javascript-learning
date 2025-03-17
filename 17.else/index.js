const invitationFromFriend = false;
const pocketMoney = 1050;

if (invitationFromFriend === true) {
  console.log("Going to birthday party");
  if (pocketMoney > 1000) {
    console.log("Gift kine niye jabo");
  } else {
    console.log("Khali Hate jabo");
  }
} else {
  console.log("Friend list theke ber kore dibo");
}

const drinkTea = false;
const eatingBiscuit = false;

if (drinkTea === true) {
  console.log("Biscuit khaben?");
  if (eatingBiscuit === false) {
    console.log("Shudu cha ready");
  } else {
    console.log("Cha biscuit ready");
  }
} else {
  console.log("Star jalsha dekhun");
}

const isUserActive = true;
const subscription = "non-premium";

if (isUserActive === true) {
  if (subscription === "premium") {
    console.log("PREMIUM VERSION");
  } else {
    console.log("Free version dekhen");
  }
}

const checkFoodOnFridge = false;
const foodDeliveryAppWorking = false;

if (checkFoodOnFridge === true) {
  console.log("khabar gorom korbo");
} else {
  if (foodDeliveryAppWorking === true) {
    console.log("Khabar order korbo");
  } else {
    console.log("Ajk ami roja");
  }
}

const guestNumber = 90;
const gift = false;

if (guestNumber > 100) {
  if (gift === true) {
    console.log("Lets party all night");
  } else {
    console.log("I will party with myself");
  }
}
