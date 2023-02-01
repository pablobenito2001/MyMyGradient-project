<script setup>

</script>

<template>
    <header class="Header">
        <h1 class="Header-title">MyMyGradient</h1>
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
            display: inline-block;
        }
        &-name{
            font-size: 0.6em;
            color: white;
        }
    }
</style>