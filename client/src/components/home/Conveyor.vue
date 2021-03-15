<template>
	<div class="controls" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
		<BButton
			variant="primary"
			data-controls="prev"
			aria-controls="customize"
			tabindex="-1"
			class="prev"
		>Prev</BButton>	

		<BButton
			variant="primary"
			data-controls="next"
			aria-controls="customize"
			tabindex="-1"
			class="next"
		>Next</BButton>

		<!-- All Sliders -->
		<div v-for="(slider, index) in sliders" :key="index">
			<VueTinySlider v-bind="slider.options" :class="slider.class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100">Check it Out</BButton>
				</div>
			</VueTinySlider>
		</div>
	</div>
</template>

<script>
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		props: {
			totalOnLg: {
				type: Number,
				default: 4
			},
		},

		components: {
			VueTinySlider,
		},

		data() {
			return {
				slides: [
					{
						title: 'Dish 1',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
						image: require('../../assets/images/dishes/506A3683.jpg'),
					},
					{
						title: 'Dish 2',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
						image: require('../../assets/images/dishes/506A3697.jpg'),
					},
					{
						title: 'Dish 3',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
						image: require('../../assets/images/dishes/506A3697.jpg'),
					},
					{
						title: 'Dish 4',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
						image: require('../../assets/images/dishes/506A3697.jpg'),
					},
					{
						title: 'Dish 5',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
						image: require('../../assets/images/dishes/506A3697.jpg'),
					},
				],
				sliders: [
					// LG
					{
						class: 'd-none d-lg-block my-3',
						options: {
							items: this.totalOnLg,
							gutter: 160,
							nav: false,
							controls: true,
							controlsContainer: "#customize-controls",
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 5000,
						},
					},
					// MD
					{
						class: 'd-none d-md-block d-lg-none my-3',
						options: {
							items: this.totalOnLg - 1,
							gutter: 20,
							nav: false,
							controls: false,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 5000,
						},
					},
					// SM
					{
						class: 'd-none d-sm-block d-md-none my-3',
						options: {
							items: this.totalOnLg - 2,
							gutter: 20,
							nav: false,
							controls: false,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 5000,
						},
					},
					// XS
					{
						class: 'd-block d-sm-none my-3',
						options: {
							items: this.totalOnLg - 3,
							gutter: 20,
							nav: false,
							controls: false,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 5000,
						},
					},
				],
			}
		},
	}
</script>

<style lang="scss">
	.image { max-width: 100%; }
</style>