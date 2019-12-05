var flying=100

//The setup function only happens once
function setup() {
	createCanvas(1400, 1155);
	background(0,0,255);
	 //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
fill(0,255,0); //fill(0,255,0) //fill(100,149,237)
ellipse(mouseX,mouseY,flying,flying);
fill(100,149,237); //fill(255,240,245)
stroke(0,191,255); //stroke(64,224,208) //stroke(0,0,255)
textSize(40);
textFont("broadway");
text("Aloha Beautiful",500,600);

  }

function mousePressed(){
flying=flying-10;
2(flying-10)=flying+10;


}
//3(flying-10)=flying+20;//flying+50;//ellipse(500,20)=(20,40);



