<template>
	<BRow>
		<BCol cols="3">
			<BButton variant="primary" @click="decrementValue()">-</BButton>
			
			<div class="text-center">
				<!-- SLIDER! -->
				<VueSlider
					v-model="value"
					direction="ttb"
					:adsorb="true"
					:min="1"
					:max="5"
					:interval="1"
					class="mx-auto my-3"
					style="height: 150px;"
					@change="goToSlide()"
				/>
			</div>

			<BButton variant="primary" @click="incrementValue()">+</BButton>
		</BCol>

		<BCol cols="9">
			<!-- Tiny Slider -->
			<VueTinySlider ref="slider" v-bind="slider.options" :class="slider.class">
				<div v-for="(slide, index) in slides" :key="index">
					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>
		</BCol>
	</BRow>
</template>

<script>
	// [IMPORT] //
	import VueSlider from 'vue-slider-component'
	import VueTinySlider from 'vue-tiny-slider'
	import 'vue-slider-component/theme/antd.css'

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
					class: '',
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
						title: 'Dish 1',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
					},
					{
						title: 'Dish 2',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
					},
					{
						title: 'Dish 3',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
					},
					{
						title: 'Dish 4',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
					},
					{
						title: 'Dish 5',
						description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1',
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

	/* import theme style */
	@import '~vue-slider-component/lib/theme/default.scss';
</style>