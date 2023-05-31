console.log("Hello HTML!");

document.body.innerHTML = "";

document.body.insertAdjacentHTML("beforeend", '<button id="add-paragraph">Add new paragraph</button>');
document.body.insertAdjacentHTML("beforeend", '<strong id="counter">HELLO</strong>')

const button = document.getElementById("add-paragraph");
const counterElement = document.getElementById("counter");

let counter = 0;

button.addEventListener("click", function () {
    counter += 1;
    counterElement.textContent = counter;
    document.body.insertAdjacentHTML("beforeend", "<p>My new paragraph</p>");
});
