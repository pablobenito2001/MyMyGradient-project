<template>
    <header class="Header">
        <div class="Header-box">
            <img :src="icon" alt="mymygradient's logo" title="mymygradient's logo" class="Header-logo">
            <h1 class="Header-title"><slot name="title"/></h1>
        </div>
    </header>
</template>
<script setup>
    import icon from '../assets/svg/logo_svg.svg'
</script>
<style lang="scss" scoped>
    .Header{
        width: 100%;
        background-color: var(--black);
        &-box{
            display: flex;
            align-items: center;
            max-width: 1900px;
            padding: 1.5625rem 0;
            margin: auto;
        }
        &-logo{
            max-width: 25px;
            margin: 0 5px; 
            @media screen and (min-width: 460px) {
                max-width: 35px;
            }   
        }
        &-title{
            font-family: var(--tipo-principal);
            font-weight: 800;
            font-size: clamp(1.2em, 2vw, 1.5em);
            display: inline-block;
            color: var(--font-white);
        }
    }
</style>