import { Action, Slider } from "../types";
export interface UserInputState {
    focus: string | null;
    bandFocused: Slider | null;
    scrubPosition: number;
    userMessage: string | null;
}
export declare const userInput: (state: UserInputState | undefined, action: Action) => UserInputState;
export default userInput;
