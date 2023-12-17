// Wang tiles in p5.js
var tiles;
var tileW, tileH;
var tileCols = 12;
var tileRows = 20;

function setup() {
  createCanvas(1008, 1584);
  tileW = width / tileCols;
  tileH = height / tileRows;
  tiles = create2DArray(tileRows, tileCols);
  // arrangeWithConstraints();
  arrangeWithNoConstraints();
}

function mousePressed() {
  arrangeWithConstraints();
}

function arrangeWithConstraints() {
  for (var row = 0; row < tileRows; row++) {
    for (var col = 0; col < tileCols; col++) {
      var tileThis = 0;

      if (row == 0 && col == 0) {
        // The top-left tile is totally random.
        tileThis = floor(random(16));
      } else {
        if (row > 0) {
          var tileAbov = tiles[row - 1][col];
          if ((tileAbov & 4) > 0) {
            // If the tile above us points downwards,
            // Draw upwards to connect with it.
            tileThis += 1;
          }
        } else {
          // For the first row,
          // Draw upwards with some probability
          if (random(1.0) < 0.333) {
            tileThis += 1;
          }
        }

        if (col > 0) {
          var tileLeft = tiles[row][col - 1];
          if ((tileLeft & 2) > 0) {
            // If the tile to the left points to its right,
            // Draw leftwards to connect with it.
            tileThis += 8;
          }
        } else {
          // For the first column,
          // Draw leftwards with some probability
          if (random(1.0) < 0.333) {
            tileThis += 8;
          }
        }

        if (random(1.0) < 0.6) {
          // Draw downwards with some probability.
          tileThis += 4;
        }
        if (random(1.0) < 0.2) {
          // Draw rightwards with some probability.
          tileThis += 2;
        }
      }
      tiles[row][col] = tileThis;
    }
  }
}

function arrangeWithNoConstraints() {
  // A purely random arrangement with no constraints.
  for (var row = 0; row < tileRows; row++) {
    for (var col = 0; col < tileCols; col++) {
      var random4BitInt = floor(random(16));
      tiles[row][col] = random4BitInt;
    }
  }
}

function draw() {
  background("white");
  // noStroke();
  for (var row = 0; row < tileRows; row++) {
    for (var col = 0; col < tileCols; col++) {
      var tileId = tiles[row][col];
      var x = col * tileW;
      var y = row * tileH;
      push();
      translate(x, y);
      rect(0, 0, tileW, tileH);
      drawTile(tileId);
      pop();
    }
  }
}

function drawTile(id) {
  var R = 40;
  fill(0);
  noStroke();
  push();
  translate(tileW / 2, tileH / 2);
  ellipse(0, 0, R, R);

  if ((id & 1) > 0) {
    // draw upwards
    rect(-R / 2, 0, R, -tileH / 2);
  }
  if ((id & 2) > 0) {
    // draw rightwards
    rect(0, -R / 2, tileW / 2, R);
  }
  if ((id & 4) > 0) {
    // draw downwards
    rect(-R / 2, 0, R, tileH / 2);
  }
  if ((id & 8) > 0) {
    // draw leftwards
    rect(0, -R / 2, -tileW / 2, R);
  }
  fill(255);
  textAlign(CENTER, CENTER);
  text(id, 0, 0);
  pop();
}

function create2DArray(nrows, ncols) {
  var arr = new Array(nrows);
  for (var r = 0; r < nrows; r++) {
    arr[r] = new Array(ncols);
  }
  return arr;
}
