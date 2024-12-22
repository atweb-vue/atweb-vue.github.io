<script setup lang="ts">
import type { editor } from 'monaco-editor';
import { onBeforeUnmount, onMounted, shallowRef, useTemplateRef } from 'vue';
import type * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import * as monaco from 'monaco-editor';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

export type MonacoEditor = typeof monacoEditor;

self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        return new editorWorker();
    }
};

const props = defineProps<{
    editorClass?: string,
    editorStyle?: string,
    onBeforeMount?: () => void,
    onMount?: (editor: editor.IStandaloneCodeEditor) => void,
    editorOptions?: editor.IStandaloneEditorConstructionOptions,
}>();

const editorElement = useTemplateRef('editorElement');
const editorRef = shallowRef<editor.IStandaloneCodeEditor>();

onMounted(() => {
    if (!editorElement.value) throw new Error('wtf');

    props.onBeforeMount?.();
    editorRef.value = monaco.editor.create(editorElement.value!, props.editorOptions);
    props.onMount?.(editorRef.value);
});

onBeforeUnmount(() => {
    editorRef.value?.dispose();
});

// height: calc(100vh - 69.6px - 68px)
</script>

<template>
    <div id="monaco-editor" :class="editorClass ?? ''" :style="editorStyle ?? ''" ref="editorElement"></div>
</template>
