

var canvas = new fabric.Canvas('c', { selection: false });
var grid = 8;
var j, dot;
var tots = 10;
var ctrls = true;
var strokeSize = 8;
var opacity = 1;

fabric.Object.prototype.set({
    snapThreshold: 45,
    snapAngle: 45,
    lockScalingX: true,
    lockScalingY: true,
    hasBorders: true,
    transparentCorners: true
});

var stroke4px = document.querySelector('.stroke-4px');
var stroke8px = document.querySelector('.stroke-8px');
var stroke16px = document.querySelector('.stroke-16px');

var opacity1 = document.querySelector('.opacity1');
var opacity05 = document.querySelector('.opacity05');



var grid4 = document.querySelector('.grid4');
var grid8 = document.querySelector('.grid8');
var grid16 = document.querySelector('.grid16');



stroke4px.addEventListener('click', function(){
  strokeSize = 4;
  grid = 4;
  console.log(strokeSize);
});
stroke8px.addEventListener('click', function(){
  strokeSize = 8;
  grid = 8;
  console.log(strokeSize);
});
stroke16px.addEventListener('click', function(){
  strokeSize = 16;
  grid = 16;
  console.log(strokeSize);
});

opacity1.addEventListener('click', function(){
  opacity = 1;
  console.log(opacity);
});

opacity05.addEventListener('click', function(){
  opacity = 0.5;
  console.log(opacity);
});




var controlPanel = document.querySelector('.controlPanel');
/*
var showControls = function(){
  if(document.querySelector('.ctrls')){
    var toggleCtrls = document.querySelector('.ctrls');
    toggleCtrls.addEventListener('click', function(){
      if(ctrls == true){
        ctrls = false;
        this.classList.add('red');
        this.classList.remove('blue');
      } else if(ctrls == false){
        ctrls = true;
        this.classList.add('blue');
        this.classList.remove('red');
      }
    });
  } else {
    return;
  }
}

showControls();
*/

var shapes = {
  "id1": {
    "fabricType" : "path",
    "shapeSize" : "S",
    "shapeType" : "circle-quart-closed",
    "class": "circle-quart-closed-small",
    "path": "M2032,1056 C2027.58172,1056 2024,1059.58172 2024,1064 L2032,1064 L2032,1056 Z",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "",
    "left": "",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id2": {
    "fabricType" : "path",
    "shapeSize" : "M",
    "shapeType" : "",
    "class": "circle-quart-closed-medium",
    "path": "M2032,992 C2023.16344,992 2016,999.163444 2016,1008 L2032,1008 L2032,992 Z",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id3": {
    "fabricType" : "path",
    "shapeSize" : "L",
    "shapeType" : "",
    "class": "circle-quart-closed-large",
    "path": "M2032,880 C2014.32689,880 2000,894.326888 2000,912 L2032,912 L2032,880 Z",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id4": {
    "fabricType" : "path",
    "shapeSize" : "S",
    "shapeType" : "circle-quart-half-closed",
    "class": "circle-quart-half-closed-small",
    "path": "M1952,88 C1947.58172,88 1944,91.581722 1944,96 L1952,96",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id5": {
    "fabricType" : "path",
    "shapeSize" : "M",
    "shapeType" : "",
    "class": "circle-quart-half-closed-medium",
    "path": "M1984,80 C1975.16344,80 1968,87.163444 1968,96 L1984,96",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id6": {
    "fabricType" : "path",
    "shapeSize" : "L",
    "shapeType" : "",
    "class": "circle-quart-half-closed-large",
    "path": "M2032,64 C2014.32689,64 2000,78.326888 2000,96 L2032,96",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id7": {
    "fabricType" : "path",
    "shapeSize" : "S",
    "shapeType" : "circle-semi-closed",
    "class": "circle-semi-closed-small",
    "path": "M2056,736 C2056,731.581722 2052.41828,728 2048,728 C2043.58172,728 2040,731.581722 2040,736 L2056,736 Z",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id8": {
    "fabricType" : "path",
    "shapeSize" : "M",
    "shapeType" : "",
    "class": "circle-semi-closed-medium",
    "path": "M2064,704 C2064,695.163444 2056.83656,688 2048,688 C2039.16344,688 2032,695.163444 2032,704 L2064,704 Z",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "",
    "cx" : "",
    "cy" : "",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  },
  "id9": {
    "fabricType" : "circle",
    "shapeSize" : "L",
    "shapeType" : "",
    "class": "circle-large",
    "path": "",
    "hasControls": "ctrls",
    "stroke": "#8BFFB2",
    "originX": "left",
    "originY": "top",
    "top": "top",
    "left": "left",
    "radius": "30",
    "cx" : "32",
    "cy" : "32",
    "strokeLineCap": "round",
    "strokeWidth": "strokeWidth",
    "strokeThickness": strokeSize,
    "fill": 0,
    "opacity": opacity
  }
}


var counter = 0;
var lineBreak =  document.createElement('br');
var imgPath = "svg/";
var tableStart = '<' + 'table' + '>';
var tableEnd = '<' + '/table' + '>';
var rowStart = "<tr>";
var rowEnd = "</tr>";
var cellStart = "<td>";
var cellEnd = "</td>";

for (var curve in shapes){
counter += 1;

  if(shapes.hasOwnProperty(curve)){
    curvevalues = shapes[curve];
    var butt =  document.createElement('button');
    butt.setAttribute('data-id',[curve]);
    butt.classList.add('curvy');
    //butt.innerHTML =[curve];
    butt.innerHTML =shapes[curve].shapeSize;
    var k = [curve];
    var shapeType = shapes[curve].shapeType;

    var breaker =  document.createElement('br');

    var shapeTypeDiv =  document.createElement('div');
        shapeTypeDiv.setAttribute('class','tag');

    var illus =  document.createElement('img');
        illus.src = "svg/" + shapeType + "-small" + ".svg";

    var shapeType = shapes[curve].shapeType;
        shapeTypeDiv.innerHTML = shapeType;

    if(shapeTypeDiv.innerHTML !== ""){
      controlPanel.appendChild(shapeTypeDiv, controlPanel);
      shapeTypeDiv.innerHTML = "<img src=" + '"' + illus.src + '"' + "/>" ;
    }

      controlPanel.appendChild(butt, controlPanel);
    if(counter % 3 == 0){
      controlPanel.appendChild(breaker, controlPanel);
    }
  }



  butt.addEventListener('click', function(){
    var thisId = this.getAttribute('data-id');
    var thisClass = shapes[thisId].class;
    var thisParameter = shapes[thisId];
    var thisFabricType = shapes[thisId].fabricType;
    console.log(thisFabricType);
    if(thisFabricType == "path"){
      thisClass  = new fabric.Path("''" + shapes[thisId].path + "''");
      thisClass.set({
        shapeSize : thisParameter.shapeSize,
        left: centerWidth - 1,
        top: centerHeight - 1,
        hasControls : ctrls,
        stroke : thisParameter.stroke,
        originX: thisParameter.originX,
        originY: thisParameter.originY,
        strokeLineCap : thisParameter.strokeLineCap,
        strokeWidth : strokeSize,
        fill : 0,
        opacity : opacity
      });
    } else if (thisFabricType == "circle"){
      thisClass  = new fabric.Circle();
      thisClass.set({
        shapeSize : thisParameter.shapeSize,
        left: centerWidth - 1,
        top: centerHeight - 1,
        hasControls : ctrls,
        stroke : thisParameter.stroke,
        originX: thisParameter.originX,
        originY: thisParameter.originY,
        radius: thisParameter.radius,
        cx : thisParameter.cx,
        cy : thisParameter.cy,
        strokeLineCap : thisParameter.strokeLineCap,
        strokeWidth : strokeSize,
        fill : 0,
        opacity : opacity
      });
    }


    //console.log(thisClass);
    canvas.add(thisClass);
  });
}









function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


var gridBuider = function(){

}
// create grid
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var centerWidth = canvasWidth/2;
var centerHeight = canvasHeight/2;

for (var i = 1; i < (canvasWidth / grid); i++) {
  canvas.add(new fabric.Line([ i * grid, 0, i * grid, canvasWidth], { stroke: '#121212', selectable: false }));
  canvas.add(new fabric.Line([ 0, i * grid, canvasWidth, i * grid], { stroke: '#121212', selectable: false }));
}


// snap to grid

canvas.on('object:moving', function(options) {
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
});

//fabric.log('Normal SVG output: ', canvas.toSVG());
// Save SVG
function do_save() {
  var filedata= canvas.toSVG(); // the SVG file is now in filedata

  var locfile = new Blob([filedata], {type: "image/svg+xml;charset=utf-8"});
  var locfilesrc = URL.createObjectURL(locfile);//mylocfile);

  var dwn = document.getElementById('dwn');
  dwn.innerHTML = "<a href=" + locfilesrc + " download='mysvg.svg'>Download your illustration</a>";
  dwn.style.padding = "0.5em";
  dwn.style.paddingBottom = "0";
  dwn.style.background = "#000";
  dwn.style.lineHeight = "1em";
}

// removing objects
var remover = document.querySelector('.remover');
remover.addEventListener('click', function(){
  canvas.remove(canvas.getActiveObject());
});
