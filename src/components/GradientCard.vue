<template>
    <div class="Card">
        <GradientShow :deg="degRef" :colors="stringColor" :main-color="gradientColor[0].color"/>
        <div class="Card-controllerbox">
            <img :src="range" alt="range input" title="range input" class="Card-svg" :style="{'transform': `rotate(${ degRef }deg)`}">
            <input type="range" min="0" max="360" class="Card-range" v-model="degRef">  
        </div>
        <div class="Card-lengthBox">
            <input 
            type="range"
            v-for="(item, index) in gradientColor"
            :key="index"
            :style="{'--color': item.color}"
            class="Card-length"
            max="100"
            min="0"
            v-model="item.length"
            >
        </div>
        <div class="Card-inputColorBox">
            <input 
            type="color"    
            v-for="(item, index) in gradientColor"
            :key="index"
            v-model="item.color"
            class="Card-inputColor"
            >
            <div class="Card-addColor" @click="addColor" v-if="maxColors">+</div>
        </div>
    </div>
</template>
<script setup>
    import { ref, watch } from 'vue';
    import range from '../assets/svg/range_svg.svg';

    import GradientShow from './GradientShow.vue';

    const props = defineProps({
        gradientColor: {
            require: true,
            type: Object
        },
        deg: {
            require: true,
            type: String,
        }
    });

    const degRef = ref(props.deg);
    const gradientColor = ref(props.gradientColor);
    const stringColor = ref(null);
    const maxColors = ref(true);
    
    function reColor(){
        stringColor.value = gradientColor.value.map(elem => {
            return `${ elem.color } ${ elem.length }%`
        }).join()
        if (gradientColor.value.length === 4) {
            maxColors.value = false
        }
    }

    function addColor(){
        gradientColor.value.forEach(elem => {
            elem.length /= 2 
        })
        gradientColor.value.push({color: '#34DCDF', length: 100});
    }

    reColor();
    watch(gradientColor.value, reColor);
</script>
<style lang="scss" scoped>
    .Card{
        padding: 15px;
        background-color: transparent;
        &-controllerbox{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            width: 100%;
        }
        &-range{
            width: 100%;
            background-color: var(--grey);
            border-radius: 10px;
            height: 20px;
            &::-webkit-slider-thumb{
                -webkit-appearance: none;
                height: 1.25rem;
                width: 1.25rem;
                border-radius: 50%;
                background-color: #bebebe;
                cursor: ew-resize;
                &:active{
                    background-color: #969696;
                }
            }
        }
        &-svg{
            max-width: 1.875rem;
        }
        &-inputColorBox{
            display: flex;
            align-items: center;
        }
        &-inputColor{
            width: 2.8125rem;
            height: 2.8125rem;
            cursor: pointer;
            &::-webkit-color-swatch {
                border-radius: 50%;
                border: none;
                border: solid 3px #0000001a;
            }
            &::-moz-color-swatch {
                border-radius: .9375rem;
                border: none;
                border: solid 3px #0000001a;
            }
        }
        &-addColor{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: transparent;
            border: solid 3px #bebebe;
            text-align: center;
            font-size: 1.5em;
            color: #bebebe;
            cursor: pointer;
            transition: background var(--transition-time) cubic-bezier(0.075, 0.82, 0.165, 1), color var(--transition-time) cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background: #bebebe;
                color: var(--white);
            }
        }
        &-lengthBox{
            width: 100%;
            margin: 5px 0;
            height: 1.25rem;
            border-radius: .625rem;
            position: relative;
            background: var(--grey);
        }
        &-length{
            width: 100%;
            height: 1.25rem;
            background-color: none;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            &::-webkit-slider-thumb{
                pointer-events: auto;
                appearance: none;
                width: 1.25rem;
                height: 1.25rem;
                border-radius: 50%;
                background: var(--color);
                cursor: ew-resize;
            }
        }
    }
</style>