<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        color: String
    })

</script>
<template>
    <div class="Color" :style="{background: color}">
        <font-awesome-icon icon="fa-solid fa-copy" class="Color-icon"/>
    </div>
</template>
<style scoped lang="scss">
    .Color{
        min-width: 2.1875rem;
        min-height: 2.1875rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover .Color-icon{
            opacity: 1;
        }
        &-icon{
            opacity: 0;
            transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }
</style>