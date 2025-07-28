/*console.log("Hello, World!");
const user = JSON.parse(localStorage.getItem("user"));
const greeting = document.getElementById("greeting");
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

window.addEventListener("DOMContentLoaded", () => {
  
document.getElementById('btn').addEventListener("click", function () { /**------REQU_1S-------*/
 /* console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close Form";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
}); */
                                        /**------REQU_1E-------*/



                         /**------REQU_2E-------*/

// Display current user and Guard access /*------OPTIONAL+REQU_3S-------*/
/*const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser || !currentUser.username) {
  greeting.textContent = `Welcome, ${currentUser.username}! 🎉`;
  window.location.href = "index.html";
} else {
  greeting.textContent = `Welcome, ${currentUser.username}! 🎉`;
}   });  
function logoutUser() {       /*------REQU_2S-------*/
 /* localStorage.removeItem("currentUser");  
  alert("You have been logged out successfully!");
  window.location.href = "ndex.html";
  aptrinsic('reset');
}    */                                 /**------OPTIONAL+REQU_3E-------*/

console.log("Hello, Jeeni!");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const greeting = document.getElementById("greeting");
  const btn = document.querySelector(".btn-open");
  const form = document.querySelector(".fact-form");
  const techbtn = document.getElementById("technology-btn");
  const email = currentUser ? currentUser.email : "guest@domain.com";
  const name = currentUser ? currentUser.username : "Guest";
  // Wait for DOM to load
  window.addEventListener("DOMContentLoaded", () => {

  if (techbtn) {
    techbtn.addEventListener("click", () => {
      console.log("Technology button clicked");
      aptrinsic("track", "Technology Button Clicked");
      apstl(currentUser);
      location.href = "tl_technology.html";
    });
  }
  // ✅ Guard if user not logged in
  //  if (!currentUser || !currentUser.username) {
  //   window.location.href = "ndex.html"; // redirect to login
  //   return;
  //  }

  // ✅ Show greeting
  if (greeting) {
    greeting.textContent = `Welcome, ${currentUser.username}! 🎉`;
  }

  // ✅ Toggle form logic
  // Call the aps function with currentUser
  if (btn && form) {
    btn.addEventListener("click", () => {
      console.log("Toggled Share Form");
      aps(currentUser); 
      form.classList.toggle("hidden");
      btn.textContent = form.classList.contains("hidden")
        ? "Share a Fact"
        : "Close Form";
    });
  } 
});


// ✅ Global logout function (must be global so HTML onclick works)
function logoutUser() {
  aptrinsic('reset'); // PX logout
  localStorage.removeItem("currentUser");
  alert("You have been logged out successfully!");
  window.location.href = "index.html";
}

function buttonClicked() {
            const likeBtn = document.getElementById('likeBtn');
            const dislikeBtn = document.getElementById('dislikeBtn');
            const minLikeBtn = document.getElementById('minLikeBtn');
            const likeSpan = document.getElementById('likeCount');
            const dislikeSpan = document.getElementById('dislikeCount');
            const minLikeSpan = document.getElementById('minLikeCount');

            let likeCount = localStorage.getItem('likeCount') || 0;
            let dislikeCount = localStorage.getItem('dislikeCount') || 0;
            let minLikeCount = localStorage.getItem('minLikeCount') || 0;

            likeSpan.textContent = likeCount;
            dislikeSpan.textContent = dislikeCount;
            minLikeSpan.textContent = minLikeCount;

            likeBtn.addEventListener('click', () => {
              likeCount = Number(likeCount) + 1;
              localStorage.setItem('likeCount', likeCount);
              likeSpan.textContent = likeCount;
            });

            dislikeBtn.addEventListener('click', () => {
              dislikeCount = Number(dislikeCount) + 1;
              localStorage.setItem('dislikeCount', dislikeCount);
              dislikeSpan.textContent = dislikeCount;
            });

            minLikeBtn.addEventListener('click', () => {
              minLikeCount = Number(minLikeCount) + 1;
              localStorage.setItem('minLikeCount', minLikeCount);
              minLikeSpan.textContent = minLikeCount;
            });
    }

function apstl(user) {
   aptrinsic("identify",
        {
          //"id": "Dhoni321am", //"TechBtnvisitor-" + Date.now(), // unique session-based ID
          "email": user.email,
          "firstName": user.email,
          "lastName": user.email,
          "id": user.email,
        },
        {
          "id": user.email,//"Technology-Visitor-" + Date.now(), // unique session-based account ID
          "name": "Technology Visitor" + Date.now()
        });
};
/**  iFrame start*/
window.addEventListener('DOMContentLoaded', () => {
  const signupFrame = document.getElementById('signupFrame');
  const loader = document.getElementById('iframeLoader');

  if (signupFrame) {
    signupFrame.onload = () => loader.classList.add('hidden');

    window.addEventListener("message", (event) => {
      // 🚨 For security: validate origin if hosted remotely
      if (event.origin !== window.location.origin) return;

      const { type } = event.data;

      if (type === "signupSuccess") {
        // Redirect to internal or external URL
        alert("Signup successful! Redirecting...");
        apstl(); // Call the apstl function to track signup
        window.location.href = "welcome.html"; // 👉 change this to external URL if needed
        // e.g. window.location.href = "https://example.com/welcome";
      }
    });
  }
});

