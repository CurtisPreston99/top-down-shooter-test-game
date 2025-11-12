import { EngineObject, mouseDelta, mouseIsDown, mousePos, TileInfo, vec2 } from "littlejsengine";
import { player } from "./player";
import { bullet } from "./bullet";



export class playerTorch extends EngineObject{
    player:player;
    constructor(p:player ){
        super();
        this.size = vec2(30)
        // this.drawSize = vec2(30);
        this.tileInfo = new TileInfo(vec2(0,0),vec2(1024,1024));
        this.player = p;
    }


    update(){
        this.pos = this.player.pos;
        let mouse = mousePos;

        
        this.angle = Math.atan2(this.pos.x - mouse.x, this.pos.y - mouse.y) + Math.PI;
        console.log(this.angle);

        if(mouseIsDown(0)){
            console.log("aa")
            new bullet(vec2(this.pos.x,this.pos.y),this.angle,0.5);
        }
        // this.angle = this.pos - mousePos;
    }
}