<template>
	<BRow class="py-3 bg-light shadow">
		<BCol cols="12">
			<h3 class="text-dark">Our Flavors</h3>
		</BCol>

		<BCol cols="3">
			<BButton
				variant="primary"
				size="sm"
				class="h1 p-0 rounded-circle shadow"
				style="width: 42px; height: 42px;"
				@click="decrementValue()"
			><h2 class="m-0">-</h2></BButton>
		</BCol>

		<BCol cols="6" class="p-0">
			<div class="h-100 py-2 text-center">
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

		<BCol cols="3">
			<BButton
				variant="primary"
				size="sm"
				class="h1 p-0 rounded-circle shadow"
				style="width: 42px; height: 42px;"
				@click="incrementValue()"
			><h2 class="m-0">+</h2></BButton>
		</BCol>

		<BCol cols="12" class="my-2">
			<!-- Tiny Slider -->
			<VueTinySlider ref="slider" v-bind="slider.options">
				<div v-for="(slide, index) in slides" :key="index">
					<div class="p-3">
						<div
							class="p-1 rounded-lg shadow"
							:style="'background-color: rgb(' + spiceColor(index) + ');'"
						>
							<h1 class="m-0 p-0 text-light font-weight-bold">
								{{ slide.title }}
							</h1>

							<ChiliPepperSVG color="white" style="max-width: 100px;" />
						</div>
					</div>
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
				const B = 0

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