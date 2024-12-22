/// <reference types="react/experimental" />
import { DetailedHTMLProps, HTMLAttributes } from "react";
interface DetailedHTMLPropsAndMore extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    requireClicksOriginateLocally?: boolean;
}
type Props = DetailedHTMLPropsAndMore;
/**
 * Renders a `div` with an `.winamp-active` class if the element is being clicked/tapped.
 *
 * For now this mimicks the behavior of `:active`, but in the future we will use
 * this component to mimic Winamp's behavior, which is quite different than
 * `:active`.
 *
 * https://html.spec.whatwg.org/multipage/semantics-other.html#selector-active
 *
 * > An element is said to be being actively pointed at while the user indicates
 * > the element using a pointing device while that pointing device is in the
 * > "down" state (e.g. for a mouse, between the time the mouse button is pressed
 * > and the time it is depressed; for a finger in a multitouch environment, while
 * > the finger is touching the display surface).
 */
export default function WinampButton({ requireClicksOriginateLocally, onPointerDown: originalOnPointerDown, className, ...htmlProps }: Props): JSX.Element;
export {};
