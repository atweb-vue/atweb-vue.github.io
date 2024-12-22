<script setup lang="ts">
import { ref } from 'vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

const markdown = `
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
`;
const count = 'peepance';
</script>

<template>
    <div class="about">
        <h1>This is an about page</h1>
        {{ count }}
        <Suspense>
            <MarkdownRenderer :markdown />
        </Suspense>
    </div>
</template>

<style></style>
