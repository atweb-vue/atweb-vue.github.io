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
                <button class="secondary" @click="ev => onClickCancel?.(ev)" v-if="!hideCancel">
                    {{ cancelText ?? 'Cancel' }}
                </button>
                <button @click="ev => onClickOk?.(ev)" v-if="!hideOk">
                    {{ okText ?? 'OK' }}
                </button>
            </footer>
        </article>
    </dialog>
</template>
