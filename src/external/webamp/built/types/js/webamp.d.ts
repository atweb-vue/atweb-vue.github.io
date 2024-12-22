import { Options } from "./types";
import WebampLazy, { PrivateOptions } from "./webampLazy";
export default class Webamp extends WebampLazy {
    constructor(options: Options & PrivateOptions);
}
