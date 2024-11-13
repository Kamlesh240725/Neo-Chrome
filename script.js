function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Add leading zeros to minutes and seconds
  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Update the clock display
  var timeString = hours + ":" + minutes;
  document.getElementById("time").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1);
function updateDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];

  document.getElementById("day").textContent = `${dayOfWeek}`;
}

// Initial call to display the day immediately
updateDay();

var input = document.getElementById("searchQuery");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var search = document.getElementById("searchQuery").value;
  var searchURL = "https://www.google.com/search?q=" + search;
  window.open(searchURL, "_self");
});

//
// Google Workspace
//

let workspaceSection = document.querySelectorAll(
  ".google-workspace-section"
)[0];
let appSlider = document.querySelectorAll(".app-slider")[0];
let appSlideritems = document.querySelectorAll(".app-type3 .app-type3-icon");

let active = 0;
function scroll() {
  appSlideritems[active].style.transform = "none";
  appSlideritems[active].style.zIndex = 100;
  appSlideritems[active].style.filter = "none";
  appSlideritems[active].style.opacity = 1;
  appSlideritems[active].style.position = "absolute";
  let count = 0;

  for (let index = active + 1; index < appSlideritems.length; index++) {
    count = count + 1;
    if (count == 1) {
      appSlideritems[index].style.transform = `translateY(30px) scale(0.95)`;
    } else if (count == 2) {
      appSlideritems[index].style.transform = `translateY(51px) scale(0.9)`;
    }
    appSlideritems[index].style.zIndex = 100 - 2 * count;
    appSlideritems[index].style.position = "absolute";

    appSlideritems[index].style.filter = "blur(0.6px)";
    appSlideritems[index].style.opacity = count > 2 ? 0 : 0.8;
  }
  count = 0;
  for (let index = active - 1; index >= 0; index--) {
    count = count + 1;
    appSlideritems[index].style.transform = `translateY(-23px) scale(0.95)`;
    appSlideritems[index].style.zIndex = 10 - 2 * count;
    appSlideritems[index].style.filter = "blur(0.6px)";
    appSlideritems[index].style.opacity = count > 1 ? 0 : 0.6;
  }
}
scroll();

appSlider.onwheel = (e) => {
  if (e.deltaY >= 0) {
    active = active + 1 < appSlideritems.length ? active + 1 : active;
    scroll();
  } else {
    active = active - 1 >= 0 ? active - 1 : active;
    scroll();
  }
};

workspaceSection.onmouseenter = () => {
  workspaceSection.classList.add("expanded-workspace");
};
workspaceSection.onmouseleave = () => {
  workspaceSection.classList.remove("expanded-workspace");
};

//
// Docks Section PopUp/PopDown
//

let docksToggleBtn = document.querySelector(".dock-expansion-button");
let expandableDocks = document.getElementsByClassName("expandable-dock")[0];
let expandableDocksblock = document.getElementById("expandable-dock");
let blurLayer = document.getElementsByClassName("blur-layer")[0];
let docksSection = document.getElementsByClassName("dock-section")[0];
let dock = document.getElementsByClassName("dock")[0];


function themebuttonHandler() {
  docksToggleBtn.click();
  setTimeout(() => {
    themeCouraselToggleBtn.click();
  }, 400);
}
docksToggleBtn.onclick = () => {
  workspaceSection.insertAdjacentHTML(
    "afterend",
    `<div class="blur-layer"></div>`
  );
  blurLayer = document.getElementsByClassName("blur-layer")[0];
  expandableDocks.classList.add("expanded-docks");
  expandableDocks.style.animation = "none";
  blurLayer.style.backdropFilter = "blur(1px)";
  dock.style.filter = "blur(1px)";
  blurLayer.style.backgroundColor = "#0000000d";
  blurLayer.style.animation = "fade 0.1s ease";
  setTimeout(() => {
    document.body.addEventListener("click", hovercheck);
  }, 200);
};

function hovercheck() {
  if (!expandableDocksblock.matches(":hover")) {
    minimizeDocks();
  }
}

function minimizeDocks() {
  blurLayer = document.getElementsByClassName("blur-layer")[0];
  expandableDocks.classList.remove("expanded-docks");
  expandableDocks.style.animation = "addPopUp2 0.15s ease reverse";
  document.body.removeEventListener("click", hovercheck);
  blurLayer.style.animation = "fade 0.1s ease reverse";
  blurLayer.style.backdropFilter = "none";
  dock.style.filter = "none";
  blurLayer.style.backgroundColor = "transparent";
  blurLayer.remove();
  if (themeCarousel.classList.contains("theme-carousel-active")) {
    themeCarousel.classList.toggle("theme-carousel-active");
    themeCouraselToggleBtn.getElementsByTagName(
      "img"
    )[0].style.transform = `rotate(0deg)`;
  }
}

let themeCouraselToggleBtn = document.querySelector(
  ".theme-carousel-toggle-btn"
);
let themeCarousel = document.querySelector(".theme-carousel");

themeCouraselToggleBtn.onclick = () => {
  themeCarousel.classList.toggle("theme-carousel-active");
  if (themeCarousel.classList.contains("theme-carousel-active")) {
    themeCouraselToggleBtn.getElementsByTagName(
      "img"
    )[0].style.transform = `rotate(45deg)`;
  } else {
    themeCouraselToggleBtn.getElementsByTagName(
      "img"
    )[0].style.transform = `rotate(0deg)`;
  }
};

//
// Dock's Clock Functionality
//
let secondHand = document.querySelector(".second-hand-block");
let minuteHand = document.querySelector(".minute-hand-block");
let hourHand = document.querySelector(".hour-hand-block");
let dockDate = document.querySelector(".dock-date");
let dockMonth = document.querySelector(".dock-month");
let monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

setInterval(() => {
  let time = new Date();
  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours();
  date = time.getDate();
  month = `${monthNames[time.getMonth()]}`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  dockMonth.innerHTML = `${month}`;
  if (date < 10) {
    dockDate.innerHTML = `0${date}`;
  } else {
    dockDate.innerHTML = `${date}`;
  }
}, 100);
//
//
//

let stackToggleBtn = document.querySelectorAll(".stack-label");

stackToggleBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.add("app-stack-active");
    stackToggleBtn.forEach((stacks) => {
      if (stacks != item) {
        stacks.parentElement.classList.remove("app-stack-active");
      }
    });
  });
});

//
//
//. Spotify Music Player
//
//

let musicSlider = document.querySelector("#seek-slider");
let songName = document.querySelector("#song-name");
let songThumb = document.querySelector(".audio-thumbnail");
let musicSliderValue = musicSlider.value;
let playPauseBtn = document.querySelector(".play-pause-btn");
let forwardBtn = document.querySelector(".forward-btn");
let backwardBtn = document.querySelector(".backward-btn");
let audio = document.querySelector(".spotify-audio");
let songIdx = 0;
audio.onloadedmetadata = () => {
  musicSlider.max = Math.floor(audio.duration);
};
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audio.classList.toggle("playing")
    setInterval(() => {
      musicSlider.value = audio.currentTime;
      if(musicSlider.value == musicSlider.max){nextSong()}
    }, 1000);
    playPauseBtn.style.backgroundImage = `url("./New-Chrome Assets/pause.svg")`
  } else {
    audio.pause();
    audio.classList.toggle("playing")
    playPauseBtn.style.backgroundImage = `url("./New-Chrome Assets/play-pause-btn.svg")`
  }
  // playPauseBtn.classList.toggle("play-pause-btn-paused");
});
musicSlider.onchange = () => {
  audio.currentTime = musicSlider.value;
};

function loopSong(element) {
  audio.classList.toggle("looping")
  console.log(element.style.backgroundImage);
  if (audio.classList.contains("looping")) {
    element.style.backgroundImage = `url("./New-Chrome Assets/loop-on.svg")`
  } else {
    element.style.backgroundImage = `url("./New-Chrome Assets/loop-toggle-btn.svg")`
  }
}

function nextSong() {
  if (!audio.classList.contains("looping")) {
    if(songsDataList.length == songIdx+1){
      songIdx = 0;
    }
    else{
      songIdx++;
    }
  }
  audio.currentTime = 0
  songChange(songIdx)
}
function prevSong() {
  if(!audio.classList.contains("looping") && audio.currentTime<1){
    if(0 == songIdx){
      songIdx = songsDataList.length-1;
    }
    else{
      songIdx--;
    }
  }
  audio.currentTime = 0
  songChange(songIdx)
}
function songChange(index) {
  audio.src = `${songsDataList[index].audioURL}`
    songName.innerHTML = `${songsDataList[index].name}`
    songThumb.style.backgroundImage=`url(${songsDataList[index].audioThumbURL})`
    if(audio.classList.contains("playing")){
      audio.play();
    }
}

//
//
// Search Bar 
//
//
let searchBar = document.getElementsByClassName("searchbar")[0];
let suggestionSection = document.getElementsByClassName("suggestion-section");
let suggestionItem = document.getElementsByClassName("suggestion-item");
let suggestionList = document.querySelector(".suggestion-list");
let seperatorLine = document.getElementsByClassName("seperator-line");
let searchQuery = document.getElementById("searchQuery");
let recentSearchDeleteBtn = document.getElementsByClassName(
  "recent-searched-delete-btn"
);
let selectedSuggestion = -1;

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
  // togglescroll();
}, 100);

//.
//.
function clearSuggestions(){
  suggestionList.innerHTML = "";
  seperatorLine[0].style.display = "none";
  suggestionSection[0].style.display = "none";  
  togglescroll();
}
function addSuggestions(suggestionData) {
  suggestionList.innerHTML = `${suggestionData}`;
  seperatorLine[0].style.display = "block";
  suggestionSection[0].style.display = "block";
  togglescroll();
}


// to add/remove suggestion on every key pressed

searchQuery.addEventListener("keyup",(e)=>{
  if(!(e.code === 'ArrowUp' || e.code === 'ArrowDown')){

    clearSuggestions();
    let query = e.target.value;
    let newSuggestions = [];
    let suggestionData = '';
    if (query) {
      newSuggestions = suggestions.filter((data)=>{return data.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())})
    }
    for (let index=0; (index<10 && index<newSuggestions.length) ; index++) {
      let tempData = `<li class="suggestion-item suggestion-unsearched-item">
      <img
        class="suggested-icon"
        src="./New-Chrome Assets/suggested-icon.svg"
        alt="img_here"
      />
      <p>${newSuggestions[index]}</p>
    </li>
    `
      suggestionData = `${suggestionData}${tempData}`
    }
    if(suggestionData){addSuggestions(suggestionData)}  
  }
})

// up/down arrow key navigation for searchbar

searchQuery.addEventListener("keydown", (key)=>{
  if (key.code === 'ArrowUp' && selectedSuggestion>-1) {
    selectedSuggestion = selectedSuggestion-1;
    for (let i = 0; i < suggestionList.children.length; i++) {
      suggestionList.children[i].classList.remove("suggestion-item-selected");
    }
    suggestionList.children[selectedSuggestion].classList.add("suggestion-item-selected");
    searchQuery.value = suggestionList.children[selectedSuggestion].innerText;

    if (selectedSuggestion<3) {
      suggestionList.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    }
  }
  else if (key.code === 'ArrowDown' && selectedSuggestion<(suggestionList.childElementCount-1)) {
    selectedSuggestion = selectedSuggestion+1;
    for (let i = 0; i < suggestionList.children.length; i++) {
      suggestionList.children[i].classList.remove("suggestion-item-selected");
    }
    suggestionList.children[selectedSuggestion].classList.add("suggestion-item-selected");
    searchQuery.value = suggestionList.children[selectedSuggestion].innerText; 

    if (selectedSuggestion>6) {
      suggestionList.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    }
  }

})

// to hide/unhide the suggestion section depending on input is focused or not

searchQuery.addEventListener("focusin",()=>{
  if (suggestionList.firstElementChild) {
    seperatorLine[0].style.display = "block";
      suggestionSection[0].style.display = "block";
    }
    searchBar.style.borderStyle = "solid";
    searchQuery.placeholder = "";
  })
searchQuery.addEventListener("focusout",()=>{
  if (!searchBar.matches(":hover")){
  seperatorLine[0].style.display = "none";
    suggestionSection[0].style.display = "none";
    searchBar.style.borderStyle = "hidden";
    searchQuery.placeholder = "Search Google or type a uRL";
  }
  else{
    searchQuery.focus();
  }
})


// to hide/unhide the scroll bar on no of suggestion are less than 8 or not

function togglescroll() {
    if (suggestionList.childElementCount > 7) {
      suggestionList.style.overflowY = "scroll";
      console.log("scroll addwd");
    }
    else if(suggestionList.childElementCount < 7){
      suggestionList.style.overflowY = "hidden";
    }
}


// theme Change Script

function changeTheme(e) {
  document.querySelector(":root").style.setProperty("--main-background-image",`var(--background-image-${e.accessKey})`)
  document.querySelector(":root").style.setProperty("--main-theme-button",`var(--theme-button-${e.accessKey})`)
  document.querySelector(":root").style.setProperty("--color-a",`var(--color-a-${e.accessKey})`)
  document.querySelector(":root").style.setProperty("--color-a1",`var(--color-a1-${e.accessKey})`)
  document.querySelector(":root").style.setProperty("--color-a2",`var(--color-a2-${e.accessKey})`)
  document.querySelector(":root").style.setProperty("--color-a3",`var(--color-a3-${e.accessKey})`)
  document.querySelector(":root").style.setProperty("--searchbarhovercolor",`var(--searchbarhovercolor-${e.accessKey})`)
}