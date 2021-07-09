var hasDocked = false;
var issObj , spaceCraft;
var iss , spacebg;
var spacecraft1 , spacecraft2 , spacecraft3 , spacecraft4;

function preload(){
  iss = loadImage("iss.png");
  spacebg = loadImage("spacebg.jpg");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800,700);
  issObj = createSprite(400,250);
  issObj.addImage(iss);
  
  spaceCraft = createSprite(400,600);
  spaceCraft.addImage(spacecraft1);
  spaceCraft.scale = 0.5;
}

function draw(){
  background(spacebg);
  if(hasDocked === false){
	  
	  spaceCraft.x = spaceCraft.x + Math.round(random(1 ,-1));
	  spaceCraft.y = spaceCraft.y + Math.round(random(1 ,-1));
	  
	  if(keyDown("UP")){
		  spaceCraft.y = spaceCraft.y - 5;
		  spaceCraft.addImage(spacecraft2);
	  }
	  if(keyDown("DOWN")){
		  spaceCraft.y = spaceCraft.y + 5;
		  spaceCraft.addImage(spacecraft1);
	  }
	  if(keyDown("LEFT")){
		  spaceCraft.x = spaceCraft.x - 5; 
		  spaceCraft.addImage(spacecraft4);
	  }
	  if(keyDown("RIGHT")){
		  spaceCraft.x = spaceCraft.x + 5; 
		  spaceCraft.addImage(spacecraft3);
	  } 
	  if(keyWentUp("UP")||keyWentUp("DOWN")||keyWentUp("RIGHT")||keyWentUp("LEFT")){
		  spaceCraft.addImage(spacecraft1);
	  }	
  
}
  
  drawSprites();
  text(mouseX + ", " + mouseY ,mouseX,mouseY)
  if(spaceCraft.x > 300 && spaceCraft.x < 350 && spaceCraft.y > 350 && spaceCraft.y < 450){
	  hasDocked = true;
	  textSize(33);
	  fill('white');
	  text("!!MISSION COMPLETE!!", 400 , 600);
  }
}








