// Required
import vuetasticCss from "vuestic-ui/styles/essential.css?inline";
// Optional
// import typography from "vuestic-ui/styles/typography.css?inline";
import smartHelpers from  "vuestic-ui/styles/smart-helpers.css?inline";

import mdiCss from "material-design-icons-iconfont/dist/material-design-icons.min.css?inline";

const inlineCss = [
    vuetasticCss,
    // typography,
    smartHelpers,
    mdiCss,
] satisfies string[];

export const frameworkStyles = inlineCss.join('');
