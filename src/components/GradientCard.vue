<template>
    <div class="Card">
        <div 
        class="Card-gradient" 
        :style="{'background': `linear-gradient(${ degRef }deg, ${ stringColor }`, '--main-color': `${ gradientColor[0].color }ce`}"
        >
            <button class="Card-copy" @click="copyGradient"><i class="fa-solid fa-copy" title="copy gradient"></i></button>
        </div >
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

    const props = defineProps({
        gradientColor: {
            require: true,
            type: Object
        },
        deg: {
            require: true,
            type: Number,
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
    }

    function addColor(){
        gradientColor.value.forEach(elem => {
            elem.length /= 2 
        })
        gradientColor.value.push({color: '#34DCDF', length: 100});
    }

    function copyGradient(){
        navigator.clipboard.writeText(`background: ${ degRef.value }deg, ${ stringColor.value }`);
    }

    reColor();
    watch(gradientColor.value, () => {
        reColor()
        if (gradientColor.value.length === 4) {
            maxColors.value = false
        }
    });
</script>
<style lang="scss" scoped>
    .Card{
        padding: 15px;
        background-color: transparent;
        &:hover > .Card-gradient{
                box-shadow: 0 0 20px 0px var(--main-color);
        }
        &-gradient{
            width: 100%;
            height: 18.75rem;
            border-radius: .9375rem;
            margin: 0 0 10px 0;
            position: relative;
            transition: box-shadow var(--transition-time) cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        &-copy{
            position: absolute;
            font-size: 1.5em;
            color: white;
            right: .9375rem;
            top: .9375rem;
            cursor: pointer;
            opacity: 1;
            transition: box-shadow var(--transition-time) cubic-bezier(0.075, 0.82, 0.165, 1); 
            &:hover{
                filter: drop-shadow(0px 0px 1px var(--white));
            }
        }
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
                border: solid 3px #0000003b;
            }
            &::-moz-color-swatch {
                border-radius: .9375rem;
                border: none;
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