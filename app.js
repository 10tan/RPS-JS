alert("Welcome To Rock Paper Scissors Game");
function func1() {
  let options = ["Nothing", "ROCK", "PAPER", "SCISSORS"];
  let images = ["Nothing", "Rock.png", "Paper.png", "Scissors.png"];
  var num = Math.floor(Math.random() * 3) + 1;
  let elem = document.getElementById("Judge");
  let photo = document.getElementById("imag");
  let one = images[num];
  photo.innerHTML = `<img src="${one}" width="100pt" height="100pt"/>`;
  elem.innerHTML = options[num];
  elem.style.color = "black";
  elem.style.backgroundColor = "white";
  elem.style.borderRadius = "13pt";
  elem.style.fontFamily = "fantasy";
  elem.style.width = "121pt";
  elem.style.height = "44pt";
  elem.style.fontSize = "22pt";
  elem.style.textAlign = "center";
  elem.style.lineHeight = "46pt";
  elem.style.position = "absolute";
  elem.style.top = "120pt";
  elem.style.left = "233pt";
}
