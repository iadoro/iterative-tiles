var tileW, tileH;

// set number of cols and rows——these should be proportional to number of canvas pixels to avoid spacing and cutoff edges
var tileCols = 15;
var tileRows = 15;

// change color combo
var color1 = "#002626"; // main color
var color2 = "white"; // background color
var color3 = "#95C623"; // to make certain shapes specific color

function setup() {
  //set canvas to any size
  createCanvas(600, 600);
  // createCanvas(1008, 1584);

  background(color2);
  tileW = width / tileCols;
  tileH = height / tileRows;

  // tile1(width / 2, height / 2, width, height);
  drawTiles();
}

function mousePressed() {
  // drawTiles();
}

function arrangeWithConstraints() {
  var arr = [];
  for (let i = 0; i < tileRows; i++) {
    arr[i] = [];
    for (let j = 0; j < tileCols; j++) {
      arr[i][j] = -1;
    }
  }

  const down = new Set([4, 5, 6, 7, 9, 11, 13, 15]);
  const up = new Set([1, 3, 5, 7, 12, 13, 14, 15]);
  const left = new Set([8, 9, 10, 11, 12, 13, 14, 15]);
  const right = new Set([2, 3, 6, 7, 10, 11, 14, 15]);

  for (var row = 0; row < tileRows; row++) {
    for (var col = 0; col < tileCols; col++) {
      var tileThis = 0;

      if (row == 0 && col == 0) {
        // The top-left tile is totally random.
        tileThis = floor(Math.random() * 16);
        arr[row][col] = tileThis;
      } else {
        var possibleTiles = [0, 2, 4, 6];
        if (col == tileCols - 1) possibleTiles = [0, 4];
        if (row == tileRows - 1) possibleTiles = [0, 2];

        if (row != 0 && down.has(arr[row - 1][col])) {
          //if tile above is in down
          if (col != 0 && right.has(arr[row][col - 1])) {
            //if tile to left is in right
            possibleTiles = [12, 13, 14, 15]; // up and left
            if (col == tileCols - 1) possibleTiles = [12, 13];
            if (row == tileRows - 1) possibleTiles = [12, 14];
          } else {
            possibleTiles = [1, 3, 5, 7];
            if (col == tileCols - 1) possibleTiles = [1, 5];
            if (row == tileRows - 1) possibleTiles = [1, 3];
          }
        } else if (col != 0 && right.has(arr[row][col - 1])) {
          //if tile to left is in right
          possibleTiles = [8, 9, 10, 11];
          if (col == tileCols - 1) possibleTiles = [8, 9];
          if (row == tileRows - 1) possibleTiles = [8, 10];
        }
        var rand = floor(Math.random() * possibleTiles.length);
        tileThis = possibleTiles[rand];
        console.log(row, col, tileThis);
        arr[row][col] = tileThis;
      }
    }
  }
  return arr;
}

function drawTiles() {
  var tiles = arrangeWithConstraints();

  for (var row = 0; row < tileRows; row++) {
    for (var col = 0; col < tileCols; col++) {
      var tile = tiles[row][col];
      var x = col * tileW + tileW / 2;
      var y = row * tileH + tileH / 2;
      var sx = tileW;
      var sy = tileH;

      console.log(x, y, tile);

      if (tile == 0) {
        tile0(x, y, sx, sy);
      } else if (tile == 1) {
        tile1(x, y, sx, sy);
      } else if (tile == 2) {
        tile2(x, y, sx, sy);
      } else if (tile == 3) {
        tile3(x, y, sx, sy);
      } else if (tile == 4) {
        tile4(x, y, sx, sy);
      } else if (tile == 5) {
        tile5(x, y, sx, sy);
      } else if (tile == 6) {
        tile6(x, y, sx, sy);
      } else if (tile == 7) {
        tile7(x, y, sx, sy);
      } else if (tile == 8) {
        tile8(x, y, sx, sy);
      } else if (tile == 9) {
        tile9(x, y, sx, sy);
      } else if (tile == 10) {
        tile10(x, y, sx, sy);
      } else if (tile == 11) {
        tile11(x, y, sx, sy);
      } else if (tile == 12) {
        tile12(x, y, sx, sy);
      } else if (tile == 13) {
        tile13(x, y, sx, sy);
      } else if (tile == 14) {
        tile14(x, y, sx, sy);
      } else if (tile == 15) {
        tile15(x, y, sx, sy);
      }
    }
  }
}
