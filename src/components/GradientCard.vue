<script setup>
    import { ref ,defineProps } from 'vue';
    import circle from '/src/assets/circle.svg'

    const props = defineProps({
        color_1: String,
        color_2: String,
        title: String
    })

    const range = ref(0);
</script>
<template>
    <div class="Card">
        <div class="Card-gradient" :style="{'background': `linear-gradient(${ range }deg, #${ color_1 || 'c000ff'} 0%, #${ color_2 || '3900d7'} 100%)`}">
            <h3 class="Card-title">{{ title }}</h3>
        </div>
        <div class="Card-input">
            <img :src="circle" alt="range" class="Card-circle" :style="{'transform': `rotate(${ range }deg)`}">
            <input type="range" min="0" max="360" v-model="range" class="Card-range">
        </div>
        <div class="Card-colors">
            <div class="Global--centerAll">
                <div :style="{'background': `#${color_1}`}" class="Card-color"></div>
                <span>#{{ color_1 }}</span>
            </div>
            <div class="Global--centerAll">
                <div :style="{'background': `#${color_2}`}" class="Card-color"></div>
                <span>#{{ color_2 }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .Card{
        padding: .625rem;
        background-color: var(--glass-black);
        border-radius: 1.25rem;
        &-gradient{
            width: 100%;
            min-height: 12.5rem;
            border-radius: 1.25rem;
            padding: 5px;
        }
        &-title{
            text-align: center;
            font-size: 1.2em;
            color: rgba(255, 255, 255, 0.678);
            user-select: none;
            font-weight: lighter;
        }
        &-input{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .625rem;
            margin-top: var(--gap);
        }
        &-range{
            width: 100%;
            background-color: white;
            height: 7px;
            border-radius: .3125rem;
            &::-webkit-slider-thumb{
                -webkit-appearance: none;
                appearance: none;
                width: 1.5625rem;
                height: 1.5625rem;
                background: var(--black);
                border: solid .25rem white;
                border-radius: 100%;
                cursor: ew-resize;
            }
        }
        &-circle{
            max-width: 28px;
        }
        &-colors{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: var(--gap);
            margin-top: var(--gap);
        }
        &-color{
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 100%;
        }
    }
</style>