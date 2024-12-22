<script setup lang="ts">
import Monaco from '@/components/Monaco';

import { ref, shallowRef } from 'vue';
import type { editor } from 'monaco-editor';
import { themes } from '@/lib/monaco-themes';
import type * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';

type MonacoEditor = typeof monacoEditor;

const MONACO_EDITOR_OPTIONS: editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
    fixedOverflowWidgets: true,
};

const filename = ref('test.txt');
const code = ref('# Hello, World!');
const editorRef = shallowRef<editor.IStandaloneCodeEditor>();

function handleBeforeMount(monaco: MonacoEditor) {
    for (const [themeName, theme] of Object.entries(themes)) {
        // console.log(themeName, theme);
        monaco.editor.defineTheme(themeName, theme as editor.IStandaloneThemeData);
    }
}

function handleMount(editor: editor.IStandaloneCodeEditor, monaco: MonacoEditor) {
    editorRef.value = editor;
}

// your action
function formatCode() {
    editorRef.value?.getAction('editor.action.formatDocument')!.run();
}

function submitPage() {

}
</script>

<template>
    <div class="flex">
        <div class="inputs">
            <input v-model="filename" placeholder="File path">

            <button type="button" @click="submitPage">Submit</button>
        </div>

        <Monaco
            class="flex-monaco"
            v-model:value="code"
            theme="vs-dark"
            :options="MONACO_EDITOR_OPTIONS"
            @before-mount="handleBeforeMount"
            @mount="handleMount"
            language="markdown"
            height="calc(100vh - 50px - 3.5rem)"
        />
    </div>
</template>

<style lang="scss" scoped>
.flex {
    display: flex;
    flex-direction: column;
}
.flex-monaco {
    margin-bottom: 0.5rem;
    max-width: 100vw;
}

input {
    padding: 0.1rem 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.8rem;
}

button {
    appearance: none;
    border: 1px solid var(--text-color);
    display: inline-block;
    margin: 0.5rem 0;
    padding: 0.1rem 0.5rem;
}
</style>
