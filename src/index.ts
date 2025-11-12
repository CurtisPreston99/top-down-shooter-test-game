import './app.css';
// import  * as 
import * as LJS from 'littlejsengine';
import { player } from './entities/player';
import { drawRect, rgb, vec2 } from 'littlejsengine';
import { playerTorch } from './entities/player-torch';
const { engineInit } = LJS;

const background = LJS.hsl(.6,.3,.5);

function gameInit()
{
    // LJS.canva = LJS.hsl(.6,.3,.5);

    // LJS.canvasClearColor = new LJS.Color(100,100,100)
    let p = new player();
    new playerTorch(p);
    // called once after the engine starts up
    // setup the game
}

function gameUpdate()
{
    // called every frame at 60 frames per second
    // handle input and update the game state
}

function gameUpdatePost()
{
    // called after physics and objects are updated
    // setup camera and prepare for render
}

function gameRender()
{
    drawRect(LJS.cameraPos, vec2(50), background);

    // LJS.drawTextOverlay('Hello World', LJS.vec2(0,3), 3);

    // called before objects are rendered
    // draw any background effects that appear behind objects
}

function gameRenderPost()
{
    // called after objects are rendered
    // draw effects or hud that appear above all objects
}

// startup LittleJS with your game functions after the tile image is loaded

function main(): void {
    // const button = document.querySelector("#testButton");
    // button?.addEventListener("click", testSubmitHandler);
    // LJS.
    engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost, ['assets/torch.png']);
}

// function testSubmitHandler(e: Event): void {
//     e.preventDefault();
//     const outputElement = document.querySelector('#output');
//     outputElement.textContent = 'Scripts work!';
// }

main();