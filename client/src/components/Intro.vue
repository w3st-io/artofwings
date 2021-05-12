<template>
	<div
		class="bg-light component"
		:class="{ 'd-none': !show }"
	>
		<VideoBG :sources="[video]" />

		<BButton
			variant="dark"
			class="skip-button"
			@click="end()"
		>Skip</BButton>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				video: require('../assets/media/intro.mp4'),
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

			setTimeout(() => { this.end() }, 6000)
		},

		async mounted() {
			// [DEV] Dont show intro to Developer //
			if (localStorage.node_env == 'development') { this.end() }
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