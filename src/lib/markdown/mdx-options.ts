import type { CompileOptions, EvaluateOptions } from "@mdx-js/mdx";
import remarkMdxDisableExplicitJsx from "./remark-mdx-disable-explicit-jsx";

export const options = {
    remarkPlugins: [remarkMdxDisableExplicitJsx]
} satisfies Partial<EvaluateOptions> & CompileOptions;
