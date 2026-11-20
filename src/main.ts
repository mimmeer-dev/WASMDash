import * as w4 from "./wasm4lib/wasm4";
import { InputHandler } from "./wasm4lib/gamepad"

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
        w4.trace("button wanted")
    }
    else {
        w4.trace("fail")
    }
    w4.rect(rectX, rectY, 32, 32);
}