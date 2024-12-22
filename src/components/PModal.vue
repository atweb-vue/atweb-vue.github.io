<script setup lang="ts">
const props = defineProps<{
    onClickOk?: (ev: MouseEvent) => void,
    onClickCancel?: (ev: MouseEvent) => void,
    cancelText?: string,
    okText?: string,
    hideOk?: boolean,
    hideCancel?: boolean,
}>();

const open = defineModel({
    default: false
});
</script>
<template>
    <dialog :open="open">
        <article>
            <slot v-if="open"></slot>

            <footer>
                <button class="secondary" @click="onClickCancel" v-if="!hideOk">
                    {{ cancelText ?? 'Cancel' }}
                </button>
                <button @click="onClickOk" v-if="!hideCancel">
                    {{ okText ?? 'OK' }}
                </button>
            </footer>
        </article>
    </dialog>
</template>
