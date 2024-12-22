import picoCss from "@/assets/pico.scss?inline";

const inlineCss = [
    picoCss
] satisfies string[];

export const frameworkStyles = inlineCss.join('');
