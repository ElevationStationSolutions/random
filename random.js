var namespace = "http://www.w3.org/2000/svg"
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createOther() {
    var x = Math.random()
    if(x < 0.2){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"yellow",1)
        makeText("Si",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("14",117,26,5,"Sansita","white",1)
        makeText("SILICON",85,60,10,"Sansita","black",1)
        makeText("28.085",89,68,7,"Sansita","black",1)
        makeText("*SILICON IS FOUND IN COMPUTERS AND IN SOME WOMENS' BREASTS!",5,90,8,"VT323",1)
    }else if(x < 0.4){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"yellow",1)
        makeText("As",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("33",117,26,5,"Sansita","white",1)
        makeText("Arsenic",85,60,10,"Sansita","black",1)
        makeText("74.921",89,68,7,"Sansita","black",1)
        makeText("*ARESENIC IS USED IN BUG SPRAY!",5,90,10,"VT323",1)
    }else if(x < 0.6){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"yellow",1)
        makeText("Sb",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("51",117,26,5,"Sansita","white",1)
        makeText("ANTIMONY",85,60,10,"Sansita","black",1)
        makeText("121.76",89,68,7,"Sansita","black",1)
        makeText("*ANTIMONY MEANS NOT ALONE... I WISH I WAS ANTIMONY :(",5,90,8,"VT323",1)
    }else if(x < 0.8){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Fe",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("26",117,26,5,"Sansita","white",1)
        makeText("IRON",90,60,10,"Sansita","black",1)
        makeText("55.845",89,68,7,"Sansita","black",1)
        makeText("*IRON IS THE MOST STABLE ELEMENT OF THE TABLE",5,90,10,"VT323",1)
    }else{
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Fe",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("26",117,26,5,"Sansita","white",1)
        makeText("IRON",90,60,10,"Sansita","black",1)
        makeText("55.845",89,68,7,"Sansita","black",1)
        makeText("*IRON IS THE MOST STABLE ELEMENT OF THE TABLE",5,90,10,"VT323",1)
    }
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createMetal() {
    var y = Math.random()
    if(y < 0.1){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Fe",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("26",117,26,5,"Sansita","white",1)
        makeText("IRON",90,60,10,"Sansita","black",1)
        makeText("55.845",89,68,7,"Sansita","black",1)
        makeText("*IRON IS THE MOST STABLE ELEMENT OF THE TABLE",5,90,10,"VT323",1)
    }else if(y < 0.2){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Au",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("79",117,26,5,"Sansita","white",1)
        makeText("GOLD",90,60,10,"Sansita","black",1)
        makeText("196.96",89,68,7,"Sansita","black",1)
        makeText("*GOLD ONLY HAS ONE NATURALLY OCCURING ISOTOPE!",5,90,10,"VT323",1)
    }else if(y < 0.3){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Na",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("11",117,26,5,"Sansita","white",1)
        makeText("SODIUM",85,60,10,"Sansita","black",1)
        makeText("22.989",89,68,7,"Sansita","black",1)
        makeText("*SODIUM ISN'T JUST SALT. IT IS ALSO USED IN NUCLEAR REACTORS! ",5,90,8,"VT323",1)
    }else if(y < 0.4){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Al",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("13",117,26,5,"Sansita","white",1)
        makeText("Aluminum",80,60,10,"Sansita","black",1)
        makeText("26.981",89,68,7,"Sansita","black",1)
        makeText("*Pure aluminum doesn't occur in nature!",5,90,10,"VT323",1)
    }else if(y < 0.5){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Hg",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("80",117,26,5,"Sansita","white",1)
        makeText("MERCURY",85,60,5,"Sansita","black",1)
        makeText("200.59",89,68,7,"Sansita","black",1)
        makeText("*FISH CONTAIN SMALL AMOUNTS OF MERCURY!",5,90,10,"VT323",1)
    }else if(y < 0.6){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Li",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("3",117,26,5,"Sansita","white",1)
        makeText("Lithium",85,60,10,"Sansita","black",1)
        makeText("6.94",89,68,7,"Sansita","black",1)
        makeText("*THE BATTERY IN YOUR PHONE HAS LITHIUM IN IT!",5,90,10,"VT323",1)
    }else if(y < 0.7){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Os",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("6",117,26,5,"Sansita","white",1)
        makeText("Osmium",85,60,10,"Sansita","black",1)
        makeText("190.23",89,68,7,"Sansita","black",1)
        makeText("*OSMIUM IS SOMETIMES FOUND IN PEN TIPS!",5,90,10,"VT323",1)
    }else if(y < 0.8){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Ho",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("67",117,26,5,"Sansita","white",1)
        makeText("Holmium",85,60,10,"Sansita","black",1)
        makeText("164.93",89,68,7,"Sansita","black",1)
        makeText("*HOLMIUM HAS NO COMMERCIAL USES :(",5,90,10,"VT323",1)
    }else if(y < 0.9){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("K",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("19",117,26,5,"Sansita","white",1)
        makeText("POTASSIUM",80,60,10,"Sansita","black",1)
        makeText("39.098",89,68,7,"Sansita","black",1)
        makeText("*AVOCADOS HAVE MORE POTASSIUM THAN BANANAS!",5,90,10,"VT323",1)
    }else{
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightgreen",1)
        makeText("Ca",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("20",117,26,5,"Sansita","white",1)
        makeText("Calcium",85,60,10,"Sansita","black",1)
        makeText("40.078",89,68,7,"Sansita","black",1)
        makeText("*CALCIUM REACTS WITH WATER TO PRODUCE HYDROGEN!",5,90,10,"VT323",1)
    }
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createNonMetal() {
    var z = Math.random()
    if(z < 0.2){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightblue",1)
        makeText("He",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("2",117,26,5,"Sansita","white",1)
        makeText("Helium",85,60,10,"Sansita","black",1)
        makeText("4.0026",89,68,7,"Sansita","black",1)
        makeText("*INHALING A SMALL AMOUNT OF HELIUM MAKES YOU SOUND FUNNY! ",5,90,8,"VT323",1)
    }else if(z < 0.4){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightblue",1)
        makeText("O",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("8",117,26,5,"Sansita","white",1)
        makeText("Oxygen",85,60,10,"Sansita","black",1)
        makeText("15.999",89,68,7,"Sansita","black",1)
        makeText("*AIR IS ONLY 21% OXYGEN! PURE OXYGEN IS BAD NEWS... ",5,90,10,"VT323",1)
    }else if(z < 0.6){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightblue",1)
        makeText("N",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("7",117,26,5,"Sansita","white",1)
        makeText("Nitrogen",85,60,10,"Sansita","black",1)
        makeText("14.006",89,68,7,"Sansita","black",1)
        makeText("*THE AIR IN YOUR CHIP BAG IS ACTUALLY NITROGEN THAT KEEPS CHIPS FROM GETTING STALE! ",5,90,5,"VT323",1)
    }else if(z < 0.8){
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightblue",1)
        makeText("Cl",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("17",117,26,5,"Sansita","white",1)
        makeText("Chlorine",85,60,10,"Sansita","black",1)
        makeText("35.453",89,68,7,"Sansita","black",1)
        makeText("*Chlorine is in salt, swimming pools, and even the water you drink; but too much can kill you!",5,90,5,"VT323",1)
    }else{
        makeRect(0,0,200,100,"darkgray",1)
        makeRect(70,15,60,60,"gray",1)
        makeRect(75,20,50,50,"lightblue",1)
        makeText("Fl",82,50,40,"Sansita","black",1)
        makeCircle(120,25,4,4,"black",1)
        makeText("9",117,26,5,"Sansita","white",1)
        makeText("Flourine",85,60,10,"Sansita","black",1)
        makeText("18.998",89,68,7,"Sansita","black",1)
        makeText("*FLOURINE REACTS VIOLENTLY TO EVERYTHING (LIKE SOME KIDS AT THIS SCHOOL)! ",5,90,6,"VT323",1)
    }
}
function createRandomScene() {
    var n = Math.random()
    if(n < 0.33){
        createMetal()
    }else if(n < 0.67){
        createNonMetal()
    }else{
        createOther()
    }
}
//TEST AREA:
//CORE FUNCTIONS:
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}