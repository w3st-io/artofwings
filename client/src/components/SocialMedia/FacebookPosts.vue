<template>
	<VueTinySlider v-bind="options">
		<div v-for="(slide, i) in slides" :key="i">
			<img :src="slide[i]" class="h-100">
		</div>
	</VueTinySlider>
</template>

<script>
// [IMPORT] //
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		components: {
			VueTinySlider
		},

		data() {
			return {
				options: {
					items: 1,
					gutter: 0,
					nav: false,
					controls: false,
					loop: true,
					autoplay: false,
					autoplayButtonOutput: false,
				},

				slides: [
					require('./fr1.png'),
					require('./fr1.png'),
					require('./fr1.png'),
					require('./fr1.png'),
					require('./fr1.png'),
					require('./fr1.png'),
					require('./fr1.png'),
				]
			}
		},
	}
</script>