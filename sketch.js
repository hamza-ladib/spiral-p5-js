
let canvas;
let width=500;
let height=500;
let coords;
let allPoints=[];
let order=["up","right","down","left"];
let currentOrder;
let length=1;
let moves;
let spacing=15;
let pointr=5;
let first=true;
let lengthOfSpiral;
let counting=0;

function setup() {
      lengthOfSpiral= Number(prompt(" enter length of the spiral (a number between 1 and 200)"));
      console.log(lengthOfSpiral)
    /**** setting up the canvas * */
   canvas= createCanvas(width,height);
   canvas.id("cnv");
   /******* ******/
   coords=createVector(width/2,height/2);
   moves=createVector(0,0);
   allPoints.push(coords);
   currentOrder=order[0];

  }
  function draw() {
    background("#29B6F6");
   
 /******* adding points every time***** */
 switch (currentOrder) {
    case order[0]:
        moves.x=0;
        moves.y=-spacing;
        break;
    case order[1]:
        moves.x=spacing;
        moves.y=0;
        break;
    case order[2]:
        moves.x=0;
        moves.y=spacing;
        break;
    case order[3]:
        moves.x=-spacing;
        moves.y=0;
        break;
 }
 if(counting==length){
    counting=0;
    currentOrder=order[(order.indexOf(currentOrder)+1)%order.length];
    if(currentOrder==order[0] || currentOrder== order[order.length-2]){
    length++;
    }
 }
 else {
    allPoints.push(new p5.Vector(allPoints[allPoints.length-1].x+moves.x,allPoints[allPoints.length-1].y+moves.y))
     counting++;
 }
 

 /*************** */ 
for (let index = 0; index < allPoints.length-1 ; index++) { 
strokeWeight(pointr);
stroke("white");
    line (allPoints[index].x,allPoints[index].y,allPoints[index+1].x,allPoints[index+1].y);
strokeWeight(5);
stroke("tomato");
point(allPoints[index].x,allPoints[index].y);
  
}
if(length==lengthOfSpiral) noLoop();
  } 
  