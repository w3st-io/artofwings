<template>
	<div
		class="bg-light component"
		:class="{ 'd-none': !show }"
	>
		<img :src="img" class="w-100">

		<BButton
			variant="dark"
			class="skip-button"
			@click="end()"
		>Skip</BButton>
	</div>
</template>

<script>
	//import { useWindowSize } from 'vue-window-size'

	export default {
		data() {
			return {
				show: true,
				img: require('../assets/media/intro.gif')
			}
		},

		methods: {
			end() {
				this.show = false
				document.body.classList.remove('loading-no-scroll')
				this.$store.state.showIntro = false
			}
		},

		created() {
			if (window.innerWidth < 1200) { this.end() }

			document.body.classList.add('loading-no-scroll')

			setTimeout(() => { this.end() }, 11000)
		},
	}
</script>

<style lang="scss" scoped>
	.component {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100000;
		height: 100vh;
		width: 100%;
	}

	.skip-button {
		position: absolute;
		top: 90%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100001;
	}
</style>