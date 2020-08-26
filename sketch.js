var form,patient
var bg1,bg2,bg5
var c =0
var dataBase
var count =0
function preload() {
  bg1 =loadImage("bg1.jpg")
  bg2 =loadImage("bg2.jpg")
  bg5 =loadImage("bg5.jpg")
}
function setup() {
  dataBase=firebase.database();
  createCanvas(displayWidth-20,displayHeight-20);
 form = new Form()
 patient=new Patient()
 form.display() 
}

function draw() {
 if (c===0){
   background(bg5)
 }
 if(c===1){
   background(bg1)
 }
}
