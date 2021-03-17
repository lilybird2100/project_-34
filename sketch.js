//Create variables here
var dog, happyDog, database, foodS, foodStock, database, dogImg, dogImg1, milk; 

function preload()
{
  //load images here
  dogImg = loadImage('images/dogImg2.png');
  dogImg1 = loadImage('images/dogImg1.png'); 
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20); 
  dog.addImage('dog', dogImg); 


  database = firebase.database(); 

  ReadStock = database.ref('Food');
  ReadStock.on('value', readStock);

}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here
  textSize(20);
  fill(255,255,255);
  text("Food Stock: " + foodS, 175,100);
  textSize(15);
  text("Note: press up arrow to feed milk", 150, 450); 

  /*if(keyWentDown(UP_ARROW)){
    if(foodS <= 0){
      x=0
    }else{
      foodS = foodS-1
    }
    dog.addImage('dog', dogImg1);
  }*/


  if(keyWentDown(UP_ARROW) && foodS>0){ 
    foodS = foodS-1; 
    writeStock(foodS); 
    dog.addImage('dog', dogImg1);
    if(foodS <= 0){ x=0; dog.addImage('dog', dogImg); } 
  }
 
}


function readStock(data){
    foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
