let container = document.getElementById("greeting");
let timeNow = new Date().getHours();
let greeting;

if (timeNow >= 5 && timeNow < 12) {
  greeting = "Good Morning, Brian!";
} else if (timeNow >= 12 && timeNow < 18) {
  greeting = "Good Afternoon, Brian!";
} else {
  greeting = "Good Evening, Brian!";
}

container.textContent = greeting;