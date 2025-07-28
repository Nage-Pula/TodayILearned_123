/*currentUser = JSON.parse(localStorage.getItem("currentUser"));
greeting = document.getElementById("greeting");
if (!currentUser || !currentUser.username) {
  window.location.href = "sf_index.html";
} else {
  greeting.textContent = `Welcome, ${currentUser.username}! 🎉`;
}

 factList = document.getElementById("fact-list");
 facts = initialFacts.filter(
  (f) => f.category.toLowerCase() === "technology"
);

facts.forEach((fact) => {
  const li = document.createElement("li");
  li.className = "fact";
  li.innerHTML = `
          <p>${fact.text}
            <a class="source" href="${fact.source}" target="_blank">(Source)</a>
          </p>
          <span class="tag" style="background-color: #3b82f6">${fact.category}</span>
          <div class="vote-bu¯ttons">
            <button>👍 ${fact.votesInteresting}</button>
            <button>🤯 ${fact.votesMindblowing}</button>
            <button>⛔️ ${fact.votesFalse}</button>
          </div>`;
  factList.appendChild(li);
});*/
