function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
  
    // Add leading zeros to minutes and seconds
    hours = hours > 12 ? hours -= 12 : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Update the clock display
    var timeString = hours + ':' + minutes;
    document.getElementById('time').textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1);
  function updateDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    
    document.getElementById('day').textContent = `${dayOfWeek}`;
  }
  
  // Initial call to display the day immediately
  updateDay();




  var input = document.getElementById("searchQuery");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

var btn = document.getElementById("btn");
btn.addEventListener('click', ()=> {
     
    var search= document.getElementById("searchQuery").value;
   var searchURL= "https://www.google.com/search?q="+search;
    window.open(searchURL,"_self");
  
 })




 //
 // Google Workspace
 //
 
let workspaceSection = document.querySelectorAll(".google-workspace-section")[0];
let appSlider = document.querySelectorAll(".app-slider")[0];
let appSlideritems = document.querySelectorAll(".app-type3 .app-type3-icon");

let active = 0;
function scroll() {
    appSlideritems[active].style.transform = 'none';
    appSlideritems[active].style.zIndex = 100;
    appSlideritems[active].style.filter = 'none';
    appSlideritems[active].style.opacity = 1;
    appSlideritems[active].style.position = "absolute";
    let count = 0;
    
    
    for (let index = (active + 1); index < appSlideritems.length; index++) {
        
        count = count+1;
        if(count==1){
            appSlideritems[index].style.transform = `translateY(30px) scale(0.95)`;
        }
        else if(count==2){
            appSlideritems[index].style.transform = `translateY(51px) scale(0.9)`
        }
        appSlideritems[index].style.zIndex = 100-(2*count);
        appSlideritems[index].style.position = "absolute";
        
        appSlideritems[index].style.filter = 'blur(0.6px)';
        appSlideritems[index].style.opacity = count > 2 ? 0 : 0.8;   
        console.log("down scroll() executed");
        
    }
    count = 0;
    for (let index = (active - 1); index >= 0; index--) {
        count = count + 1;
        appSlideritems[index].style.transform = `translateY(-23px) scale(0.95)`
        appSlideritems[index].style.zIndex = 10-2*count;
        appSlideritems[index].style.filter = 'blur(0.6px)';
        appSlideritems[index].style.opacity = count > 1 ? 0 : 0.6;   
        console.log("up scroll() executed");
    }
    console.log("func executed");
}
scroll();

appSlider.onwheel = e => {
    if(e.deltaY >= 0){
        active = active + 1 < appSlideritems.length ? (active + 1) : active;
        scroll();
        console.log("down");
        
    } else {
        active = (active - 1) >= 0 ? (active - 1) : active;
        scroll();
        console.log("up");
    }
}


workspaceSection.onmouseenter = () => {
        workspaceSection.classList.add("expanded-workspace");        
};
workspaceSection.onmouseleave = () => {
        workspaceSection.classList.remove("expanded-workspace");
}
