import * as w4 from "./lib/wasm4";
import { InputHandler } from "./lib/w4lib/gamepad"

// i modified the starter template a bit.

let rectX: i8
let rectY: i8

let input: InputHandler

export function start(): void {
    rectX = 10
    rectY = 10
    input = new InputHandler();
}

export function update (): void {
    if (input.buttonHeld(w4.BUTTON_DOWN)) {
        rectY+=1;
    } else if (input.buttonHeld(w4.BUTTON_UP)) {
        rectY-=1
    }
    if (input.buttonHeld(w4.BUTTON_LEFT)) {
        rectX-=1;
    } else if (input.buttonHeld(w4.BUTTON_RIGHT)) {
        rectX+=1
    }
    w4.rect(rectX, rectY, 32, 32);
}