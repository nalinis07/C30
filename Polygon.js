class Polygon {

    constructor(x,y){

        //define width and height
        this.width=50;
        this.height=50;

        //give restitution, friction, density options
        var option = {
            restitution : 0.8,
            friction :1,
            density:1
        }
        
        this.image =loadImage("polygon.png");
        //body
        this.body=Bodies.rectangle(x,y,this.width,this.height, option);
        //add to world
        World.add (myWorld,this.body);

    }

    display(){

        //pos variable to control positions
        var pos=this.body.position;

        //control angle
        var angle=this.body.angle;

        push ()

        //to make it rotate
        translate (pos.x,pos.y);
        angleMode(RADIANS);
        rotate (angle);

        //image display
        imageMode (CENTER);
        image (this.image,0,0, this.width, this.height);

        pop ()

    }


}