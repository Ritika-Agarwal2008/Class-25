class Ground extends BaseClass{
    constructor(){
        super(width/2,380,width,20)
        Matter.Body.setStatic(this.body,true)
        
    }
    display(){
        super.display()
    }
}