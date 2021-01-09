class Slingshot{

    constructor(body,point){
     
    var options={

    bodyA:body,
    pointB:point,
    stiffness:0.5,
    length:5

    }

    this.chain=Matter.Constraint.create(options)
    World.add(myworld,this.chain);
}

  fly(){
    this.chain.bodyA=null;
   }

   attach(body){
     this.chain.bodyA=body;
   }


    display(){
    if(this.chain.bodyA!=null){
    stroke("red");
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y, this.chain.pointB.x,this.chain.pointB.y)
    }
    }
}