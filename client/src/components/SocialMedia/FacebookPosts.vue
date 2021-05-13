<template>
	<div>
		<h3 class="mb-3 text-center text-light">
			<span class="p-2 bg-primary">See What Others are Saying About Us!</span>
		</h3>

		<VueTinySlider v-bind="options">
			<div v-for="(slide, i) in slides" :key="i" class="px-5">
				<img :src="slide" class="w-100">
			</div>
		</VueTinySlider>
	</div>
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
					autoplay: true,
					autoplayButtonOutput: false,
				},

				slides: [
					require('./fr1.png'),
					require('./fr2.png'),
					require('./fr3.png'),
					require('./fr4.png'),
					require('./fr5.png'),
					require('./fr6.png'),
					require('./fr7.png'),
				]
			}
		},
	}
</script>