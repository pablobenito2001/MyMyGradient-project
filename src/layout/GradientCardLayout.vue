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
        grid-auto-rows: auto;
        max-width: 75rem;
        margin: auto;
        gap: .625rem;
    }
</style>