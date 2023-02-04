<script setup>
    import { ref ,defineProps, computed, defineEmits } from 'vue';
    import ColorCopy from './ColorCopy.vue';
    import CircleInCard from './CircleInCard.vue'
    import Buttons from '../Buttons.vue'

    const emit = defineEmits(['arrayColor', 'degGradient']);

    const props = defineProps({
        colors: Array,
        title: String
    });

    const gradient = computed(() => {
        return props.colors.map(elem => elem.join(" ")).join()
    })

    const range = ref(0);

</script>
<template>
    <div class="Card">
        <div class="Card-gradient" :style="{'background': `linear-gradient(${ range }deg, ${ gradient })`}">
            <h3 class="Card-title">{{ title }}</h3>
        </div>
        <div class="Card-input">
            <CircleInCard :style="{'transform': `rotate(${ range }deg)`}"/>
            <input type="range" min="0" max="360" v-model="range" class="Card-range" @change="emit('degGradient', range)">
        </div>
        <div class="Card-colors">
            <ColorCopy v-for="item in colors" :color="item[0]"/>
        </div>
        <div class="Card-buttons">
            <Buttons @click="emit('arrayColor', gradient)">
                Show Me!
            </Buttons>
            <Buttons>
                Copy CSS
            </Buttons>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .Card{
        padding: .625rem;
        background-color: var(--glass-card);
        border-radius: var(--radius);
        &-gradient{
            width: 100%;
            min-height: 12.5rem;
            border-radius: var(--radius);
            padding: .3125rem;
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
            background-color: var(--white-background);
            height: .375rem;
            border-radius: .3125rem;
            &::-webkit-slider-thumb{
                -webkit-appearance: none;
                appearance: none;
                width: 1.5625rem;
                height: 1.5625rem;
                background: var(--black-background);
                border: solid .25rem var(--white-background);
                border-radius: 100%;
                cursor: ew-resize;
            }
        }
        &-circle{
            max-width: 1.75rem;
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