<template>
		<BContainer fluid class="p-0">
			<div class="py-4">
				<BContainer class="my-3 text-center">
					<BCard bg-variant="none" class="shadow">
						<BRow>
							<!-- !XL Title -->
							<BCol cols="12" class="d-block d-xl-none mb-3">
								<div class="">
									<span class="h3 px-2 text-center text-light bg-primary">
										Combos <span class="text-secondary">&</span> Deals
									</span>
								</div>
							</BCol>

							<!-- Left Button -->
							<BCol cols="6" xl="4" class="mb-3 mb-xl-5">
								<BButton
									variant="outline-light"
									id="prevButton"
									class="px-0 w-100 text-dark"
								>
									<ArrowLeftIcon size="3x" class="d-none d-xl-block m-auto" />
									<ArrowLeftIcon size="2.5x" class="d-block d-xl-none m-auto" />
								</BButton>
							</BCol>

							<!-- XL Title -->
							<BCol cols="4" class="d-none d-xl-block mb-3 mb-xl-5">
								<div class="mt-2 rounded">
									<span class="h1 px-2 text-center text-light bg-primary shadow">
										Combos <span class="text-secondary">&</span> Deals
									</span>
								</div>
							</BCol>

							<!-- Right Button -->
							<BCol cols="6" xl="4" class="mb-3 mb-xl-5">
								<BButton
									variant="outline-light"
									id="nextButton"
									class="px-0 w-100 text-dark"
								>
									<ArrowRightIcon size="3x" class="d-none d-xl-block m-auto" />
									<ArrowRightIcon size="2.5x" class="d-block d-xl-none m-auto" />
								</BButton>
							</BCol>
						</BRow>

						<BRow>
							<!-- All Sliders -->
							<BCol cols="12" class="my-slider">
								<!-- Tiny Slider -->
								<VueTinySlider ref="slider" v-bind="options">
									<div
										v-for="(slide, index) in slides"
										:key="index"
										class="content"
									>
										<img
											:src="slide.image"
											class="w-100 rounded-lg image"
										>

										<h3
											class="
												my-2
												text-center
												font-weight-bold
												text-primary
											"
										>{{ slide.title }}</h3>

										<p class="h5 font-weight-bold text-secondary">
											{{ slide.cost }}
										</p>

										<p>{{ slide.description }}</p>

										<a :href="slide.link">
											<BButton
												variant="primary"
												size="lg"
												class=""
											>Check it Out</BButton>
										</a>
									</div>
								</VueTinySlider>
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
			return {
				window: {
					width: 0,
					height: 0
				},

				options: {
					container: '.my-slider',
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
			}
		},

		created() {
			window.addEventListener('resize', this.handleResize)
			this.handleResize();
		},

		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		},

		methods: {
			handleResize() {
				this.window.width = window.innerWidth;
				this.window.height = window.innerHeight;

				// Extra small devices (portrait phones, less than 576px)
				if (this.window.width > 575.98) {
					this.options.items = 1
					this.options.gutter = 20
				}

				// Small devices (landscape phones, less than 768px)
				if (this.window.width > 767.98) {
					this.options.items = 2
					this.options.gutter = 20
				}

				// Medium devices (tablets, less than 992px)
				if (this.window.width > 991.98) {
					this.options.items = 3
					this.options.gutter = 60
				}
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
</style>