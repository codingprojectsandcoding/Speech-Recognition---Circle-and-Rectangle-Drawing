x = 0;
y = 0;
circle = "";
rect = "";
var SpeechRecognition = window.webKitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
document.getElementById("status").innerHTML = "System is listening, please speak.";
recognition.start();
}
recognition.onresult= function(event) {
console.log(event);
var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "Speech has been recognised as:" + content;
if (content == "circle") {
x = Math.floor(Math.random()* 900);
y = Math.floor(Math.random()* 600);
document.getElementById("status").innerHTML = "Drawing circle";
circle = "set";
}
if (content == "rectangle") {
x = Math.floor(Math.random()* 900);
y = Math.floor(Math.random()* 600);
document.getElementById("status").innerHTML = "Drawing rectangle";
rect = "set";
}
}
function setup() {
canvas = createCanvas(900, 600);
}
function draw() {
if (circle == "set") {
radius = Math.floor(Math.random()* 100);
circle(x, y, radius);
document.getElementById("status").innerHTML = "Circle is drawn";
circle = "";
}
if (rect == "set") {
rect (x,y, 80, 40);
document.getElementById("status").innerHTML = "Rectangle is drawn";
rect = "";
}
}