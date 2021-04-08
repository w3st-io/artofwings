<template>
		<BContainer fluid class="p-0">
			<div class="py-4">
				<BContainer class="my-3 text-center">
					<BCard bg-variant="none" class="shadow">
						<!-- Title -->
						<h1 class="mb-3 text-center text-dark">
							Combos & Deals
						</h1>

						<BRow>
							<BCol cols="1" class="d-none d-md-block m-0 p-0">
								<BButton
									variant="primary"
									id="prevButton"
									class="mt-5 px-0 w-100 shadow"
									style="max-width: 64px;"
								><ArrowLeftIcon /></BButton>
							</BCol>

							<!-- All Sliders -->
							<BCol cols="12" md="10" class="my-slider">
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

							<BCol cols="1" class="d-none d-md-block m-0 p-0">
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