class Ground{
    constructor(x,y,w,h){
        var groundoptions={
            isStatic:true
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,groundoptions)
        this.w= w
        this.h= h
        World.add(world,this.body)
        
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        
    }
}