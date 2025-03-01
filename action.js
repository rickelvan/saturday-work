function greet(){
    alert('Hello World');
}
const button = document.getElementById("click");
button.onclick = function(){
    alert('Button was clicked');
}
button.onmouseover = function(){
    document.getElementById("click").style.color = "red";
}
button.onmouseout = function(){
    document.getElementById("click").style.color = "white";
}
function toggleText() {
    let textElement = document.getElementById("text");
    if (textElement.innerHTML === "Hello World") {
        textElement.innerHTML = "This is the first HTML, CSS and Javascript fusion";
    } else {
        textElement.innerHTML = "Hello World";
    }
}

function changeBackgroundColor() {
    let color = document.getElementById("colorInput").value;
    if (color) {
        document.body.style.backgroundColor = color;
    } else {
        alert("Please enter a valid color.");
    }
}
