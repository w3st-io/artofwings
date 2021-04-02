<template>
		<BContainer fluid class="p-0 bg-light">
			<div class="py-5 bg-light suggestion-container">
				<BContainer class="my-3 text-center">
					<BCard bg-variant="light" class="shadow">
						<!-- Title -->
						<h1 class="mb-3 text-center text-dark">
							Combos & Deals
						</h1>

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
									<div v-for="(slide, index) in slides" :key="index" :class="contentClass">
										<img :src="slide.image" :class="imageClass">

										<h3 :class="titleClass">{{ slide.title }}</h3>

										<p>{{ slide.description }}</p>

										<BButton :variant="buttonColor" size="lg" class="">
											Check it Out
										</BButton>
									</div>
								</VueTinySlider>

								<!-- md -->
								<VueTinySlider ref="slider" v-bind="sliders[1].options" :class="sliders[1].class">
									<div v-for="(slide, index) in slides" :key="index" :class="contentClass">
										<img :src="slide.image" :class="imageClass">

										<h3 :class="titleClass">{{ slide.title }}</h3>

										<p>{{ slide.description }}</p>

										<BButton :variant="buttonColor" size="lg" class="">
											Check it Out
										</BButton>
									</div>
								</VueTinySlider>

								<!-- sm -->
								<VueTinySlider ref="slider" v-bind="sliders[2].options" :class="sliders[2].class">
									<div v-for="(slide, index) in slides" :key="index" :class="contentClass">
										<img :src="slide.image" :class="imageClass">

										<h3 :class="titleClass">{{ slide.title }}</h3>

										<p>{{ slide.description }}</p>

										<BButton :variant="buttonColor" size="lg" class="">
											Check it Out
										</BButton>
									</div>
								</VueTinySlider>

								<!-- xs -->
								<VueTinySlider ref="slider" v-bind="sliders[3].options" :class="sliders[3].class">
									<div v-for="(slide, index) in slides" :key="index" :class="contentClass">
										<img :src="slide.image" :class="imageClass">

										<h3 :class="titleClass">{{ slide.title }}</h3>

										<p>{{ slide.description }}</p>

										<BButton :variant="buttonColor" size="lg" class="">
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
					</BCard>
				</BContainer>
			</div>
		</BContainer>
	
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
							gutter: 60,
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

				imageClass: 'w-100 rounded-lg image',
				contentClass: 'content',
				titleClass: 'my-1 text-center font-weight-bold text-primary',
				buttonColor: 'primary',
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
	@import '../../assets/styles/bootstrap-override.scss';

	.image {
		max-width: 100%;

		&:hover {
			@extend .shadow;
		}
	}

	.content {
		max-width: 100%;
		transition: 0.5s;

		&:hover {
			transform: translate(0px, -10px);
		}
	}

	.suggestion-container {
		width: 100%;
		
		background-image: url('../../assets/media/pages/index/bd.png');
		background-repeat: repeat;
		background-size: 20%;

		-webkit-animation-name: slide;
		-webkit-animation-duration: 100s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@-webkit-keyframes slide {
		from { background-position: left 0; }
		to { background-position: right 100%; }
	}

	@-moz-keyframes slide {
		from { background-position: 0%; }
		to { background-position: 100%; }
	}
</style>