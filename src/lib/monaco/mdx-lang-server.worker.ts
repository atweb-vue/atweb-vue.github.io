// my-lang.worker.ts
import * as worker from 'monaco-editor/esm/vs/editor/editor.worker.js';
import type * as monaco from 'monaco-editor';
import { createSimpleWorkerLanguageService, type LanguageServiceEnvironment } from '@volar/monaco/worker';
import { createMdxLanguagePlugin, createMdxServicePlugin, resolveRemarkPlugins } from '@mdx-js/language-service';
import { URI } from 'vscode-uri';

self.onmessage = () => {
	worker.initialize((ctx: monaco.worker.IWorkerContext) => {
		const env: LanguageServiceEnvironment = {
			workspaceFolders: [URI.parse('file:///')],
		};
		return createSimpleWorkerLanguageService({
			workerContext: ctx,
			env,
			languagePlugins: [
				createMdxLanguagePlugin(),
			],
			languageServicePlugins: [
				createMdxServicePlugin({
                    applyEdit: async edit => {
                        // TODO
                    }
                }),
			],
		});
	});
};
