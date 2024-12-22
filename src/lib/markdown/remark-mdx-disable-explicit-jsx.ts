/*!
The MIT License (MIT)

Copyright (c) 2017 Compositor, Inc. and Vercel, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root } from 'hast';

export interface Options {
    whiteList?: string[];
    blackList?: string[];
}

/*
 * Remark plugin to reenable styling of html tags with 'components' prop.
 */

const createTest = ({ whiteList, blackList }: Options = {}) => {
    if (whiteList && whiteList.length) {
        return (node: any) =>
            Boolean(node.data) &&
            Boolean(node.name) &&
            whiteList.includes(node.name);
    } else if (blackList && blackList.length) {
        return (node: any) =>
            Boolean(node.data) &&
            Boolean(node.name) &&
            !blackList.includes(node.name);
    } else {
        return (node: any) => Boolean(node.data);
    }
};

const remarkMdxDisableExplicitJsx = ((options: Options = {}) => {
    if (typeof options !== `object`) {
        throw new TypeError(`Options should be an object`);
    } else if (options.whiteList && options.blackList) {
        throw new Error(`"whiteList" and "blackList" can't be used together`);
    } else if (options.whiteList && !Array.isArray(options.whiteList)) {
        throw new TypeError(`"whiteList" value should be an array`);
    } else if (options.blackList && !Array.isArray(options.blackList)) {
        throw new TypeError(`"blackList" value should be an array`);
    }

    const test = createTest(options);

    return (root: Root) => {
        visit(root, test, function (node) {
            delete (node.data as any)!._mdxExplicitJsx;
            delete (node.data as any)!._xdmExplicitJsx;
        });
    };
}) satisfies Plugin<[Options?], Root, Root>;

export default remarkMdxDisableExplicitJsx;
