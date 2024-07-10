"use strict";
// Question 25
let alienColor = "green";
if (alienColor == "green") {
    console.log("You just earned 5 points!");
}
;
alienColor = "red";
if (alienColor == "green") {
    console.log("You just earned 5 points!"); // no output
}
;
// Question 26
alienColor = "green";
if (alienColor == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned  10 points");
}
alienColor = "yellow";
if (alienColor == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned  10 points");
}
// Question 27
alienColor = "green";
if (alienColor == "green") {
    console.log("You just earned 5 points!");
}
else if (alienColor == "yellow") {
    console.log("You earned 10 points!");
}
else if (alienColor == "red") {
    console.log("You just earned  15 points!");
}
alienColor = "yellow";
if (alienColor == "green") {
    console.log("You just earned 5 points!");
}
else if (alienColor == "yellow") {
    console.log("You earned 10 points!");
}
else if (alienColor == "red") {
    console.log("You just earned  15 points!");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("You just earned 5 points!");
}
else if (alienColor == "yellow") {
    console.log("You earned 10 points!");
}
else if (alienColor == "red") {
    console.log("You just earned  15 points!");
}
