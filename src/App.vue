<script setup>
	import Header from './components/Header.vue';
	import CardWrapper from './components/CardWrapper.vue';
</script>

<template>
	<Header color_1="F7941E" color_2="004E8F"/>
	<CardWrapper />
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
	}
</style>
