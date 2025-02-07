<script setup lang="ts">
import { computed, provide, reactive, ref, shallowRef, watch } from 'vue';
import type { editor } from 'monaco-editor';
import { themeNames, themes } from '@/lib/monaco/themes';
import { user, waitForInitialSession } from '@/lib/atproto/signed-in-user';
import SignInGate from '@/components/SignInGate.vue';
import { language as mdxLang, conf as mdxLangConf } from '@/lib/monaco/mdx-lang';
import type { IoGithubAtwebFile } from '@atcute/client/lexicons';
import { downloadFile, type Page, type PageMeta } from '@/lib/atproto/atweb-unauthed';
import { filepathToPathParameter, filepathToRkey } from '@/lib/atproto/rkey';
import * as monaco from 'monaco-editor';
import type { AtUri } from '@atproto/syntax';
import { useLocalStorage, watchImmediate } from '@vueuse/core';
import { lookupMime } from '@/lib/mime';
import MonacoEditor from '@/components/MonacoEditor.vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import { useRoute, useRouter } from 'vue-router';
import UsePico from '@/components/UsePico.vue';
import { useVanillaCss } from '@/lib/shared-globals';
import { frameworkStyles } from '@/lib/framework-styles';
import { ShadowRoot } from 'vue-shadow-dom';
import { pageKey, pageMetaKey } from '@/lib/injection-keys';

for (const [themeName, theme] of Object.entries(themes)) {
    // console.log(themeName, theme);
    monaco.editor.defineTheme(themeName, theme as editor.IStandaloneThemeData);
}
monaco.languages.register({ id: 'mdx', mimetypes: ['text/mdx'] });
monaco.languages.setLanguageConfiguration('mdx', mdxLangConf);
monaco.languages.setMonarchTokensProvider('mdx', mdxLang);

const MONACO_EDITOR_OPTIONS: editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
    fixedOverflowWidgets: true,
    contextmenu: true,
};

const pageRef = shallowRef<Page>();
const pageMetaRef = shallowRef<PageMeta>();
provide(pageKey, pageRef);
provide(pageMetaKey, pageMetaRef);

const editorRef = shallowRef<editor.IStandaloneCodeEditor>();
const editorValue = ref('');
const editorLanguage = ref('plaintext');
const submitted = ref(false);

function onMonacoMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.value = editor;
}

// your action
function formatCode() {
    editorRef.value?.getAction('editor.action.formatDocument')!.run();
}

const submitErrors = reactive<unknown[]>([]);
const router = useRouter();
async function submitPage() {
    if (submitErrors.length > 0)
        return;

    if (!user.value) {
        submitErrors.push('not signed in');
        throw new Error('Not signed in');
    }

    if (!activeFile.value) {
        submitErrors.push('file path is empty');
        throw new Error('file path is empty');
    }

    const { client, handle } = user.value;

    const { rkey } = await client.uploadPage(activeFile.value, editorRef.value!.getValue());
    submitted.value = true;
    setTimeout(() => {
        router.push({ name: '/page/[handle]/[path]+/', params: { handle, path: filepathToPathParameter(activeFile.value) } });
    }, 1000);
}

async function openPage() {
    if (!user.value) {
        submitErrors.push('not signed in');
        throw new Error('Not signed in');
    }

    const { handle } = user.value;
    router.push({ name: '/page/[handle]/[path]+/', params: { handle, path: filepathToPathParameter(activeFile.value) } });
}

const selectedTheme = useLocalStorage<(keyof typeof themeNames)>('monaco-theme', 'Tomorrow Night Bright');
watchImmediate(selectedTheme, selectedTheme => {
    monaco.editor.setTheme(themeNames[selectedTheme]);
});

const files = ref<(IoGithubAtwebFile.Record & { uri: AtUri })[]>([]);
const activeFile = ref<string>('');
watchImmediate(user, async user => {
    if (!user) return;

    files.value = await user.client.listFiles();
});

async function setActiveFile(file: IoGithubAtwebFile.Record & { uri: AtUri }) {
    activeFile.value = file.filePath;

    if (!user.value) return;

    const page = pageRef.value = pageMetaRef.value = await downloadFile(user.value.did, file.uri.rkey);
    editorValue.value = page.blobString;
    router.push({ name: '/edit/[[path]]+', params: { path: filepathToPathParameter(activeFile.value) }});
}

const route = useRoute('/edit/[[path]]+');
if (route.params.path) {
    const filePath = route.params.path.join('/');
    if (activeFile.value != filePath) {
        activeFile.value = filePath;

        await waitForInitialSession();

        if (user.value) {
            const rkey = filepathToRkey(filePath);
            const page = pageRef.value = pageMetaRef.value = await downloadFile(user.value.did, rkey);
            editorValue.value = page.blobString;
        }
    }
}

watchImmediate(activeFile, activeFile => {
    editorLanguage.value = activeFile ? lookupMime(activeFile) ?? 'mdx' : 'plaintext';
    if (user) {
        pageRef.value = undefined;
        pageMetaRef.value = {
            did: user.value!.did,
            filePath: activeFile,
        };
    }
});

watch(editorValue, () => {
    useVanillaCss.value = true; // reset it BEFORE markdown render!
});

const isMarkdownFile = computed(() => !activeFile.value || ((lookupMime(activeFile.value) ?? 'text/mdx') === 'text/mdx'));

const adoptedStyleSheet = new CSSStyleSheet();
await adoptedStyleSheet.replace(frameworkStyles);
</script>

<template>
    <div class="grid">
        <div class="left">
            <UsePico>
                <aside style="overflow: auto; max-height: calc(100vh - 115.5px); padding: 0 1rem;">
                    <nav>
                        <ul>
                            <li v-for="file in files" :key="file.uri.rkey" :active="activeFile == file.filePath">
                                <a href="javascript: void 0" @click="setActiveFile(file)">{{ file.filePath }}</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </UsePico>
        </div>
        <div class="flex middle">
            <UsePico>
                <div class="inputs" style="padding: 0 0.5rem; --pico-spacing: 0.5rem;">
                    <input v-model="activeFile" type="text" placeholder="index.mdx" aria-label="File path" class="active-file-input">

                    <SignInGate sign-in-button-class="edit-form-button" sign-in-text="Sign in to upload">
                        <button @click="submitPage" class="submit-button">Submit</button>
                        <button v-if="files.find(file => file.filePath === activeFile)" class="edit-form-button" @click="openPage">Open</button>
                    </SignInGate>

                    <select v-model="selectedTheme" aria-label="Editor Theme" required class="editor-theme-selector">
                        <option v-for="themeName in Object.keys(themeNames)" :key="themeName" :value="themeName">
                            {{ themeName }}
                        </option>
                    </select>
                </div>
            </UsePico>

            <MonacoEditor
                editor-style="height: calc(100vh - 115.5px - 86.6px)"
                v-on:mount="onMonacoMount"
                :editor-options="MONACO_EDITOR_OPTIONS"
                :language="editorLanguage"
                v-model:text="editorValue"
            />
        </div>
        <div class="right" style="min-width: 25vw;" v-if="isMarkdownFile">
            <div style="padding: 1rem; max-height: calc(100vh - 115.5px); overflow: auto;">
                <div class="errors" v-if="submitErrors.length">
                    Errors:
                    <ul>
                        <li v-for="error, idx in submitErrors" :key="idx">
                            {{ String(error) }}
                        </li>
                    </ul>
                </div>

                <Suspense>
                    <ShadowRoot :adopted-style-sheets="useVanillaCss ? [adoptedStyleSheet] : []">
                        <UsePico>
                            <main>
                                <MarkdownRenderer v-model:errors="submitErrors" :markdown="editorValue" />
                            </main>
                        </UsePico>
                    </ShadowRoot>
                </Suspense>
            </div>
        </div>
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

.grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.left { grid-area: 1 / 1 / 2 / 2; }
.middle { grid-area: 1 / 2 / 2 / 7; }
.right { grid-area: 1 / 7 / 2 / 10; }

.active-file-input {
    width: auto !important;
    margin-right: 0.5rem;
}

.editor-theme-selector {
    width: auto;
    float: right; // right-align
}

.submit-button {
    margin-right: 0.5rem;
}
</style>
