import * as w4 from "../lib/wasm4";
import { InputHandler } from "../lib/w4lib/gamepad"

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
    w4.rect(rectX, rectY, 32, 32);
}