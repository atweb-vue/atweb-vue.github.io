<script setup lang="ts">
const props = defineProps<{
    clip?: string;
    flag1?: string;
    flag2?: string;
    overlay?: string;
    svg?: boolean;
}>();

</script>

<template>
    <a href="https://badge.les.bi"><img :title="`${props.flag1} ${props.flag2}`" style="image-rendering: pixelated;" :src="`https://badge.les.bi/88x31/${props.flag1}/${props.flag2}/${props.clip}/${props.overlay}.${props.svg ? 'svg' : 'png'}`"></a>
</template>
