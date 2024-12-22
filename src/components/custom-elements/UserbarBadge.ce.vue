<script setup lang="ts">
const props = defineProps<{
    width?: number;
    height?: number;
    text?: string;
    textColor?: string;

    backgroundType?: "gradient" | "plain";
    backgroundPositionX?: number;
    backgroundPositionY?: number;
    backgroundEndPositionX?: number;
    backgroundEndPositionY?: number;
    backgroundColor?: string;
    backgroundColors?: string[];

    textAlign?: "left" | "center" | "right";
    textBorder?: boolean;
    textBorderWidth?: number;
    textBorderColor?: string;
    pattern?: "none" | "dots" | "stripes";
    topShadow?: boolean;
}>();

import userbarGenerator from '@/external/userbar-generator/src/index';
import { useObjectUrl } from '@vueuse/core';

const blob = await userbarGenerator({
    width: props.width,
    height: props.height,
    text: props.text,
    textColor: props.textColor,

    background: props.backgroundType !== undefined ? {
        type: props.backgroundType,
        positionX: props.backgroundPositionX,
        positionY: props.backgroundPositionY,
        endPositionX: props.backgroundEndPositionX,
        endPositionY: props.backgroundEndPositionY,
        colors: props.backgroundColors ?? (props.backgroundColor ? [props.backgroundColor] : undefined) ?? [],
    } : undefined,

    textAlign: props.textAlign,
    textBorder: props.textBorder,
    textBorderWidth: props.textBorderWidth,
    textBorderColor: props.textBorderColor,
    pattern: props.pattern,
    topShadow: props.topShadow,
});

const objectUrl = useObjectUrl(blob);
</script>

<template>
    <img v-bind="$attrs" :src="objectUrl" >
</template>
