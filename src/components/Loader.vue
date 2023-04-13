<template>
    <div class="Loader">
        
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    @keyframes rotate {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
    .Loader{
        height: 60px;
        width: 60px;
        background-color: transparent;
        border-left: solid 3px var(--black);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: rotate 0.8s linear infinite;
    }
</style>