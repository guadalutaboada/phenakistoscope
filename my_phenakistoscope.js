function setup_pScope(pScope) {
  //pScope.output_mode(ANIMATED_DISK);
  // pScope.output_mode(OUTPUT_PRINT(A4));
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(false);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(12);
  pScope.load_image_sequence("fox", "png", 12);
  pScope.load_image_sequence("moon", "png", 12);
}

function setup_layers(pScope) {

  var background = new PLayer(backgroundColor);
  background.mode(RING);
  background.set_boundary(0, 950);

  var backgroundDetail = new PLayer(detail);
  backgroundDetail.mode(SWIRL(8));
  backgroundDetail.set_boundary(400, 600);

  var cloudSky = new PLayer(cloud);
  cloudSky.mode(RING);
  cloudSky.set_boundary(0, 1000);


  var moonSequence = new PLayer(moon);
  moonSequence.mode(RING);
  moonSequence.set_boundary(0, 1000);

  var starMove = new PLayer(star);
  starMove.mode(RING);
  starMove.set_boundary(900, 1000);

  var foxSequence = new PLayer(fox);
  foxSequence.mode(RING);
  foxSequence.set_boundary(0, 1000);

  var skySnow = new PLayer(snow);
  skySnow.mode(SWIRL(4));
  skySnow.set_boundary(120, 500)

  var flowerCenter = new PLayer(flower);
  flowerCenter.mode(SWIRL(4));
  flowerCenter.set_boundary(100, 500);

}

function snow(x, y, animation, pScope) {
  var snow = 10 * animation.wave;
  fill(244, snow);
  noStroke();
  ellipse(-50, -100, 15, 15);
  ellipse(0, 50, 10, 10);
  ellipse(60, 0, 10, 10);
  ellipse(-10, -250, 5, 5);
  ellipse(50, -150, 5, 5);

}

function flower(x, y, animation, pScope) {
  var opacity = 200 * (animation.wave(1) * 2)
  scale(0.6);
  rotate(190 * animation.frame);
  beginShape();
  noStroke();
  fill(244, opacity);
  vertex(50, 2);
  vertex(64, 32);
  vertex(97, 36);
  vertex(73, 60);
  vertex(80, 92);
  vertex(50, 76);
  vertex(22, 92);
  vertex(28, 60);
  vertex(4, 37);
  vertex(37, 32);
  endShape();
}

function backgroundColor(x, y, animation, pScope) {
  push();
  noStroke();
  fill(51, 107, 115, 255);
  ellipse(x, y, 2000);
  pop();

  push();
  noStroke();
  fill(0, 70, 80, 255);
  ellipse(x, y, 1800);
  pop();

  push();
  noStroke();
  fill(0, 56, 64, 255);
  ellipse(x, y, 1600);
  pop();

  push();
  noStroke();
  fill(0, 45, 51, 255);
  ellipse(x, y, 1400);
  pop();

  push();
  noStroke();
  fill(0, 36, 41, 255);
  ellipse(x, y, 1200);
  pop();

  push();
  noStroke();
  fill(0, 29, 33, 255);
  ellipse(x, y, 1000);
  pop();

  push();
  noStroke();
  fill(0, 23, 26, 255);
  ellipse(x, y, 800);
  pop();

  push();
  noStroke();
  fill(0, 18, 21, 255);
  ellipse(x, y, 600);
  pop();
}

function fox(x, y, animation, pScope) {
  translate(x, y - 850);
  rotate(-180);
  scale(1.5);
  pScope.draw_image_from_sequence("fox", 0, 0, animation.frame);
}

function detail(x, y, animation, pScope) {
  noFill(242, 201, 54);
  stroke(244, 244, 244);
  ellipse(x, y, 800);
}

function moon(x, y, animation, pScope) {
  noFill();
  stroke(244);
  translate(x, y - 550);
  scale(1.7);
  pScope.draw_image_from_sequence("moon", 0, 0, animation.frame);
}

function cloud(x, y, animation, pScope) {

  var y = animation.wave(1) * 10
  var x = animation.wave(1) * 50
  fill(244, 244, 244, 244);
  noStroke();
  translate(250, y - 690);
  rotate(-180);
  scale(2);
  beginShape();
  curveVertex(148, 332);
  curveVertex(200, 156);
  curveVertex(168, 112);
  curveVertex(126, 130);
  curveVertex(126, 175);
  curveVertex(163, 176);
  endShape();

  beginShape();
  translate(120, y - 690);
  rotate(-170);
  curveVertex(171, 211);
  curveVertex(155, 127);
  curveVertex(117, 105);
  curveVertex(73, 122);
  curveVertex(65, 166);
  curveVertex(130, 237);
  endShape();

  beginShape();
  translate(10, y - 530);
  rotate(-180);
  scale(2);
  curveVertex(148, 332);
  curveVertex(200, 156);
  curveVertex(168, 112);
  curveVertex(126, 130);
  curveVertex(126, 175);
  curveVertex(163, 176);
  endShape();

  beginShape();
  translate(-45, y - 110);
  rotate(-290);
  scale(1.3);
  curveVertex(101, 211);
  curveVertex(155, 127);
  curveVertex(117, 105);
  curveVertex(73, 122);
  curveVertex(65, 166);
  curveVertex(130, 237);
  endShape();
}

function star(x, y, animation, pScope) {
  var side = 10 + (animation.frame * -500);
  push();
  translate(side, 800);
  fill(244);
  noStroke();
  scale(0.5);
  beginShape();
  vertex(50, 2);
  vertex(64, 32);
  vertex(97, 36);
  vertex(73, 60);
  vertex(80, 92);
  vertex(50, 76);
  vertex(22, 92);
  vertex(28, 60);
  vertex(4, 37);
  vertex(37, 32);
  endShape();
  pop();

  push();
  translate(side, 650);
  fill(244);
  noStroke();
  scale(0.4);
  beginShape();
  vertex(50, 2);
  vertex(64, 32);
  vertex(97, 36);
  vertex(73, 60);
  vertex(80, 92);
  vertex(50, 76);
  vertex(22, 92);
  vertex(28, 60);
  vertex(4, 37);
  vertex(37, 32);
  endShape();
  pop();

  push();
  translate(side + 200, 900);
  fill(238, 230, 200);
  noStroke();
  scale(0.3);
  beginShape();
  vertex(50, 2);
  vertex(64, 32);
  vertex(97, 36);
  vertex(73, 60);
  vertex(80, 92);
  vertex(50, 76);
  vertex(22, 92);
  vertex(28, 60);
  vertex(4, 37);
  vertex(37, 32);
  endShape();
  pop();

  push();
  translate(side + 250, 700);
  fill(238, 230, 200);
  noStroke();
  scale(0.5);
  beginShape();
  vertex(50, 2);
  vertex(64, 32);
  vertex(97, 36);
  vertex(73, 60);
  vertex(80, 92);
  vertex(50, 76);
  vertex(22, 92);
  vertex(28, 60);
  vertex(4, 37);
  vertex(37, 32);
  endShape();
  pop();
}
