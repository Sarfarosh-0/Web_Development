// CALLACK FUNCTIONS

function greet(name) {
  console.log("HELLO " + name);
  message();
}
function message() {
  console.log("YOUR AGE : 20");
  details();
}
function details() {
  console.log("Your IP ADDRESS : 192.7427.5362.890");
}
greet("SARFAROSH");

// Create a function that accepts a callback and prints : 1. "Task Strated" 2. "Task Completed"

function TaskStarted(callback) {
  console.log("Task Started !");
  TaskCompleted();
}
function TaskCompleted() {
  console.log("Task Completed");
}

TaskStarted();

// Use SetTimeOut() to Print message after 5 seconds

setTimeout(() => {
  console.log("Message after 5 seconds");
  console.log("This is done using the SetTimeOut");
}, 5000);

// Create a button click event Listener

const Btn = document.getElementById("btn");
Btn.addEventListener("click", () => {
  alert("You clicked the Button");
  console.log("Button Clicked");
});
document.addEventListener("keypress", (e) => {
  console.log(e.key);
  console.log(e.keyCode);
  if (e.keyCode == 13) {
    alert("You clicked the Button");
    console.log("Button Clicked");
  }
});
