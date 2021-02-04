const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Render = Matter.Render; 
const Constraint=Matter.Constraint;

var myEngine, myWorld ; 

var ground, stand1, stand2;
var bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9, bb10, bb11, bb12;
var pb1, pb2,pb3,pb4,pb5,pb6,pb7,pb8;
var gb1,gb2,gb3,gb4;
var hex, rope;

function setup() {
    createCanvas(1000,400);
  
    //this line of code will be CONSTANT and it is used to make the engine and world
    myEngine = Engine.create ();
    myWorld = myEngine.world;
  
    //create all ground objects
    ground=new Ground(500,395,1000,20);
    
    stand1=new Ground(480,297+15/2,315,15);
    stand2=new Ground(760,200,200,15);

    //create all blue blocks on stand 1
    bb1=new Box(375,277,35,40);
    bb2=new Box(410,277,35,40);
    bb3=new Box(445,277,35,40);
    bb4=new Box(480,277,35,40);
    bb5=new Box(515,277,35,40);
    bb6=new Box(550,277,35,40);
    bb7=new Box(585,277,35,40);
    //create all pink blocks on stand 1
    pb1=new Box(410,237,35,40);
    pb2=new Box(445,237,35,40);
    pb3=new Box(480,237,35,40);
    pb4=new Box(515,237,35,40);
    pb5=new Box(550,237,35,40);
    //create all green blocks on stand 1
    gb1=new Box(445,197,35,40);
    gb2=new Box(480,197,35,40);
    gb3=new Box(515,197,35,40);
    // yellow  block on stand1
    yb1=new Box(480,157,35,40);
    

    //on stand 2  blue block
    bb8=new Box(705,162,30,40);
    bb9=new Box(735,162,30,40);
    bb10=new Box(765,162,30,40);
    bb11=new Box(795,160,30,40);
    bb12=new Box(825,162,30,40);
    //on stand 2 pink block
    pb6=new Box(735,122,30,40);
    pb7=new Box(765,122,30,40);
    pb8=new Box(795,122,30,40);
    // green block on stand 2
    gb4=new Box(765,82,30,40);

    //create hexagon
    hex=new Polygon(100,380);

    //create rope
    rope=new Slingshot(hex.body, {x: 100, y:290} );
    var render = Render.create({
        element: document.body,
        engine: myEngine,
        options: {
          width: 1300,
          height: 600,
          wireframes: false
        }
      });
     Render.run(render);
}

function draw() {
    background("white");
    Engine.update (myEngine);

    //display everything
    ground.display();
    fill("red");
    stand1.display();
    fill("green");
    stand2.display();

    fill ("blue");
    bb1.display();
    bb2.display();
    bb3.display();
    bb4.display();
    bb5.display();
    bb6.display();
    bb7.display();

    fill ("pink");
    pb1.display();
    pb2.display();
    pb3.display();
    pb4.display();
    pb5.display();

    fill ("green");
    gb1.display();
    gb2.display();
    gb3.display();

    fill ("yellow");
    yb1.display();

    fill ("blue");
    bb8.display();
    bb9.display();
    bb10.display();
    bb11.display();
    bb12.display();

    fill ("pink"); 
    pb6.display();
    pb7.display();
    pb8.display();

    fill ("green");
    gb4.display ();

    hex.display();
    rope.display();

    fill ("white");
    text ("Drag the Hexagonal Stone and release it to knock over the blocks", 50,50);
    text("Press r key to shoot again",50,70);

}


//mouse dragged function
function mouseDragged(){

    //let mouse drag hex
    Matter.Body.setPosition(hex.body,{x : mouseX, y: mouseY});
  
}
  
  //mouse released function
  function mouseReleased(){
  
    //let bird fly
    rope.fly();
  
}

//when space key is pressed, reset hex's position
function keyPressed(){

	//Press r key to play again (this will reset hex not blocks, to reset blocks, reload)
	if (keyCode===82){

		Matter.Body.setPosition(hex.body, {x: 100, y: 380});
		rope.attach(hex.body);
		
	}

}