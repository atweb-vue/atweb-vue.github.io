import { Action } from "../types";
export interface NetworkState {
    connected: boolean;
}
declare const network: (state: NetworkState | undefined, action: Action) => NetworkState;
export default network;
