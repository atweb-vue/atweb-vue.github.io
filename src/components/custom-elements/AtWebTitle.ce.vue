<script setup lang="ts">
import { getSlotChildrenText } from '@/lib/vue-utils';
import { useTitle, watchImmediate } from '@vueuse/core';
import { useSlots } from 'vue';

const slots = useSlots();

const title = useTitle();

watchImmediate(slots, slots => {
    const childrenText = getSlotChildrenText(slots.default);
    title.value = childrenText.trim();
});

</script>
