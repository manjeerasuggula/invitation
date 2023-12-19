document.addEventListener("DOMContentLoaded", function () {
  var divs = document.querySelectorAll(".example1");

  function fadeInDivs() {
    divs.forEach(function (div, index) {
      setTimeout(function () {
        div.style.opacity = 1;
        div.style.transform = "translateY(0)";
      }, index * 500); // Adjust the delay as needed
    });
  }

  fadeInDivs();
});

var currentDivIndex = 1;

function showDiv(divNumber) {
  var currentButton = document.getElementById("Button" + currentDivIndex);
  var nextButton = document.getElementById("Button" + (currentDivIndex + 1));
  var currentDiv = document.getElementById("div" + (currentDivIndex + 1));

  // Show the current div
  currentDiv.style.display = "block";

  // Hide the current button
  currentButton.style.display = "none";

  // Show the next button (if available)
  if (nextButton) {
    nextButton.style.display = "inline-block";
    currentDivIndex++;
    scrollToBottom();
  }
}
var chatBox = document.getElementById("chatBox");
function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}
