<template>
    <header class="Header">
        <div class="Header-box">
            <div class="Header-hero">
                <img :src="icon" alt="mymygradient's logo" title="mymygradient's logo" class="Header-logo">
                <h1 class="Header-title"><slot name="title"/></h1>
            </div>
            <div class="Header-social">
                <a href="https://github.com/plaga2001/MyMyGradient" target="_blank" rel="noopener external">
                    <img :src="github" alt="github's logo">
                </a>
            </div>
        </div>
    </header>
</template>
<script setup>
    import icon from '../assets/svg/logo_svg.svg';
    import github from '../assets/svg/github_svg.svg';
</script>
<style lang="scss" scoped>
    .Header{
        width: 100%;
        background-color: var(--black);
        &-box{
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1900px;
            padding: 1.5625rem .3125rem;
            margin: auto;
        }
        &-hero{
            display: flex;
            align-items: center;
        }
        &-logo{
            max-width: 25px;
            margin: 0 5px 0 0; 
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
        &-social{
            max-width: 2.5rem;
            cursor: pointer;
        }
    }
</style>