/*jshint esversion: 6 */

// Sound sprite object using howler.js
var eatCoins = new Howl({
  src: ['sounds/pacman_sounds.mp3'],
  sprite: {
    intro: [0, 4000],
    coinChomp: [4200, 440],
    fruitChomp: [5100, 740]
  }
});

var score = 0;
var pacman = {
  x: 1,
  y: 1
};

// Functions for displaying world, pacman, & score
function displayWorld() {
  var output = ' ';
  for (var i = 0; i < world.length; i++) {
    output += "\n<div class='row'>\n";
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] == 2)
        output += `<div class='brick'></div>`;
      else if (world[i][j] == 1)
        output += `<div class='coin'></div>`;
      else if (world[i][j] == 3)
        output += `<div class='cherries'></div>`;
      if (world[i][j] == 0)
        output += `<div class='empty'></div>`;
    }
    output += "\n</div>";
  }
  document.getElementById('world').innerHTML = output;
}

function displayPacman() {
  document.getElementById('pacman').style.top = pacman.y * 20 + "px";
  document.getElementById('pacman').style.left = pacman.x * 20 + "px";
}

function displayScore() {
  document.getElementById('score').innerHTML = '<h3>Score</h3>' + score;
}

// Update displays
eatCoins.play('intro');
displayWorld();
displayPacman();
displayScore();

// Movement, block from moving into invalid spaces, rotate pacman
document.onkeydown = function (e) {
  console.log(e.keyCode);
  var pacDiv = document.getElementById("pacman");

  //set actions to keystrokes
  if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
    pacDiv.setAttribute("class", "rotate180");
    pacman.x--;
  }
  else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
    pacDiv.setAttribute("class", "norotate");
    pacman.x++;
  }
  else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
    pacDiv.setAttribute("class", "rotate270");
    pacman.y--;
  }
  else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
    pacDiv.setAttribute("class", "rotate90");
    pacman.y++;
  }

  // update scores
  if (world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
    eatCoins.play('coinChomp');
    score += 10;
    displayWorld();
    displayScore();
  }

  else if (world[pacman.y][pacman.x] == 3) {
    world[pacman.y][pacman.x] = 0;
    eatCoins.play('fruitChomp');
    score += 50;
    displayWorld();
    displayScore();
  }

  // log keystroke & update display
  console.log(e.keyCode);
  displayPacman();
};