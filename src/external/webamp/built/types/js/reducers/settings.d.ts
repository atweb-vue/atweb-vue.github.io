import { Action, Skin } from "../types";
export interface SettingsState {
    availableSkins: Array<Skin>;
}
declare const settings: (state: SettingsState | undefined, action: Action) => SettingsState;
export default settings;
