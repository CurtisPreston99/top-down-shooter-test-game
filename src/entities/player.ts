import { EngineObject, keyDirection, mouseIsDown, vec2, Vector2 } from "littlejsengine";
import { bullet } from "./bullet";



export class player extends EngineObject{
    
    movementModifyer = 4;
    deceleration = 2/3;

    constructor(){
        super();
        this.size = new Vector2(1,1);
    }


    override update(): void {
        const moveInput = keyDirection();
        console.log(moveInput);

        if(Math.abs(moveInput.x)>0.2){
            this.velocity.x += moveInput.x/this.movementModifyer;
        }else{
            this.velocity.x = this.velocity.x * this.deceleration;
        }

        if(Math.abs(moveInput.y)>0.2){
            this.velocity.y += moveInput.y/this.movementModifyer;
        }else{
            this.velocity.y = this.velocity.y * this.deceleration;
        }


        super.update();
    }
}