// some code from wasm4.ts to made this work on it's own

// Memory Addreses
const gamePadAddresses: usize[] = [
    0x16,
    0x17,
    0x18,
    0x19
]

// Buttons
export const BUTTON_1: u8 = 1;
export const BUTTON_2: u8 = 2;
export const BUTTON_LEFT: u8 = 16;
export const BUTTON_RIGHT: u8 = 32;
export const BUTTON_UP: u8 = 64;
export const BUTTON_DOWN: u8 = 128;

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

    buttonPressed(button: u8=BUTTON_1): bool
    {
        this.gamePadValue = load<u8>(this.gamePadAddress);
        return this.gamePadValue & button
    }
}