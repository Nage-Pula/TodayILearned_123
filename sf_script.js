const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

window.addEventListener("DOMContentLoaded", () => {
  const isSignupPage = window.location.pathname.includes("sf_index");
signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
document.getElementById('signupBtn').addEventListener('click', function () {
    // Get values from the signup input fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    localStorage.setItem("currentUser", JSON.stringify({ username, email }));
    // Input validation
    if (!username || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Get existing users from localStorage or set as empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);


    // Store new user
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    // Call aptrinsic with new user info
    apssf(newUser);

    // Redirect to next page
    alert("You have been signed up successfully!");
    window.location.href =  "tl_index.html";
});
// const nowdate = new Date();
// const ISTdate = new Date(
//   nowdate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })

});
function apssf(user) {
  aptrinsic("identify",
    {
      //User Fields
      "id": user.email, // Unique user ID
      "email": user.email,
      "firstName": user.username, // Assuming username is the first name
      "lastName": user.username + " " + new Date().toLocaleTimeString(), // Last name with time for uniqueness
    },
    {
      //Account Fields
      "id": user.email + " Account", // Unique account ID based on email
      "name": user.username + " Account", // Account name based on username
    }
  );
}

// const Cpad = n => n.toString().CpadStart(2, '0');
// const hhmmss = `${Cpad(ISTdate.getHours())}${Cpad(ISTdate.getMinutes())}${Cpad(ISTdate.getSeconds())}`;
// console.log("IST Time (HHMMSS):", hhmmss);   
   
  /*function aps(user) {
    aptrinsic("identify",
        {
            "id": "nage154",//, // Or any unique identifier
            "email": "nage154.email",//user.email,
            "firstName": "FN nage",//user.username,
            "lastName": "LN nage"//user.username+" "+hhmmss, // If you have a last name, otherwise leave blank or customize
        },
        {
            "id": "GN1 ", //+hhmmss+ user, // Or any account ID logic
            "name": "gainsight1"//+user.username +hhmmss,
        }

    );
   }*/
/*
const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

document.getElementById('signupBtn').addEventListener('click', function () {
    // Get values from the input fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

   function find(email) {
      return user.find(user => user.email === email);
   }

let user = JSON.parse(localStorage.getItem("user")) || [];

   if(!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    } 
    const existingUser = user.find(user => user.email === email);
    if (!existingUser){
      //if new user, add to localStorage
      user.push({ username, email, password });
      localStorage.setItem("user", JSON.stringify(user));
    }
    localStorage.setItem("currentUser", JSON.stringify({ username, email }));
    window.location.href = 'tl_index.html';
  }); 
 
 function aps() {         
   aptrinsic("identify",
       {
       //User Fields
       id: user, // Required for logged in app users
       email: user.email,
       firstName: user+"FName", //unix time in ms
       lastName: user + " " + new Date().toLocaleTimeString()//unix time in ms
      },
     {
      //Account Fields
      id: user+" ID " + new Date().toLocaleTimeString(), //Required
      name: user+" Account Name " + new Date().toLocaleTimeString(), //Optional
      });
}  */ 




