class Slingshot {

    constructor (BodyX,PointY){

        var options = {
            bodyA : BodyX,
            pointB : PointY,
            stiffness : 0.05,
            length : 10
        }

        //this.pointB = pointY;
        this.slingshot=Constraint.create(options);

        World.add(myWorld,this.slingshot);

    }

    display(){

        //if bodyA still has a value,
        if (this.slingshot.bodyA){

            var pointA, pointB;

            pointA=this.slingshot.bodyA.position;
            pointB=this.slingshot.pointB;

            line (pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }

    //to make bird fly
    fly (){

        //make value of bodyA nothing to make bird fly
        this.slingshot.bodyA = null;

    }

    attach (body){

        //attach hex to rope
        this.slingshot.bodyA = body;

    }

}

