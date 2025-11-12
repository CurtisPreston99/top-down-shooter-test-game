import { EngineObject, vec2, Vector2 } from "littlejsengine";



export class bullet extends EngineObject{
    speed:number;

    constructor(pos:Vector2,angle:number,speed:number){
        super(pos);
        this.size = vec2(1);
        this.angle = angle;
        this.speed = speed;
    }

    update(): void {
        this.pos.x += Math.sin(this.angle) * this.speed;
        this.pos.y += Math.cos(this.angle) * this.speed;

    }
    
}
