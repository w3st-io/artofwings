<template>
	<BRow>
		<BCol cols="12">
			<h2 class="text-dark">Our Flavors</h2>
		</BCol>

		<BCol cols="2">
			<BButton
				variant="primary"
				size="sm"
				class="h1 w-100 px-0 shadow"
				@click="decrementValue()"
			><h3 class="m-0">-</h3></BButton>
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
					class="mx-auto"
					@change="goToSlide()"
				/>
			</div>
		</BCol>

		<BCol cols="2">
			<BButton
				variant="primary"
				size="sm"
				class="w-100 px-0 shadow"
				@click="incrementValue()"
			><h3 class="m-0">+</h3></BButton>
		</BCol>

		<BCol cols="12">
			<!-- Tiny Slider -->
			<VueTinySlider ref="slider" v-bind="slider.options">
				<div v-for="(slide, index) in slides" :key="index">
					<mark
						class="h2 m-0 px-5 py-0 text-light"
						:style="'background-color: rgb(' + spiceColor(index) + ');'"
					>{{ slide.title }}</mark>
					<br>

					<ChiliPepperSVG
						:color="'rgb(' + spiceColor(index) + ')'"
						style="max-width: 180px;"
					/>	
				</div>
			</VueTinySlider>
		</BCol>
	</BRow>
</template>

<script>
	// [IMPORT] //
	import VueSlider from 'vue-slider-component'
	import VueTinySlider from 'vue-tiny-slider'

	// [IMPORT] Personal //
	import ChiliPepperSVG from '@/components/svgs/ChiliPepper'

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
			ChiliPepperSVG,
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
						title: 'General Tso',
						description: '',
					},
					{
						title: 'Mojita Lime',
						description: '',
					},
					{
						title: 'Buffalo Dry Rub',
						description: '',
					},
					{
						title: 'Buffalo Mild',
						description: '',
					},
					{
						title: 'Teriyaki Sauce',
						description: '',
					},
					{
						title: 'Lousiana Sauce',
						description: '',
					},
					{
						title: 'Korean BBQ',
						description: '',
					},
					{
						title: 'Ragin\' Cajun',
						description: '',
					},
					{
						title: 'Mango Habanero',
						description: '',
					},
					{
						title: 'Knockout',
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
				const B = 64

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