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
		--gap: 15px;
		--black: #131313;
		--glass-black: #1313139f;
		--radius: .625rem; 
	}
	.Global--centerAll{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: .1875rem;
	}
	.Global--button{
		width: 100%;
		padding: 10px;
		background-color: var(--black);
		border-radius: var(--radius);
		cursor: pointer;
		transition: filter 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
		&:hover{
			filter: brightness(180%);
		}
	}
</style>
