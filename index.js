#!/usr/bin/env node

var fs = require('fs');

var ac = require('ansi-canvas');

var canvas = ac();
var context = canvas.getContext('2d');
var ajlogo = require('ajlogo');

context.strokeStyle = "white";
context.lineJoin = "round";
context.lineWidth = 0.2;

var xoffset = 70;
var yoffset = 70;
var canvasx = xoffset;
var canvasy = yoffset;
var canvaspen = true;

context.beginPath();
context.moveTo(canvasx, canvasy);
context.closePath();

ajlogo.Turtle.onMove(onMove);
ajlogo.Turtle.onPen(onPen);

function onMove(x, y) {
  if (!canvaspen)
  {
    canvasx = xoffset + x;
    canvasy = xoffset - y;
    return;
  }

  context.beginPath();
  context.moveTo(canvasx, canvasy);
  canvasx = xoffset + x;
  canvasy = xoffset - y;
  context.lineTo(canvasx, canvasy);
  context.closePath();
  context.stroke();
};

function onPen(pen) {
  canvaspen = pen;
};

var script = fs.readFileSync(process.argv.slice(-1)[0]).toString();

if(script.substr(0, 2) === '#!'){
  script = script.substring(script.indexOf("\n") + 1).trim();
}

ajlogo.evaluateText(script);

canvas.render();