// File: tl_script.js
console.log("Hello, World!");
/*Added Newly on 8th July for greeting*/
const user = JSON.parse(localStorage.getItem("user"));
const greeting = document.getElementById("greeting");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close Form";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

/*
votesInteresting = votesInteresting + 1;
console.log(votesInteresting); */
let votesInteresting = 11;
const text = "This is a fact about React";
let votesMindblowing = 90;
let votesFalse = 16;
let totalUpvotes = votesInteresting + votesMindblowing;
console.log("upvotes: " ,totalUpvotes);

const isCorrect = votesFalse < totalUpvotes;
console.log("isCorrect: ", isCorrect);


//const message =  totalUpvotes > votesFalse ? "This fact is correct" : "This fact is incorrect";

//alert(message);
const text1 = "This is a fact about React";
const upperText = text1.toUpperCase();
console.log(upperText);
const now = new Date();
// Use the correct way to get IST time using timeZone option
const istDate = new Date(
  now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
);
const str = `The current IST time is ${istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;
console.log(str);
const pad = n => n.toString().padStart(2, '0');
const hhmmss = `${pad(istDate.getHours())}${pad(istDate.getMinutes())}${pad(istDate.getSeconds())}`;
console.log("IST Time (HHMMSS):", hhmmss);

const calcFactAge2  = year => new Date().getFullYear() - year;
console.log(calcFactAge2(2027));



function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
  if (age >=0) {
    return age;
  }
  else {
    console.log("Invalid year provided");
    return null;
  }
}
const age1 = calcFactAge(2090);
console.log(age1);
console.log(votesInteresting === votesMindblowing);

// Comparison Operators
if (votesInteresting === votesMindblowing) {
  alert("this fact is really interesting and mindblowing"); //alert is a dialog box that pops up
} else if (votesInteresting > votesMindblowing) {
  console.log("interesting Fact..!");
} else {
  console.log("something else");
}

//falsy vaues: 0,',null, undefined
if (votesMindblowing) {
  console.log("mindblowing fact!!!");
} else {
  console.log("not so special");
}



function logoutUser() {
  // Clear user data from localStorage
  localStorage.removeItem("currentUser");
  aptrinsic('reset');
  alert("You have been logged out successfully!");

  // Redirect to the sign-up page
  window.location.href = "sf_index.html";
}

// Display current user and Guard access
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || !currentUser.username) {
  greeting.textContent = `Welcome, ${currentUser.username}! 🎉`;
  // If no user is logged in, show a generic greeting

  // Optionally, you can redirect to the sign-up page
  window.location.href = "sf_index.html";
} else {
  greeting.textContent = `Welcome, ${currentUser.username}! 🎉`;
  // If a user is logged in, show a personalized greeting
}

const fact = ['abc',123, true,'man'];
console.log(fact[0]);
console.log(fact[1]);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]); // Accessing the last element of the array
console.log(fact);
const [first, second, third, fourth] = fact;
console.log( second, third, fourth);
// Using the spread operator to create a new array
const newFact = [...fact, 'newFact'];
console.log(newFact);
const factObject = {
  id: 1,
  text: "This is a fact about React",
  votesInteresting: 11,
  category: "Society",
  votesMindblow: 90,
  votesFals: 16,
  createdAt: new Date().toISOString(),
};
console.log(first);
console.log(second);
console.log(factObject.id);
console.log(factObject.text);
console.log(factObject.votesInteresting);
const {category, votesMindblow, votesFals} = factObject;
console.log(category);

[2,4,6,8].forEach(function(n) {
  console.log(n);
});
const m = [2,4,6,8].map(function(m) {
  return m * 2;
});
console.log(m);
const z=[1,2,3].map((el) => {
  return el * 2;});
  console.log(z);

  const ATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allcategories = ATEGORIES.map((ele) => {
  return ele.name;
});
console.log(allcategories);