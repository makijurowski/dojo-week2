// Declare some variables
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
  let brickNum = Math.floor((Math.random() * (worldSizeY * (worldSizeX / 5)) + 20));
  // console.log('brickNum: ' + brickNum);
  let cherryNum = Math.floor((Math.random() * (worldSizeY / 4)) + 4);
  // console.log('cherryNum: ' + cherryNum);

  function addRandomBricks(world, brickNum) {
    let randomX = Math.floor((Math.random() * worldSizeX - 1) + 1);
    console.log("random x-value for bricks: " + randomX);
    // console.log('randomX: ' + randomX);
    let randomY = Math.floor((Math.random() * worldSizeY + 1) + 1);
    console.log("random y-value for bricks: " + randomY);
    // console.log('randomY: ' + randomY);
    let pos = world[randomX][randomY];
    // let posLeft = world[randomX - 1][randomY];
    // let posRight = world[randomX + 1][randomY];
    // let posUp = world[randomX][randomY + 1];
    // let posDown = world[randomX][randomY - 1];
    //console.log(pos);
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
    console.log("random x-value for cherries: " + randomX);
    let randomY = Math.floor((Math.random() * worldSizeY - 1) + 1);
    console.log("random y-value for cherries: " + randomY);
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
  // Make initial position empty
  genWorld[1][1] = 0;
  // END GENERATE RANDOM WORLD
  console.log(genWorld);
  return genWorld;
}

var world = makeAWorld(worldSizeX, worldSizeY);
