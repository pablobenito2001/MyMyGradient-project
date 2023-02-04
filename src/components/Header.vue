<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        color_1: String,
        color_2: String
    })

</script>

<template>
    <header class="Header">
        <h1 class="Global-title">MyMyGradient</h1>
        <span class="Header-name">By Pablo Benito</span>
    </header>
</template>

<style scoped lang="scss">
    .Header{
        min-width: 100%;
        padding: var(--gap);
        background-color: var(--black-background);
        &-name{
            font-size: 0.6em;
            color: white;
            font-weight: lighter;
            margin-left: 2px;
        }
    }
</style>