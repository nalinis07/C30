//create box class using parent base class
class Box extends baseClass {

    constructor(x,y,width,height){

        //create body for box
        super(x,y,width,height);

        this.Visibility = 255;

    }

    display(){

        //if block is hit softly,
        text (this.body.speed, 100,250);
        if (this.body.speed<3){

            //keep displaying it
            super.display();

          //if not,
        } else {

            //remove it from world
            World.remove(myWorld,this.body);

            push ();

            //reduce visibility slowly
            this.Visibility = this.Visibility-5;
            //add vanishing effect
            //tint (255,this.Visibility);
            //show vanishing rectangle
            //rect(this.body.position.x, this.body.position.y, this.width, this.height);
            
            pop ();


        }

    }

}





