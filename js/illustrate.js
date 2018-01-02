var canvas = new fabric.Canvas('c', { selection: false });
var grid = 16;
var j, dot;
var tots = 10;
var ctrls = false;


var controlPanel = document.querySelector('.controlPanel');

var init = function(){

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
      //console.log(ctrls);
    });
  } else {
    return;
  }

}

init();



var controlPanel = document.querySelector('.controlPanel');

var shapes = {
  "id1": {
     "class": "curve_small_top_left",
     "path": "M104,90c-8.8,0-16,7.2-16,16",
     "hasControls": "ctrls",
     "stroke": "#FF8F00",
     "originX": "left",
     "originY": "top",
     "strokeLineCap": "round",
     "strokeWidth": "strokeWidth",
     "strokeThickness": 16,
     "fill": 0,
     "opacity": 0.7
  },
  "id2": {
     "class": "curve_small_top_right",
     "path": "M216,90c8.8,0,16,7.2,16,16",
     "hasControls": "ctrls",
     "stroke": "#FF8F00",
     "originX": "left",
     "originY": "top",
     "strokeLineCap": "round",
     "strokeWidth": "strokeWidth",
     "strokeThickness": 16,
     "fill": 0,
     "opacity": 0.7
  },
  "id3": {
     "class": "curve_small_top_right",
     "path": "M104,170c-8.8,0-16-7.2-16-16",
     "hasControls": "ctrls",
     "stroke": "#FF8F00",
     "originX": "left",
     "originY": "top",
     "strokeLineCap": "round",
     "strokeWidth": "strokeWidth",
     "strokeThickness": 16,
     "fill": 0,
     "opacity": 0.7
  },
  "id4": {
     "class": "curve_small_top_right",
     "path": "M224,166c8.8,0,16-7.2,16-16",
     "hasControls": "ctrls",
     "stroke": "#FF8F00",
     "originX": "left",
     "originY": "top",
     "strokeLineCap": "round",
     "strokeWidth": "strokeWidth",
     "strokeThickness": 16,
     "fill": 0,
     "opacity": 0.7
  },
  "id5": {
     "class": "curve_small_top_right",
     "path": "M222,178c-17.7,0-32,14.3-32,32",
     "hasControls": "ctrls",
     "stroke": "#FF8F00",
     "originX": "left",
     "originY": "top",
     "strokeLineCap": "round",
     "strokeWidth": "strokeWidth",
     "strokeThickness": 16,
     "fill": 0,
     "opacity": 0.7
  },
  "id6": {
     "class": "curve_medium_top_right",
     "path": "M238,178c17.7,0,32,14.3,32,32",
     "hasControls": "ctrls",
     "stroke": "#FF8F00",
     "originX": "left",
     "originY": "top",
     "strokeLineCap": "round",
     "strokeWidth": "strokeWidth",
     "strokeThickness": 16,
     "fill": 0,
     "opacity": 0.7
  },
  "id7": {
     "class": "curve_medium_bottom_left",
     "path": "M222,258c-17.7,0-32-14.3-32-32",
     "hasControls": "ctrls",
     "stroke": "#FF8F00",
     "originX": "left",
     "originY": "top",
     "strokeLineCap": "round",
     "strokeWidth": "strokeWidth",
     "strokeThickness": 16,
     "fill": 0,
     "opacity": 0.7
  }

}




for (var curve in shapes){
  if(shapes.hasOwnProperty(curve)){
    curvevalues = shapes[curve];
    var butt =  document.createElement('button');
    butt.setAttribute('data-id',[curve]);
    butt.innerHTML = shapes[curve].class;
    var k = [curve];
    controlPanel.parentNode.insertBefore(butt, controlPanel.nextSibling);
    var thisClass = shapes[curve].class;
    var thisParameter = shapes[curve];

  }
  butt.addEventListener('click', function(){
    var thisId = this.getAttribute('data-id');
    var thisClass = shapes[thisId].class;
    var thisParameter = shapes[thisId];
    thisClass  = new fabric.Path("''" + shapes[thisId].path + "''");

    thisClass.set({
      left: centerWidth,
      top: centerHeight,
      hasControls : ctrls,
      stroke : thisParameter.stroke,
      originX: thisParameter.originX,
      originY: thisParameter.originY,
      strokeLineCap : thisParameter.strokeLineCap,
      strokeWidth : thisParameter.strokeThickness,
      fill : 0,
      opacity : thisParameter.opacity
    });

    //console.log(thisParameter.left);
    canvas.add(thisClass);

  });
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


// create grid
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var centerWidth = canvasWidth/2;
var centerHeight = canvasHeight/2;
for (var i = 0; i < (canvasWidth / grid); i++) {
  canvas.add(new fabric.Line([ i * grid, 0, i * grid, canvasWidth], { stroke: '#ccc', selectable: false }));
  canvas.add(new fabric.Line([ 0, i * grid, canvasWidth, i * grid], { stroke: '#ccc', selectable: false }));
}


// snap to grid

canvas.on('object:moving', function(options) {
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
});
