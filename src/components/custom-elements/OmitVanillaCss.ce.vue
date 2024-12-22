<script setup lang="ts">
import { useVanillaCss } from '@/lib/shared-globals';
import { onBeforeUnmount } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

useVanillaCss.value = false;

onBeforeRouteLeave(() => {
    useVanillaCss.value = true;
});

// onBeforeUnmount(() =>)
</script>
