<template>
    <div class="Gradient" :style="{'background': `linear-gradient(${ props.deg }deg, ${ props.colors })`, '--color': props.mainColor}" @click.self="openShow">
        <button @click="copyGradient" title="copy code on clipboard">
            <svg xmlns="http://www.w3.org/2000/svg" class="Gradient-copy" viewBox="0 96 960 960"><path d="M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z"/></svg>
        </button>
        <Teleport to="body">
            <div v-if="open" class="Gradient-show" :style="{'background': `linear-gradient(${ props.deg }deg, ${ props.colors })`}" @click.self="openShow">
                <button class="Gradient-exitButton" @click="openShow" title="exit show gradient">
                    <svg class="Gradient-exitSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                </button>
            </div>
        </Teleport>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        deg: {
            require: true,
            type: String
        },
        colors: {
            require: true,
            type: String
        },
        mainColor: {
            require: true,
            type: String
        }
    });

    const open = ref(false)

    function copyGradient(){
        navigator.clipboard.writeText(`background: linear-gradient(${ props.deg }deg, ${ props.colors });`);
    }

    function openShow(){
        document.body.classList.toggle('hidden');
        open.value = !open.value
    }
</script>
<styles lang='scss' scoped>
    .Gradient{
        width: 100%;
        height: 18.75rem;
        border-radius: .9375rem;
        margin: 0 0 10px 0;
        position: relative;
        transition: box-shadow var(--transition-time) cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 1.25rem 0px var(--color);
        }
        &-copy{
            position: absolute;
            right: .625rem;
            top: .625rem;
            max-width: 2.8125rem;    
            fill: var(--white);
            transition: filter var(--transition-time) cubic-bezier(0.075, 0.82, 0.165, 1);
            cursor: pointer;
            padding: .625rem;
            &:hover{
                filter: drop-shadow(0px 0px 5px var(--white));
            }
        }
        &-show{
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            cursor: url('../assets/svg/exit_svg.svg'), pointer;
            z-index: 2;
        }   
        &-exitButton{
            display: none;
            max-width: 5.625rem;
            margin: .3125rem;
            padding: .3125rem;
            @media screen and (pointer: coarse){
                display: inline-block;
            }   
        }
        &-exitSvg{
            fill: var(--white);
            cursor: pointer;
        }
    }

    .hidden{
        overflow-y: hidden;
    }
</styles>