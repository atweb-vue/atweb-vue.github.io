import Media from "./media";
import { MiddlewareStore, Action, Dispatch } from "./types";
declare const _default: (media: Media) => (store: MiddlewareStore) => (next: Dispatch) => (action: Action) => Action;
export default _default;
