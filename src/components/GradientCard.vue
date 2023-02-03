<script setup>
    import { ref ,defineProps, computed } from 'vue';
    import ColorCopy from './ColorCopy.vue';
    import circle from '/src/assets/circle.svg'

    const props = defineProps({
        colors: Array,
        title: String
    });

    const range = ref(0);

    const gradient = computed(() => {
        return props.colors.map(elem => elem.join(" ")).join()
    })

</script>
<template>
    <div class="Card">
        <div class="Card-gradient" :style="{'background': `linear-gradient(${ range }deg, ${ gradient })`}">
            <h3 class="Card-title">{{ title }}</h3>
        </div>
        <div class="Card-input">
            <img :src="circle" alt="range" class="Card-circle" :style="{'transform': `rotate(${ range }deg)`}">
            <input type="range" min="0" max="360" v-model="range" class="Card-range">
        </div>
        <div class="Card-colors">
            <ColorCopy v-for="item in colors" :color="item[0]"/>
        </div>
        <div class="Card-buttons">
            <button class="Global--button">
            Show Me
            </button>
            <button class="Global--button">
                Copy CSS
            </button>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .Card{
        padding: .625rem;
        background-color: var(--glass-black);
        border-radius: var(--radius);
        &-gradient{
            width: 100%;
            min-height: 12.5rem;
            border-radius: var(--radius);
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
            height: 6px;
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
        &-buttons{
            display: flex;
            gap: var(--gap);
            margin-top: var(--gap);
        }
    }
</style>