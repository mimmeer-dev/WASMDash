// some code from wasm4.ts to made this work on it's own
// well just joking
import * as w4 from "./wasm4"

// Memory Addreses
const gamePadAddresses: usize[] = [
    0x16,
    0x17,
    0x18,
    0x19
]

class InputHandler {
    public gamePadAddress: usize;
    private gamePadValue: u8;

    constructor(gamepad: u8=0)
    {
        this.gamePadAddress = gamePadAddresses[gamepad];
        this.gamePadValue = 0
    }

    updateGamepadAssignment(gamepad: u8=0)
    {
        this.gamePadAddress = gamePadAddresses[gamepad];
    }

    buttonPressed(button: u8=w4.BUTTON_1): bool
    {
        this.gamePadValue = load<u8>(this.gamePadAddress);
        return this.gamePadValue & button
    }
}