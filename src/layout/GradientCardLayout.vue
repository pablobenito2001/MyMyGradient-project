<template>
    <div class="GridCard">
        <slot />
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    .GridCard{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
        grid-auto-rows: 25rem;
        max-width: 2300px;
        margin: auto;
    }
</style>