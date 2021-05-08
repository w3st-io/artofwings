<template>
	<div
		class="bg-light component"
		:class="{ 'd-none': !show }"
	>
		<img :src="img" class="w-100">

		<BButton
			variant="dark"
			class="skip-button"
			@click="skip()"
		>Skip</BButton>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				img: require('../assets/media/intro.gif')
			}
		},

		methods: {
			skip() {
				this.show = false
				document.body.classList.remove('loading-no-scroll')
			}
		},

		created() {
			document.body.classList.add('loading-no-scroll')

			setTimeout(() => {
				this.show = false
				document.body.classList.remove('loading-no-scroll')
			}, 11000)
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