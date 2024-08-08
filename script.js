function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Add leading zeros to minutes and seconds
  hours = hours > 12 ? (hours -= 12) : hours;
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

let docksToggleBtn = document.getElementsByClassName(
  "dock-expansion-button"
)[0];
let expandableDocks = document.getElementsByClassName("expandable-dock")[0];
let expandableDocksblock = document.getElementById("expandable-dock");
let blurLayer = document.getElementsByClassName("blur-layer")[0];
let docksSection = document.getElementsByClassName("dock-section")[0];
let dock = document.getElementsByClassName("dock")[0];

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
    console.log("run in");
    
}
console.log("run out ");
}

let themeCouraselToggleBtn = document.querySelector(".theme-carousel-toggle-btn");
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
let monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

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
  if(date<10){
    dockDate.innerHTML = `0${date}`;
  }
  else{
    dockDate.innerHTML = `${date}`;
  }
}, 100);
//
//
//


let stackToggleBtn = document.querySelectorAll(".stack-label");
console.log(stackToggleBtn);

stackToggleBtn.forEach((item)=>{
    console.log(item);
    item.addEventListener("click", ()=>{
        item.parentElement.classList.add("app-stack-active");
        stackToggleBtn.forEach((stacks)=>{
            if(stacks != item){
                stacks.parentElement.classList.remove("app-stack-active");
            }
        })
    })
})    
        
         
    

