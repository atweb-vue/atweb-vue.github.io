<script setup lang="ts">
import { onMounted, reactive, ref, shallowRef, watch } from 'vue';
import type { editor } from 'monaco-editor';
import { themeNames, themes } from '@/lib/monaco/themes';
import type * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import { user } from '@/lib/atproto/signed-in-user';
import SignInGate from '@/components/SignInGate.vue';
import router from '@/router';
import { language as mdxLang, conf as mdxLangConf } from '@/lib/monaco/mdx-lang';
import { compile } from '@mdx-js/mdx';
import { options as mdxOptions } from '@/lib/markdown/mdx-options';
import { VaButton, VaIcon, VaInput, VaLayout, VaSelect, VaSidebar, VaSidebarItem, VaSidebarItemContent, VaSidebarItemTitle } from 'vuestic-ui';
import type { IoGithubAtwebFile } from '@atcute/client/lexicons';
import { downloadFile } from '@/lib/atproto/atweb-unauthed';
import { filepathToRkey } from '@/lib/atproto/rkey';
import * as monaco from 'monaco-editor';
import type { AtUri } from '@atproto/syntax';
import { watchImmediate } from '@vueuse/core';
import { lookupMime } from '@/lib/mime';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

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

type MonacoEditor = typeof monacoEditor;

const MONACO_EDITOR_OPTIONS: editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
    fixedOverflowWidgets: true,
    contextmenu: true,
};

const editorRef = shallowRef<editor.IStandaloneCodeEditor>();
const submitted = ref(false);

onMounted(() => {
    for (const [themeName, theme] of Object.entries(themes)) {
        // console.log(themeName, theme);
        monaco.editor.defineTheme(themeName, theme as editor.IStandaloneThemeData);
    }
    monaco.languages.register({ id: 'mdx', mimetypes: ['text/mdx'] });
    monaco.languages.setLanguageConfiguration('mdx', mdxLangConf);
    monaco.languages.setMonarchTokensProvider('mdx', mdxLang);

    editorRef.value = monaco.editor.create(document.getElementById('monaco-editor')!, MONACO_EDITOR_OPTIONS);
    selectedTheme.value = 'Tomorrow Night Bright';
});

// your action
function formatCode() {
    editorRef.value?.getAction('editor.action.formatDocument')!.run();
}

const submitErrors = reactive<unknown[]>([]);
async function submitPage() {
    submitErrors.length = 0;
    try {
        await compile(editorRef.value!.getValue(), mdxOptions);
    } catch (err) {
        submitErrors.push(err);
        return;
    }

    if (!user.value) {
        submitErrors.push('not signed in');
        throw new Error('Not signed in');
    }

    if (!activeFile.value) {
        submitErrors.push('file path is empty');
        throw new Error('file path is empty');
    }

    const { client, did } = user.value;

    const { rkey } = await client.uploadPage(activeFile.value, editorRef.value!.getValue());
    submitted.value = true;
    setTimeout(() => {
        router.push(`/page/${did}/${rkey}`);
    }, 1000);
}

const selectedTheme = ref<(keyof typeof themeNames)>('Visual Studio Dark');
watch(selectedTheme, theme => {
    monaco.editor.setTheme(themeNames[theme]);
});

const files = ref<(IoGithubAtwebFile.Record & { uri: AtUri })[]>([]);
const activeFile = ref<string>('');
watch(user, async user => {
    if (!user) return;

    files.value = await user.client.listFiles();
});

async function setActiveFile(file: IoGithubAtwebFile.Record & { uri: AtUri }) {
    activeFile.value = file.filePath;

    if (!user.value) return;

    const page = await downloadFile(user.value.did, file.uri.rkey);
    editorRef.value!.setValue(page.blobString);

    monaco.editor.setModelLanguage(
        editorRef.value!.getModel()!,
        activeFile.value ? lookupMime(activeFile.value) ?? 'mdx' : 'plaintext'
    );
}

function getLanguage(activeFile: string) {
    const languages = {
        '.txt': 'plaintext',
        '.abap': 'abap',
        '.apex': 'apex',
        '.azcli': 'azcli',
        '.bat': 'bat',
        '.bicep': 'bicep',
        '.cameligo': 'cameligo',
        '.clj': 'clojure',
        '.coffee': 'coffeescript',
        '.c': 'c',
        '.cpp': 'cpp',
        '.csharp': 'csharp',
        '.csp': 'csp',
        '.css': 'css',
        '.cypher': 'cypher',
        '.dart': 'dart',
        '.dockerfile': 'dockerfile',
        '.ecl': 'ecl',
        '.elixir': 'elixir',
        '.flow9': 'flow9',
        '.fsharp': 'fsharp',
        '.freemarker2': 'freemarker2',
        '.go': 'go',
        '.graphql': 'graphql',
        '.handlebars': 'handlebars',
        '.hcl': 'hcl',
        '.html': 'html',
        '.ini': 'ini',
        '.java': 'java',
        '.js': 'javascript',
        '.jsx': 'javascript',
        '.julia': 'julia',
        '.kotlin': 'kotlin',
        '.less': 'less',
        '.lexon': 'lexon',
        '.lua': 'lua',
        '.liquid': 'liquid',
        '.m3': 'm3',
        '.md': 'markdown',
        '.mdx': 'mdx',
        '.mips': 'mips',
        '.msdax': 'msdax',
        '.mysql': 'mysql',
        '.m': 'objective-c',
        '.pascal': 'pascal',
        '.pascaligo': 'pascaligo',
        '.perl': 'perl',
        '.pgsql': 'pgsql',
        '.php': 'php',
        '.pla': 'pla',
        '.postiats': 'postiats',
        '.powerquery': 'powerquery',
        '.ps1': 'powershell',
        '.proto': 'proto',
        '.pug': 'pug',
        '.py': 'python',
        '.qs': 'qsharp',
        '.r': 'r',
        '.razor': 'razor',
        '.redis': 'redis',
        '.redshift': 'redshift',
        '.restructuredtext': 'restructuredtext',
        '.ruby': 'ruby',
        '.rust': 'rust',
        '.sb': 'sb',
        '.scala': 'scala',
        '.scheme': 'scheme',
        '.scss': 'scss',
        '.shell': 'shell',
        '.sol': 'sol',
        '.aes': 'aes',
        '.sparql': 'sparql',
        '.sql': 'sql',
        '.st': 'st',
        '.swift': 'swift',
        '.systemverilog': 'systemverilog',
        '.verilog': 'verilog',
        '.tcl': 'tcl',
        '.twig': 'twig',
        '.ts': 'typescript',
        '.tsx': 'typescript',
        '.typespec': 'typespec',
        '.vb': 'vb',
        '.wgsl': 'wgsl',
        '.xml': 'xml',
        '.yaml': 'yaml',
        '.json': 'json',
    };

    for (const [ext, lang] of Object.entries(languages)) {
        if (activeFile.endsWith(ext)) {
            return lang;
        }
    }

    return 'mdx';
}
</script>

<template>
    <VaLayout>
        <template #left>
            <VaSidebar>
                <VaSidebarItem v-for="file in files" :key="file.uri.rkey" :active="activeFile == file.filePath" @click="setActiveFile(file)">
                    <VaSidebarItemContent class="file-selector-item-content">
                        <VaSidebarItemTitle>{{ file.filePath }}</VaSidebarItemTitle>
                    </VaSidebarItemContent>
                </VaSidebarItem>
            </VaSidebar>
        </template>
        <template #content>
            <div class="flex">
                <div class="errors" v-if="submitErrors.length">
                    Errors:
                    <ul>
                        <li v-for="error, idx in submitErrors" :key="idx">
                            {{ String(error) }}
                        </li>
                    </ul>
                </div>

                <div class="inputs">
                    <VaInput
                        v-model="activeFile"
                        placeholder="index.mdx"
                        label="File path"
                    />

                    <SignInGate sign-in-button-class="edit-form-button">
                        <VaButton class="edit-form-button" @click="submitPage">Submit</VaButton>
                    </SignInGate>

                    <VaSelect
                        class="editor-theme-selector"
                        v-model="selectedTheme"
                        :options="Object.keys(themeNames)"
                        placeholder="Select an option"
                        label="Editor Theme"
                    />
                </div>

                <div id="monaco-editor" style="height: calc(100vh - 69.6px - 68px)"></div>

                <!-- <Monaco
                    class="flex-monaco"
                    v-model:value="code"
                    theme="vs-dark"
                    :options="MONACO_EDITOR_OPTIONS"
                    @before-mount="handleBeforeMount"
                    @mount="handleMount"
                    :path="activeFile ?? 'test.mdx'"
                    :language="getLanguage(activeFile ?? 'test.mdx')"
                    defaultPath="test.mdx"
                    defaultLanguage="mdx"
                    height="calc(100vh - 70px - 75px - 10px)"
                /> -->
            </div>
        </template>
    </VaLayout>
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
</style>

<style lang="scss">
.edit-form-button {
    vertical-align: text-top;
}

// fix for bug in va-modal
.va-modal-entry {
    display: none;
}

.editor-theme-selector {
    float: right; // right-align
    margin-right: 0.5rem; // prevent triggering overflow
}

.file-selector-item-content {
    --va-sidebar-item-content-padding: 0.25rem;
    min-height: 12px;
    font-size: 85%;
}
</style>
