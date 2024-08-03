// url for querycall "https://suggestqueries.google.com/complete/search?client=chrome&q=ind"
// API tut: "https://youtu.be/f3EVLwESJss?si=3bcGh6GLHf1m_JYA"
// Search Bar Suggestion Tutorial: "https://youtu.be/pdyFf1ugVfk?si=VMNHQTqfsOP4sxQZ"
let searchBar = document.getElementsByClassName("searchbar")[0];
let suggestionSection = document.getElementsByClassName("suggestion-section");
let suggestionItem = document.getElementsByClassName("suggestion-item");
let suggestionList = document.querySelectorAll(".suggestion-list");
let seperatorLine = document.getElementsByClassName("seperator-line");
let searchQuery = document.getElementById("searchQuery");
let recentSearchDeleteBtn = document.getElementsByClassName(
  "recent-searched-delete-btn"
)[0];

// function to add clicked suggestion to searchQuery

for (const key in suggestionItem) {
  suggestionItem[key].onclick = () => {
    searchQuery.value = suggestionItem[key].textContent.trim();
    searchQuery.focus();
  };
}
setInterval(() => {
  searchQuery.onkeydown = (keyInput) => {
    // keyInput = String.fromCharCode(keyInput.key);
    if (keyInput.key.length == 1){
      console.log(searchQuery.value);
      // searchQuery.value += keyInput.key;
      console.log(searchQuery.value);
      
    }
    console.log(searchQuery.value);
    let a = searchQuery.value;
    suggestionItem[0].lastElementChild.innerHTML = a;
    console.log(searchQuery.value);
    
    // if(input)
    if (keyInput.key === "w") {
      console.log("w is pressed");
    }
  };
}, 10);

// setInterval(() => {
//   for (const key in suggestionItem) {
//     suggestionItem[key].addEventListener("click", () => {
//       searchQuery.value = suggestionItem[key].textContent.trim();
//       searchQuery.focus();
//     });
// if (suggestionItem[key].matches(":hover")) {
//   if (
//     suggestionItem[key].firstElementChild.src ===
//     "./New-Chrome Assets/recent-searched-icon.svg"
//   ) {
//     suggestionItem[key].firstElementChild.src =
//       "./New-Chrome Assets/recent-searched-icon-white.svg";
//   } else
// if (suggestionItem[4].firstElementChild.src.match("suggested-icon.svg").length) {
//     suggestionItem[4].firstElementChild.src.replace("suggested-icon.svg","suggested-icon-white.svg");
//   }
// }
// else {
//   suggestionItem[key].src = "./New-Chrome Assets/recent-searched-icon.svg";
//   console.log(suggestionItem[key].firstElementChild.src.splice());

// console.log(suggestionItem[key].firstElementChild.src. === "./New-Chrome Assets/recent-searched-icon.svg")

// function to remove suggestion on clicking delete btn

function removeSearchedItem(value) {
  value.parentElement.remove();
  searchQuery.focus();
  setTimeout(() => {
    searchQuery.value = "";
  }, 5);
}

// to hide/unhide the suggestion section depending on input is focused or not

setInterval(() => {
  if (searchQuery.matches(":focus")) {
    seperatorLine[0].style.display = "block";
    suggestionSection[0].style.display = "block";
    searchBar.style.borderStyle = "solid";
    searchQuery.placeholder = "";
  } else if (!searchQuery.matches(":focus") && !searchBar.matches(":hover")) {
    seperatorLine[0].style.display = "none";
    suggestionSection[0].style.display = "none";
    searchBar.style.borderStyle = "hidden";
    searchQuery.placeholder = "Search Google or type a uRL";
  }
}, 50);

if (suggestionItem.length > 7) {
  suggestionList[0].style.overflowY = "scroll";
}
