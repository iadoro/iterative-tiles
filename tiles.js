// file for all tile patterns——holds all base and individual tile functions

function setup() {
  // change to any canvas size——tiles will scale to respective width and height
  //createCanvas(600, 600);
}

function draw() {
  //background("white");
  // change tile# to display individually
  //tile5(width / 2, height / 2, width, height);
}

// base tiles for those that are rotated (tile 0 and 15 do not have repeats——base tile and individual tile are same function, call tile#() to draw not baseTile#()

// base tile for tile # 1, 2, 4, 8
function baseTile1() {
  pg = createGraphics(width, height);
  pg.background(color2);
  pg.fill(color1);
  pg.stroke(color1);
  // pg.rect(width / 2 - width / 6, 0, (1 / 3) * width, height / 2);
  pg.curve(
    (5 / 3) * width,
    (-10 / 3) * height,
    width / 2 - width / 6,
    0,
    width / 2 + width / 6,
    0,
    (1 / 6) * width,
    (-10 / 3) * height
  );
  pg.ellipse(width / 2, height / 2 + height / 6, (1 / 3) * width);
  return pg;
}

// base tile for tile # 3, 6, 9, 12
function baseTile3() {
  pg = createGraphics(width, height);
  pg.background(color2);
  pg.fill(color1);
  pg.stroke(color1);
  pg.triangle(
    width / 2 - width / 6,
    0,
    width,
    height / 2 + height / 6,
    width,
    0
  );
  pg.curve(
    (10 / 3) * width,
    (-5 / 3) * height,
    width / 2 - width / 6,
    0,
    width,
    height / 2 + height / 6,
    (10 / 3) * width,
    (5 / 3) * height
  ); // make neg also cool
  pg.fill(color2);
  pg.stroke(color2);
  pg.triangle(
    width / 2 + width / 6,
    0,
    width,
    height / 2 - height / 6,
    width,
    0
  );
  pg.stroke(color1);
  pg.curve(
    (5 / 3) * width,
    (-11 / 6) * height,
    width / 2 + width / 6,
    0,
    width,
    height / 2 - height / 6,
    (5 / 2) * width,
    (5 / 3) * height
  );
  return pg;
}

// base tile for tile # 5, 10
function baseTile5() {
  pg = createGraphics(width, height);
  pg.background(color2);
  pg.fill(color1);
  pg.stroke(color1);
  pg.rect(width / 2 - width / 6, 0, (1 / 3) * width, height);
  pg.fill(color2);
  pg.stroke(color2);
  pg.curve(
    width / 2 - width / 6,
    0,
    width / 2 - width / 6,
    0,
    width / 2 - width / 6,
    height,
    -width,
    height
  );
  pg.rect(0, 0, width / 2 - width / 6, height);
  pg.fill(color1);
  pg.stroke(color1);
  pg.curve(
    width / 2,
    0,
    width / 2 + width / 6,
    0,
    width / 2 + width / 6,
    height,
    (-4 / 3) * width,
    height
  );
  pg.fill(color2);
  pg.stroke(color2);
  pg.ellipse(
    (2 / 3) * width,
    (2 / 3) * height,
    (1 / 12) * width,
    (1 / 6) * height
  );
  return pg;
}

// base tile for tile # 7, 11, 13, 14
function baseTile7() {
  pg = createGraphics(width, height);
  pg.background(color2);
  pg.fill(color1);
  pg.stroke(color1);
  pg.rect(width / 2 - width / 6, 0, (1 / 3) * width, height);
  pg.rect(
    width / 2,
    height / 2 - height / 6,
    (1 / 2) * width,
    (1 / 3) * height
  );
  pg.curve(
    (2 / 3) * width,
    0,
    width / 2 - width / 6,
    0,
    width / 2 - width / 6,
    height,
    (5 / 3) * width,
    height
  );
  pg.fill(color2);
  pg.stroke(color2);
  pg.curve(
    5 * width,
    -2 * height,
    width / 2 + width / 6,
    0,
    width,
    height / 2 - height / 6,
    (5 / 3) * width,
    (-5 / 3) * height
  );
  pg.curve(
    (5 / 3) * width,
    (5 / 3) * height,
    width / 2 + width / 6,
    height,
    width,
    height / 2 + height / 6,
    5 * width,
    (5 / 3) * height
  );
  pg.fill(color1);
  pg.stroke(color1);
  // pg.ellipse(
  //   (2 / 3) * width,
  //   (1 / 4) * height,
  //   (1 / 3) * width,
  //   (1 / 4) * height
  // );
  return pg;
}

// individual tiles 0-15
function tile0(x, y, sx, sy) {
  imageMode(CENTER);
  pg = createGraphics(width, height);
  pg.background(color2);
  pg.fill(color1);
  pg.stroke(color1);
  // pg.ellipse(width / 2, height / 2, 300);
  pg.curve(
    -(2 / 3) * width,
    (12 / 3) * height,
    width / 2,
    height / 2,
    width / 2,
    height / 2,
    7 * width,
    1 * height
  );
  pg.curve(
    -(1 / 3) * width - width / 2,
    (20 / 3) * height - height / 2,
    width / 2,
    height / 2,
    width / 2,
    height / 2,
    -4 * width - width / 2,
    -1 * height - height / 2
  );
  pg.curve(
    -(5 / 2) * width - width / 2,
    -(10 / 3) * height - height / 2,
    width / 2,
    height / 2,
    width / 2,
    height / 2,
    -3 * width - width / 2,
    1 * height - height / 2
  );
  // pg.curve(
  //   6 * width - width / 2,
  //   2 * height - height / 2,
  //   width / 2,
  //   height / 2,
  //   width / 2,
  //   height / 2,
  //   (1 / 3) * width - width / 2,
  //   -(10 / 3) * height - height / 2
  // );
  pg.curve(
    -2 * width - width / 2,
    -2 * height - height / 2,
    width / 2,
    height / 2,
    width / 2,
    height / 2,
    (1 / 3) * width - width / 2,
    -(10 / 3) * height - height / 2
  );
  pg.curve(
    7 * width - width / 2,
    1 * height - height / 2,
    width / 2,
    height / 2,
    width / 2,
    height / 2,
    -(1 / 3) * width - width / 2,
    -(10 / 3) * height - height / 2
  );
  image(pg, x, y, sx, sy);
}

function tile1(x, y, sx, sy) {
  imageMode(CENTER);
  image(baseTile1(), x, y, sx, sy);
}

function tile2(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI / 2);
  image(baseTile1(), 0, 0, sx, sy);
  pop();
}

function tile3(x, y, sx, sy) {
  imageMode(CENTER);
  image(baseTile3(), x, y, sx, sy);
}

function tile4(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI);
  image(baseTile1(), 0, 0, sx, sy);
  pop();
}

function tile5(x, y, sx, sy) {
  imageMode(CENTER);
  image(baseTile5(), x, y, sx, sy);
}

function tile6(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI / 2);
  image(baseTile3(), 0, 0, sx, sy);
  pop();
}

function tile7(x, y, sx, sy) {
  imageMode(CENTER);
  image(baseTile7(), x, y, sx, sy);
}

function tile8(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate((3 * PI) / 2);
  image(baseTile1(), 0, 0, sx, sy);
  pop();
}

function tile9(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI);
  image(baseTile3(), 0, 0, sx, sy);
  pop();
}

function tile10(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI / 2);
  image(baseTile5(), 0, 0, sx, sy);
  pop();
}

function tile11(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI / 2);
  image(baseTile7(), 0, 0, sx, sy);
  pop();
}

function tile12(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate((3 * PI) / 2);
  image(baseTile3(), 0, 0, sx, sy);
  pop();
}

function tile13(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(PI);
  image(baseTile7(), 0, 0, sx, sy);
  pop();
}

function tile14(x, y, sx, sy) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate((3 * PI) / 2);
  image(baseTile7(), 0, 0, sx, sy);
  pop();
}

function tile15(x, y, sx, sy) {
  imageMode(CENTER);
  pg = createGraphics(width, height);
  // pg.background(color2);
  pg.background(color1);
  pg.fill(color2);
  pg.stroke(color2);
  pg.curve(
    (-2 / 3) * width,
    (-5 / 3) * height,
    width / 2 - width / 6,
    0,
    0,
    height / 2 - height / 6,
    (-5 / 3) * width,
    (-5 / 3) * height
  );
  pg.curve(
    (4 / 3) * width,
    (-10 / 3) * width,
    width / 2 + width / 6,
    0,
    width,
    height / 2 - height / 6,
    (10 / 3) * width,
    (-5 / 3) * width
  );
  pg.curve(
    (10 / 3) * width,
    height,
    width,
    height / 2 + height / 6,
    width / 2 + width / 6,
    height,
    2 * width,
    (5 / 3) * height
  );
  pg.curve(
    width / 2 + width / 6,
    (5 / 2) * height,
    0,
    height / 2 + height / 6,
    width / 2 - width / 6,
    height,
    (-5 / 3) * width,
    (5 / 3) * width
  );
  pg.stroke(color2);
  pg.triangle(
    width / 2 + width / 6,
    height,
    width,
    height / 2 + height / 6,
    width,
    height
  );
  pg.triangle(
    width / 2 + width / 6,
    0,
    width,
    height / 2 - height / 6,
    width,
    0
  );
  pg.triangle(0, 0, 0, height / 2 - height / 6, width / 2 - width / 6, 0);
  pg.triangle(
    0,
    height / 2 + height / 6,
    width / 2 - width / 6,
    height,
    0,
    height
  );
  pg.fill(color1);
  pg.stroke(color1);
  pg.rotate(6);
  pg.ellipse(
    (1 / 6) * width,
    (1 / 2) * height,
    (1 / 6) * width,
    (1 / 2) * height
  );
  image(pg, x, y, sx, sy);
  return pg;
}
