var p1 = Math.floor((Math.random() * 6) + 1);
var p2 = Math.floor((Math.random() * 6) + 1);

while(p1 === p2){
  var p1 = Math.floor((Math.random() * 6) + 1);
  var p2 = Math.floor((Math.random() * 6) + 1);
}

switch (p1) {
  case 1:
    document.querySelector(".img1").src = './images/dice1.png';
    break;
  case 2:
    document.querySelector(".img1").src = './images/dice2.png';
    break;
  case 3:
     document.querySelector(".img1").src = './images/dice3.png';
    break;
  case 4:
    document.querySelector(".img1").src = './images/dice4.png';
    break;
  case 5:
    document.querySelector(".img1").src = './images/dice5.png';
    break;
  case 6:
    document.querySelector(".img1").src = './images/dice6.png';
    break;
}

switch (p2) {
  case 1:
    document.querySelector(".img2").src = './images/dice1.png';
    break;
  case 2:
    document.querySelector(".img2").src = './images/dice2.png';
    break;
  case 3:
     document.querySelector(".img2").src = './images/dice3.png';
    break;
  case 4:
    document.querySelector(".img2").src = './images/dice4.png';
    break;
  case 5:
    document.querySelector(".img2").src = './images/dice5.png';
    break;
  case 6:
    document.querySelector(".img2").src = './images/dice6.png';
    break;
}

if( p1 > p2){
  var x = document.createElement("h1");
  var y = document.createTextNode("Player 1 Wins!");
  x.appendChild(y);
  // document.body.appendChild(x);
  document.querySelector(".container").appendChild(x);
}
else{
  var x = document.createElement("h1");
  var y = document.createTextNode("Player 2 Wins!");
  x.appendChild(y);
  // document.body.appendChild(x);
  document.querySelector(".container").appendChild(x);
}
