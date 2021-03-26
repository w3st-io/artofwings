<template>
	<BRow>
		<BCol cols="1" class="m-0 p-0">
			<BButton
			variant="primary"
			id="prevButton"
			class="mt-5 px-0 w-100 shadow"
			style="max-width: 64px;"
			><ArrowLeftIcon /></BButton>
		</BCol>

		<!-- All Sliders -->
		<BCol cols="10" class="my-slider">
			<!-- lg -->
			<VueTinySlider ref="slider" v-bind="sliders[0].options" :class="sliders[0].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100 px-5 shadow">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>

			<!-- md -->
			<VueTinySlider ref="slider" v-bind="sliders[1].options" :class="sliders[1].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100 shadow">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>

			<!-- sm -->
			<VueTinySlider ref="slider" v-bind="sliders[2].options" :class="sliders[2].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100 shadow">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>

			<!-- xs -->
			<VueTinySlider ref="slider" v-bind="sliders[3].options" :class="sliders[3].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100 shadow">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>
		</BCol>

		<BCol cols="1" class="m-0 p-0">
			<BButton
				variant="primary"
				id="nextButton"
				class="mt-5 px-0 w-100 shadow"
				style="max-width: 64px;"
			><ArrowRightIcon /></BButton>
		</BCol>
	</BRow>
</template>

<script>
	// [IMPORT] //
	import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons'
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		props: {
			slides: {
				type: Array,
				required: true
			}
		},

		components: {
			ArrowLeftIcon,
			ArrowRightIcon,
			VueTinySlider,
		},

		data() {
			const prevButton = '#prevButton'
			const nextButton = '#nextButton'
			const autoplayTimeout = 5000

			return {
				sliders: [
					// LG
					{
						class: 'd-none d-lg-block my-3 px-3',
						options: {
							container: '.my-slider',
							items: 3,
							gutter: 20,
							nav: false,
							controls: true,
							prevButton: prevButton,
							nextButton: nextButton,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: autoplayTimeout,
						},
					},
					// MD
					{
						class: 'd-none d-md-block d-lg-none my-3 px-3',
						options: {
							items: 2,
							gutter: 20,
							nav: false,
							controls: true,
							prevButton: prevButton,
							nextButton: nextButton,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: autoplayTimeout,
						},
					},
					// SM
					{
						class: 'd-none d-sm-block d-md-none my-3 px-3',
						options: {
							items: 1,
							gutter: 20,
							nav: false,
							controls: true,
							prevButton: prevButton,
							nextButton: nextButton,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: autoplayTimeout,
						},
					},
					// XS
					{
						class: 'd-block d-sm-none my-3 px-3',
						options: {
							items: 1,
							gutter: 20,
							nav: false,
							controls: true,
							prevButton: prevButton,
							nextButton: nextButton,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: autoplayTimeout,
						},
					},
				],
			}
		},

		methods: {
			goToSlide() {
				//VueTinySlider.goTo(1)

				//document.getElementById('slider').goTo(1)

				this.$refs.slider.slider.goTo(0)
			},
		},
	}
</script>

<style lang="scss">
	.image { max-width: 100%; }
</style>