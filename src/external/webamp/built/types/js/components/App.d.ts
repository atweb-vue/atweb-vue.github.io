/// <reference types="react" />
import { FilePicker } from "../types";
import Media from "../media";
interface Props {
    filePickers: FilePicker[];
    media: Media;
}
/**
 * Constructs the windows to render
 */
export default function App({ media, filePickers }: Props): import("react").ReactPortal | null;
export {};
