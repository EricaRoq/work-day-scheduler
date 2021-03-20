
// Date and Time set up
// moment().format('MMMM Do YYYY, h:mm:ss a');

var numberOfButtons = document.querySelectorAll(".saveBtn").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button .saveBtn")[i].addEventListener("click", function () {
        alert("I got clicked!");
        
    });
}





    





