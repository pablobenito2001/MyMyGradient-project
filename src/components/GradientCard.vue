<template>
    <div class="Card">
        <div 
        class="Card-gradient" 
        :style="{'background': `linear-gradient(${ deg }deg, ${ gradientColor })`}">
        </div>
    </div>
</template>
<script setup>
    defineProps({
        gradientColor: {
            require: true,
            type: String
        },
        deg: {
            require: true,
            type: Number,
        }
    })
</script>
<style lang="scss" scoped>
    .Card{
        padding: 15px;
        background-color: transparent;
        &-gradient{
            width: 100%;
            height: 18.75rem;
            border-radius: .9375rem;
        }
    }
</style>