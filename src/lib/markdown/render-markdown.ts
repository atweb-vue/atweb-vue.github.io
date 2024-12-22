import { evaluate } from '@mdx-js/mdx';
import * as jsxRuntime from 'vue/jsx-runtime';
import type { MDXModule } from './mdx-types';
import { options as mdxOptions } from './mdx-options';

export async function renderMarkdown(markdown: string): Promise<MDXModule> {
    const mdxModule = await evaluate(markdown, {
        ...jsxRuntime,
        ...mdxOptions
    });

    console.log(mdxModule);

    return mdxModule;
}
