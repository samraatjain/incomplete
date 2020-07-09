
var dog,happyDog;
var database;
var foodS,foodStock;



function setup(){
    
 database=firebase.database();
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
   this.image=loadImage("images/Dog.png");
    foodStock =database.ref('Food');
    
    foodStock.on("value",readStock);
}

function draw(){
    background(46,139,87);
    
     if(keyDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage("images/happyDog.png")
    }
   
    drawSprites();
}

function writeStock(x,y){
    //create a function write position
    database.ref('/').update({
        Food:x
    })
    
}

function readStock(data)
{
    foodS=data.val();
}


