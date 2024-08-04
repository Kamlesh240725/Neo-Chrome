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
);

// function to add clicked suggestion to searchQuery on clicking the suggestion and remove suggestion on clicking delete btn

setInterval(() => {
  // function to add clicked suggestion to searchQuery on clicking the suggestion
  for (const key in suggestionItem) {
    suggestionItem[key].onclick = () => {
      searchQuery.value = suggestionItem[key].textContent.trim();
      searchQuery.focus();
    };
  }
  
  // function to remove suggestion on clicking delete btn
  for (const key in recentSearchDeleteBtn) {
    recentSearchDeleteBtn[key].onclick = () => {
      recentSearchDeleteBtn[key].parentElement.remove();
      searchQuery.focus();
    setTimeout(() => {
      searchQuery.value = "";
    }, 5);
    };
  }
  togglescroll();
}, 100);

//.
//.





setInterval(() => {
  searchQuery.onkeydown = (keyInput) => {
    if (keyInput.key.length == 1){
      console.log(searchQuery.value);
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


// to hide/unhide the scroll bar on no of suggestion are less than 8 or not

function togglescroll() {
if (suggestionItem[0].length > 7) {
  suggestionList[0].style.overflowY = "scroll";
}
else if(suggestionItem[0].length < 7){
  suggestionList[0].style.overflow = "clip";
}
}
togglescroll();

// console.log(suggestionList);
// console.log(suggestionList[0]);
// console.log(Array.from(suggestionList));
// console.log(suggestionList[0].length);
