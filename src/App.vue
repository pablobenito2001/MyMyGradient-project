<script setup>
	import Header from './components/Header.vue';
	import CardWrapper from './components/CardWrapper.vue';
	import Footer from './components/Footer.vue';
</script>

<template>
	<Header color_1="F7941E" color_2="004E8F"/>
	<CardWrapper />
	<Footer />
</template>

<style lang="scss">
	:root{
		//Fonts//
		--font-white: #e2e2e2;
		--font-black: #4d4d4d;
		//Elements//
		--black-background: #1d1d1d;
		--white-background: #ffffff;
		--glass-card: #8d8d8d44; 
		--radius: .625rem; 
		--gap: .9375rem;
		--transition: 0.6s;
		--hover: #004E8F;
	}
	.Global-title{
		background: linear-gradient(90deg, #F7941E 0%, #004E8F 100%);
		-webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
		display: inline-block;
		font-size: 1.4em;
		user-select: none;
		font-weight: bold;
	}
</style>
