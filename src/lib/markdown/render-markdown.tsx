import { evaluate } from '@mdx-js/mdx';
import * as jsxRuntime from 'vue/jsx-runtime';
import type { MDXModule } from '../mdx-types';

export async function renderMarkdown(markdown: string): Promise<MDXModule> {
    const mdxModule = await evaluate(markdown, {
        ...jsxRuntime,
    });

    console.log(mdxModule);

    return mdxModule;
}
