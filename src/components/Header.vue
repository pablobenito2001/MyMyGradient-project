<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        color_1: String,
        color_2: String
    })

</script>

<template>
    <header class="Header">
        <h1 class="Header-title" :style="{'background': `linear-gradient(90deg, #${ color_1 || 'E96443'} 0%, #${ color_2 || '904E95'} 100%)`, '-webkit-background-clip': 'text'}">MyMyGradient</h1>
        <span class="Header-name">By Pablo Benito</span>
    </header>
</template>

<style scoped lang="scss">
    .Header{
        min-width: 100%;
        padding: var(--gap);
        background-color: var(--black);
        &-title{
            font-weight: bold;
            font-size: 1.4em;
            color: white;
            user-select: none;
            display: inline-block;
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent;
        }
        &-name{
            font-size: 0.6em;
            color: white;
            font-weight: lighter;
            margin-left: 2px;
        }
    }
</style>