<template>
	<BRow>
		<BCol cols="12">
			<h1 class="text-dark">Our Flavors</h1>
		</BCol>

		<BCol cols="2">
			<BButton
				variant="primary"
				class="w-100 px-0"
				@click="decrementValue()"
			>-</BButton>
		</BCol>

		<BCol cols="8" class="p-0">
			<div class="text-center">
				<!-- SLIDER! -->
				<VueSlider
					v-model="value"
					:adsorb="true"
					:min="1"
					:max="slides.length"
					:interval="1"
					class="mx-auto my-3"
					@change="goToSlide()"
				/>
			</div>
		</BCol>

		<BCol cols="2">
			<BButton
				variant="primary"
				class="w-100 px-0"
				@click="incrementValue()"
			>+</BButton>
		</BCol>

		<BCol cols="12">
			<!-- Tiny Slider -->
			<VueTinySlider ref="slider" v-bind="slider.options">
				<div v-for="(slide, index) in slides" :key="index">
					<h1 :style="'color: rgb(' + spiceColor(index) + ');'">
						{{ slide.title }}
					</h1>
					
				</div>
			</VueTinySlider>
		</BCol>
	</BRow>
</template>

<script>
	// [IMPORT] //
	import VueSlider from 'vue-slider-component'
	import VueTinySlider from 'vue-tiny-slider'


	export default {
		props: {
			totalOnLg: {
				type: Number,
				default: 4
			},
		},

		components: {
			VueSlider,
			VueTinySlider,
		},

		data() {
			return {
				value: 1,

				slider: {
					options: {
						items: 1,
						gutter: 0,
						nav: false,
						controls: false,
						loop: true,
						autoplay: false,
						autoplayButtonOutput: false,
					},
				},

				slides: [
					{
						title: 'Plain',
						description: '',
					},
					{
						title: 'Pineapple BBQ',
						description: '',
					},
					{
						title: 'Honey BBQ',
						description: '',
					},
					{
						title: 'Honey Garlic',
						description: '',
					},
					{
						title: 'Asian Sesame',
						description: '',
					},
					{
						title: 'Asian Sesame',
						description: '',
					},
					{
						title: 'Asian Sesame',
						description: '',
					},
					{
						title: 'Asian Sesame',
						description: '',
					},
					{
						title: 'Asian Sesame',
						description: '',
					},
					{
						title: 'Asian Sesame',
						description: '',
					},
				],
			}
		},

		methods: {
			decrementValue() {
				if (this.value > 1) { this.value-- }

				this.goToSlide()
			},

			incrementValue() {
				if (this.value < this.slides.length) { this.value++ }

				this.goToSlide()
			},

			goToSlide() {
				this.$refs.slider.slider.goTo(this.value - 1)
			},

			spiceColor(index) {
				const increment = 100 / this.slides.length
				const R = (255 * (index * increment)) / 100
				const G = (255 * (100 - (index * increment))) / 100 
				const B = 68

				return `${R}, ${G}, ${B}`
			},
		},
	}
</script>

<style lang="scss">
	/* Set the theme color of the component */
	$themeColor: #db5534;

	// [IMPORT] theme style //
	@import '~vue-slider-component/lib/theme/default.scss';
</style>