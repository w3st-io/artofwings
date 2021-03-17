<template>
	<BRow>
		<BCol cols="3" class="p-0">
			<BButton
				variant="primary"
				class="p-0 rounded-circle"
				style="width: 36px; height: 36px;"
				@click="incrementValue()"
			>+</BButton>
			
			<div class="w-100 text-center">
				<!-- SLIDER! -->
				<VueSlider
					v-model="value"
					direction="btt"
					:adsorb="true"
					:min="1"
					:max="5"
					:interval="1"
					class="mx-auto my-3"
					style="height: 150px;"
					@change="goToSlide()"
				/>
			</div>

			<BButton
				variant="primary"
				class="p-0 rounded-circle"
				style="width: 36px; height: 36px;"
				@click="decrementValue()"
			>-</BButton>
		</BCol>

		<BCol cols="9">
			<!-- Tiny Slider -->
			<VueTinySlider ref="slider" v-bind="slider.options">
				<div v-for="(slide, index) in slides" :key="index" style="height: 100px;">
					<h2>{{ slide.title }}</h2>
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
						axis: "vertical",
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
				],
			}
		},

		methods: {
			decrementValue() {
				if (this.value > 1) { this.value-- }

				this.goToSlide()
			},

			incrementValue() {
				if (this.value < 5) { this.value++ }

				this.goToSlide()
			},

			goToSlide() {
				this.$refs.slider.slider.goTo(this.value - 1)
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