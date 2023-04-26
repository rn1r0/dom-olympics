// Qualifier //

var newHeader = document.getElementById("header");
newHeader.classList.add("header");
newHeader.innerHTML = "<h1>JavaScript Made This!!</h1>";
newHeader.innerHTML += "<p><span>Miro</span> wrote the JavaScript</p>";

var nameSpan = document.querySelector("span");
nameSpan.classList.add("name");


// Bronze //

var firstLeftMessage = document.querySelectorAll(".left")[0]
firstLeftMessage.textContent = "Do you like highspeed internet!?"

var secondLeftMessage = document.querySelectorAll(".left")[1];
secondLeftMessage.textContent = "Fiber can make your performance feel incredibly fast!"

var firstRightMessage = document.querySelectorAll(".right")[0];
firstRightMessage.textContent = "Yes, do you have any recommendations?"

var secondRightMessage = document.querySelectorAll(".right")[1];
secondRightMessage.textContent = "Fiber sounds to good to be true!"

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener('click', clearFunction)

function clearFunction() {
    firstLeftMessage.remove();
    firstRightMessage.remove();
    secondLeftMessage.remove();
    secondRightMessage.remove();

}

