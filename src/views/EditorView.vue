<script setup lang="ts">
import Monaco from '@/components/Monaco';

import { ref, shallowRef } from 'vue';
import type { editor } from 'monaco-editor';
import { themes } from '@/lib/monaco-themes';
import type * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import { user } from '@/lib/atproto/signed-in-user';
import SignInGate from '@/components/SignInGate.vue';
import router from '@/router';
import { language as mdxLang, conf as mdxLangConf } from '@/lib/monaco-mdx-lang';
import { compile } from '@mdx-js/mdx';
import { options as mdxOptions } from '@/lib/markdown/mdx-options';

type MonacoEditor = typeof monacoEditor;

const MONACO_EDITOR_OPTIONS: editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
    fixedOverflowWidgets: true,
};

const filename = ref('test.mdx');
const code = ref(`
# hi

<h1>Heading!</h1>

<abbr title="HyperText Markup Language">HTML</abbr> is a lovely language.

<section>
    And here is *markdown* in **JSX**!
</section>

<h2>Hello, Venus!</h2>
<h2>Hello, Mars!</h2>

<main>
    <article>
    # Hello!
    </article>
</main>

# Heading (rank 1)
## Heading 2
### 3
#### 4
##### 5
###### 6

> Block quote

* Unordered
* List

1. Ordered
2. List

A paragraph, introducing a thematic break:

---

\`\`\`js
some.code()
\`\`\`

a [link](https://example.com), an ![image](./image.png), some *emphasis*,
something **strong**, and finally a little \`code()\`.
`);
const editorRef = shallowRef<editor.IStandaloneCodeEditor>();
const submitted = ref(false);

function handleBeforeMount(monaco: MonacoEditor) {
    for (const [themeName, theme] of Object.entries(themes)) {
        // console.log(themeName, theme);
        monaco.editor.defineTheme(themeName, theme as editor.IStandaloneThemeData);
    }
    monaco.languages.register({ id: 'mdx' });
    monaco.languages.setLanguageConfiguration('mdx', mdxLangConf);
    monaco.languages.setMonarchTokensProvider('mdx', mdxLang);
}

function handleMount(editor: editor.IStandaloneCodeEditor, monaco: MonacoEditor) {
    editorRef.value = editor;
}

// your action
function formatCode() {
    editorRef.value?.getAction('editor.action.formatDocument')!.run();
}

const errors = ref<unknown[]>([]);

async function submitPage() {
    errors.value.length = 0;
    try {
        await compile(code.value, mdxOptions);
    } catch (err) {
        errors.value.push(err);
        return;
    }

    if (!user.value) {
        throw new Error('Not signed in');
    }

    const { client, did } = user.value;

    const { rkey } = await client.uploadPage(filename.value, code.value);
    submitted.value = true;
    setTimeout(() => {
        router.push(`/page/${did}/${rkey}`);
    }, 1000);
}
</script>

<template>
    <div class="flex">
        <div class="errors" v-if="errors.length">
            Errors:
            <ul>
                <li v-for="error, idx in errors" :key="idx">
                    {{ String(error) }}
                </li>
            </ul>
        </div>

        <div class="inputs">
            <input class="input" v-model="filename" placeholder="File path" />

            <SignInGate>
                <button class="button" type="button" @click="submitPage">Submit</button>
            </SignInGate>
        </div>

        <Monaco
            class="flex-monaco"
            v-model:value="code"
            theme="vs-dark"
            :options="MONACO_EDITOR_OPTIONS"
            @before-mount="handleBeforeMount"
            @mount="handleMount"
            language="mdx"
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

.input {
    padding: 0.1rem 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.8rem;
}

.button {
    appearance: none;
    border: 1px solid var(--text-color);
    display: inline-block;
    margin: 0.5rem 0;
    padding: 0.1rem 0.5rem;
}
</style>
