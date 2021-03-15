<template>
	<BRow>
		<BCol cols="1" class="m-0 p-0">
			<BButton
			variant="primary"
			id="prevButton"
			class="mt-5 px-0 w-100"
			style="max-width: 100px;"
			><ArrowLeftIcon /></BButton>
		</BCol>

		<!-- All Sliders -->
		<BCol cols="10" class="my-slider">
			<!-- lg -->
			<VueTinySlider v-bind="sliders[0].options" :class="sliders[0].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>

			<!-- md -->
			<VueTinySlider v-bind="sliders[1].options" :class="sliders[1].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>

			<!-- sm -->
			<VueTinySlider v-bind="sliders[2].options" :class="sliders[2].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>

			<!-- xs -->
			<VueTinySlider v-bind="sliders[3].options" :class="sliders[3].class">
				<div v-for="(slide, index) in slides" :key="index">
					<img :src="slide.image" class="w-100 rounded">

					<h3>{{ slide.title }}</h3>

					<p>{{ slide.description }}</p>

					<BButton variant="primary" size="lg" class="w-100">
						Check it Out
					</BButton>
				</div>
			</VueTinySlider>
		</BCol>

		<BCol cols="1" class="m-0 p-0">
			<BButton
				variant="primary"
				id="nextButton"
				class="mt-5 px-0 w-100"
				style="max-width: 100px;"
			><ArrowRightIcon /></BButton>
		</BCol>
	</BRow>
</template>

<script>
	import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons'
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		props: {
			totalOnLg: {
				type: Number,
				default: 4
			},
		},

		components: {
			ArrowLeftIcon,
			ArrowRightIcon,
			VueTinySlider,
		},

		data() {
			return {
				sliders: [
					// LG
					{
						class: 'd-none d-lg-block my-3',
						options: {
							container: '.my-slider',
							items: 3,
							gutter: 160,
							nav: false,
							controls: true,
							prevButton: '#prevButton',
							nextButton: '#nextButton',
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
							items: 3,
							gutter: 20,
							nav: false,
							controls: true,
							prevButton: '#prevButton',
							nextButton: '#nextButton',
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
							items: 2,
							gutter: 20,
							nav: false,
							controls: true,
							prevButton: '#prevButton',
							nextButton: '#nextButton',
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
							items: 1,
							gutter: 20,
							nav: false,
							controls: true,
							prevButton: '#prevButton',
							nextButton: '#nextButton',
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 5000,
						},
					},
				],

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
			}
		},
	}
</script>

<style lang="scss">
	.image { max-width: 100%; }
</style>