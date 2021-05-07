<template>
	<div class="custom">
		
	</div>
</template>

<script>
	export default {
		mounted () {
			document.body.classList.add('loading-no-scroll')
		},

		destroyed () {
			document.body.classList.remove('loading-no-scroll')
		}
	}
</script>

<style lang="scss" scoped>
	.custom {
		position: absolute;
		z-index: 100000;
		height: 100vh;
		width: 100%;
		background: rgba(0, 0, 0, 0.473);

		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);
	}
</style>