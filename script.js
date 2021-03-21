//Setting Variables

var hourNine = document.querySelector("#hour-nine .saveBtn");
var hourTen = document.querySelector("#hour-ten .saveBtn");
var hourEleven = document.querySelector("#hour-eleven .saveBtn");
var hourTwelve = document.querySelector("#hour-twelve .saveBtn");
var hourOne = document.querySelector("#hour-one .saveBtn");
var hourTwo = document.querySelector("#hour-two .saveBtn");
var hourThree = document.querySelector("#hour-three .saveBtn");
var hourFour = document.querySelector("#hour-four .saveBtn");
var hourFive = document.querySelector("#hour-five .saveBtn");





//Today's date and time

var date = moment();
$("#currentDay").text(date.format("LLL"));


      
//Checking buttons work

hourNine.addEventListener("click", function () {
    alert("This button works!");
});

hourTen.addEventListener("click", function () {
    alert("This button works!");
});

hourEleven.addEventListener("click", function () {
    alert("This button works!");
});

hourTwelve.addEventListener("click", function () {
    alert("This button works!");
});

hourOne.addEventListener("click", function () {
    alert("This button works!");
});

hourTwo.addEventListener("click", function () {
    alert("This button works!");
});

hourThree.addEventListener("click", function () {
    alert("This button works!");
});

hourFour.addEventListener("click", function () {
    alert("This button works!");
});

hourFive.addEventListener("click", function () {
    alert("This button works!");
});


//Saving to localStorage    

var nineText = document.querySelector("#hour-nine .description");

hourNine.addEventListener("click", function () {
    localStorage.setItem("save9",Text);
});

var tenText = document.querySelector("#hour-ten .description");

hourTen.addEventListener("click", function () {
    localStorage.setItem("save10",Text);
});

var elevenText = document.querySelector("#hour-eleven .description");

hourEleven.addEventListener("click", function () {
    localStorage.setItem("save11",Text);
});

var twelveText = document.querySelector("#hour-twelve .description");

hourTwelve.addEventListener("click", function () {
    localStorage.setItem("save12",Text);
});

var oneText = document.querySelector("#hour-one .description");

hourOne.addEventListener("click", function () {
    localStorage.setItem("save1",Text);
});

var twoText = document.querySelector("#hour-two .description");

hourOne.addEventListener("click", function () {
    localStorage.setItem("save2",Text);
});

var threeText = document.querySelector("#hour-three .description");

hourThree.addEventListener("click", function () {
    localStorage.setItem("save3",Text);
});

var fourText = document.querySelector("#hour-four .description");

hourFour.addEventListener("click", function () {
    localStorage.setItem("save4",Text);
});

var fiveText = document.querySelector("#hour-five .description");

hourFive.addEventListener("click", function () {
    localStorage.setItem("save5",Text);
});
