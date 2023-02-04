<script>

</script>
<template>
    <button class="Button">
        <slot></slot>
    </button>
</template>
<style scoped lang="scss">
    .Button{
        background-color: #ffffff1a;
        font-weight: bold;
        width: 100%;
        padding: .625rem;
        border-radius: var(--radius);
        color: white;
        cursor: pointer;
        transition: background-color var(--transition) cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            background-color: #c5c5c541;
        }
    }
</style>