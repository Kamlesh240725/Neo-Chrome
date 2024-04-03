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
