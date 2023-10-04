var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

noStroke();
fill("black");
arc(140, 120, 170, 170, 180, 180);
fill("white");
arc(140, 125, 150, 150, 180, 180);
fill("black");
fill("black");
arc(260, 120, 170, 170, 180, 180);
fill("white");
arc(260, 125, 150, 150, 180, 180);
fill("black");
var color1 = randomNumber(1, 255);
var color2 = randomNumber(1, 255);
var color3 = randomNumber(1, 255);
fill(rgb(color1, color2, color3));
shape(60, 145, 100, 104, 40, 80);
shape(340, 145, 300, 105, 360, 80);
var color1 = randomNumber(1, 255);
var color2 = randomNumber(1, 255);
var color3 = randomNumber(1, 255);
fill(rgb(color1, color2, color3));
shape(65, 155, 65, 200, 20, 185);
shape(335, 155, 335, 200, 380, 185);
var color1 = randomNumber(1, 255);
var color2 = randomNumber(1, 255);
var color3 = randomNumber(1, 255);
fill(rgb(color1, color2, color3));
shape(140, 335, 120, 315, 105, 370);
shape(260, 335, 280, 315, 300, 370);
stroke("black");
var color1 = randomNumber(1, 255);
var color2 = randomNumber(1, 255);
var color3 = randomNumber(1, 255);
var eyesize = randomNumber(25, 50);
fill(rgb(color1, color2, color3));
regularPolygon(200, 200, 8, 150);
fill("black");
rect(60, 220, 100, 10);
rect(240, 220, 100, 10);
shape(160, 220, 180, 340, 210, 340);
shape(240, 220, 205, 340, 230, 340);
ellipse(200, 150, eyesize, eyesize+40);
fill("white");
ellipse(200, 150, eyesize-20, eyesize+20);
var eyesize = randomNumber(15, 50);
fill("black");
ellipse(155, 105, eyesize, eyesize);
fill("white");
ellipse(155, 105, eyesize-20, eyesize-20);
var eyesize = randomNumber(15, 50);
fill("black");
ellipse(245, 105, eyesize, eyesize);
fill("white");
ellipse(245, 105, eyesize-20, eyesize-20);
var eyesize = randomNumber(15, 50);
fill("black");
ellipse(270, 180, eyesize, eyesize);
fill("white");
ellipse(270, 180, eyesize-20, eyesize-20);
var eyesize = randomNumber(15, 50);
fill("black");
ellipse(130, 180, eyesize, eyesize);
fill("white");
ellipse(130, 180, eyesize-20, eyesize-20);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
