// Decalre some variables
worldSizeX = 20;
worldSizeY = 20;

function makeAWorld(x, y) {
  // GENERATE A RANDOM WORLD 
  function newRow(x, y) {
    let row = [2];
    for (let i = 0; i <= x; i++) {
      row.push(1);
    }
    row.push(2);
    return row;
  }

  function newWorld(x, y) {
    let mapArray = [];
    for (let k = 0; k <= y; k++) {
      mapArray.push(newRow(x));
    }
    return mapArray;
  }
  //generate a new world, add border rows
  var world = newWorld(worldSizeX - 3, worldSizeY - 1);
  world[0].fill(2);
  world[world.length - 1].fill(2);
  var genWorld = world;
  //add in random bricks
  let brickNum = Math.floor((Math.random() * (worldSizeY * (worldSizeX / 5)) + 10));
  // console.log('brickNum: ' + brickNum);
  let cherryNum = Math.floor((Math.random() * (worldSizeY / 4)) + 1);
  console.log('cherryNum: ' + cherryNum);

  function addRandomBricks(world, brickNum) {
    let randomX = Math.floor((Math.random() * worldSizeX - 1) + 1);
    // console.log('randomX: ' + randomX);
    let randomY = Math.floor((Math.random() * worldSizeY - 1) + 1);
    // console.log('randomY: ' + randomY);
    let pos = world[randomX][randomY];
    // let posLeft = world[randomX - 1][randomY];
    // let posRight = world[randomX + 1][randomY];
    // let posUp = world[randomX][randomY + 1];
    // let posDown = world[randomX][randomY - 1];
    console.log(pos);
    if (pos != 2 && pos != undefined) {
      pos = 2;
      if (world[randomX - 1][randomY] != 2 &&
        world[randomX - 1][randomY] != undefined) {
        world[randomX - 1][randomY] = 2;
      }
      else if (world[randomX + 1][randomY] != 2 &&
        world[randomX + 1][randomY] != undefined &&
        world[randomX][randomY] == 2) {
        world[randomX + 1][randomY] = 2;
      }
      else if (world[randomX][randomY - 1] != 2 &&
        world[randomX][randomY - 1] != undefined &&
        world[randomX][randomY] == 2) {
        world[randomX][randomY - 1] = 2;
      }
      else if (world[randomX][randomY + 1] != 2 &&
        world[randomX][randomY + 1] != undefined &&
        world[randomX][randomY] == 2) {
        world[randomX][randomY + 1] = 2;
      }
    }
    return world;
  }

  function addRandomCherries(world, cherryNum) {
    let randomX = Math.floor((Math.random() * worldSizeX - 1) + 1);
    let randomY = Math.floor((Math.random() * worldSizeY - 1) + 1);
    if (world[randomX][randomY] != 2 &&
      world[randomX][randomY] != undefined &&
      world[randomX][randomY] != 3) {
      world[randomX][randomY] = 3;
    }
    return world;
  }
  for (let m = 0; m < brickNum; m++) {
    // console.log("loop: " + m);
    genWorld = addRandomBricks(world, brickNum);
  }
  for (let m = 0; m < cherryNum; m++) {
    // console.log("loop: " + m);
    genWorld = addRandomCherries(world, cherryNum);
  }
  // END GENERATE RANDOM WORLD
  return genWorld;
}

var world = makeAWorld(worldSizeX, worldSizeY);

/////


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
  document.getElementById('score').innerHTML = score;
}

// Update displays
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
    score += 10;
    displayWorld();
    displayScore();
  }

  else if (world[pacman.y][pacman.x] == 3) {
    world[pacman.y][pacman.x] = 0;
    score += 50;
    displayWorld();
    displayScore();
  }

  // log keystroke & update display
  console.log(e.keyCode);
  displayPacman();
}