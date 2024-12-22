<script setup lang="ts">
import type { editor } from 'monaco-editor';
import { computed, onBeforeUnmount, onMounted, shallowRef, useTemplateRef, watch } from 'vue';
import type * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
const monaco = await import('monaco-editor');
// import { activateMarkers, activateAutoInsertion, registerProviders } from '@volar/monaco';

const { default: editorWorker } = await import('monaco-editor/esm/vs/editor/editor.worker?worker');
const { default: jsonWorker } = await import('monaco-editor/esm/vs/language/json/json.worker?worker');
const { default: cssWorker } = await import('monaco-editor/esm/vs/language/css/css.worker?worker');
const { default: htmlWorker } = await import('monaco-editor/esm/vs/language/html/html.worker?worker');
const { default: tsWorker } = await import('monaco-editor/esm/vs/language/typescript/ts.worker?worker');

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
    language: string,
}>();

const text = defineModel<string>('text', { default: '' });

const editorElement = useTemplateRef('editorElement');
const editorRef = shallowRef<editor.IStandaloneCodeEditor>();
const isEditorReady = computed(() => !!editorRef.value);
const model = computed(() => isEditorReady.value ? editorRef.value!.getModel() : undefined);

watch(() => props.language, language => {
    if (isEditorReady.value) {
        monaco.editor.setModelLanguage(editorRef.value!.getModel()!, language);
    }
});

watch(text, text => {
    if (model.value?.getValue() != text) {
        model.value?.setValue(text);
    }
});

onMounted(() => {
    if (!editorElement.value) throw new Error('wtf');

    props.onBeforeMount?.();

    editorRef.value = monaco.editor.create(editorElement.value!, props.editorOptions);
    monaco.editor.setModelLanguage(model.value!, props.language);
    model.value!.setValue(text.value);

    editorRef.value.onDidChangeModelContent(() => {
        const value = editorRef.value!.getValue();
        if (value !== text.value) {
            text.value = value;
        }
    });

    props.onMount?.(editorRef.value);
});

onBeforeUnmount(() => {
    editorRef.value?.getModel()?.dispose();
    editorRef.value?.dispose();
});
</script>

<template>
    <div id="monaco-editor" :class="editorClass ?? ''" :style="editorStyle ?? ''" ref="editorElement"></div>
</template>
