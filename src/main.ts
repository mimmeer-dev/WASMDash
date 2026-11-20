import * as w4 from "./wasm4lib/wasm4";

// i modified the starter template a bit.

let rectX: i8
let rectY: i8

export function start(): void {
    rectX = 10
    rectY = 10
}

export function update (): void {
    w4.rect(rectX, rectY, 32, 32);
}