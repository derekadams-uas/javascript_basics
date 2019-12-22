document.getElementsByTagName("h1");
document.getElementsByClassName("second");
document.getElementById("first");

document.querySelector("h1");
document.querySelector("li");
document.querySelectorAll("li");
document.querySelectorAll("li, h1");

document.querySelector("li").getAttribute("random");
document.querySelector("li").setAttribute("random", "1000");

document.querySelector("h1").style.background = "yellow";

document.querySelector("h1") // Best
h1.className = "cool title"; // Best

document.querySelector("h1").classList.add("coolTitle"); // Best
document.querySelector("h1").classList.remove("coolTitle"); // Best
document.querySelector("h1").classList.toggle("coolTitle"); // Best
