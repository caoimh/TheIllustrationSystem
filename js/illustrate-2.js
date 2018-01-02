var controlPanel = document.querySelector('.controlPanel');



var shapes =
{
  "id1" : {
    "class": "curve_small_top_left",
    "path": "M104,90c-8.8,0-16,7.2-16,16",
    "left": "centerWidth",
    "top": "centerHeight",
    "hasControls": "ctrls",
    "stroke": "#FF8F00",
    "originX": "left",
    "originY": "top",
    "strokeLineCap": "lineCap",
    "strokeWidth": "strokeWidth",
    "strokeThickness": "Thickness",
    "fill": 0,
    "opacity": "opacityVal"
  },
  "id2" :  {
    "class": "curve_small_top_right",
    "path": "M104,90c-8.8,0-16,7.2-16,23",
    "left": "centerWidth",
    "top": "centerHeight",
    "hasControls": "ctrls",
    "stroke": "#FF8F00",
    "originX": "left",
    "originY": "top",
    "strokeLineCap": "lineCap",
    "strokeWidth": "strokeWidth",
    "strokeThickness": "Thickness",
    "fill": 0,
    "opacity": "opacityVal"
  },
  "id3" : {
    "class": "curve_small_bottom_right",
    "path": "M104,90c-8.8,0-16,7.2-16,3",
    "left": "centerWidth",
    "top": "centerHeight",
    "hasControls": "ctrls",
    "stroke": "#FF8F00",
    "originX": "left",
    "originY": "top",
    "strokeLineCap": "lineCap",
    "strokeWidth": "strokeWidth",
    "strokeThickness": "Thickness",
    "fill": 0,
    "opacity": "opacityVal"
  }
}

//<button id="id1" data-id="id1">


for (var curve in shapes){
  if(shapes.hasOwnProperty(curve)){
    curvevalues = shapes[curve];
    var butt =  document.createElement('button');
    butt.setAttribute('data-id',[curve]);
    butt.innerHTML = [curve];
    var k = [curve];
    controlPanel.parentNode.insertBefore(butt, controlPanel.nextSibling);

  }
  butt.addEventListener('click', function(){
    var thisId = this.getAttribute('data-id');
    var thisClass = shapes[thisId].class;
    thisClass  = new fabric.Path("''" + shapes[thisId].path + "''");

    thisClass.set({left: centerWidth,top: centerHeight,hasControls : ctrls,stroke : '#FF8F00',originX: 'left',originY: 'top',strokeLineCap : lineCap,strokeWidth : strokeThickness,fill : 0,opacity : opacityVal});


    canvas.add(shapes[thisId].class);

  });
}
