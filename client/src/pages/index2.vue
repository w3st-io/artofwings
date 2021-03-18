<template>
	<div class="mb-5">
		<!-- Hero -->
		<BContainer fluid class="mb-3 py-2 text-center">
			<Hero />
		</BContainer>

		<hr class="bg-light">

		<!-- Conveyor -->
		<BContainer fluid class="m-0 py-3 text-center">
			<Conveyor />
		</BContainer>

		<hr class="bg-light">

		<!-- Sections -->
		<BContainer fluid class="m-0 py-3 text-center">
			<BRow>
				<BCol cols="12" md="6" lg="4">
					<h1 class="mb-3">
						<mark class="bg-dark text-light">Best Sellers</mark>
					</h1>

					<ul class="text-left">
						<li>
							<h1>Dish 2</h1>
						</li>

						<li>
							<h1>Dish 2</h1>
						</li>

						<li>
							<h1>Dish 2</h1>
						</li>
					</ul>
				</BCol>

				<BCol cols="12" md="6" lg="4">
					<FlavorSlider class="w-100" />
				</BCol>
			</BRow>
		</BContainer>

		<!-- Gallery Preview -->
		<BContainer fluid class="m-0 py-3 text-center">
			<GalleryPreview />

			<BRow class="mb-3 bg-info">
				<BCol cols="3" class="p-0 d-none d-md-block" data-aos="fade-right">
					<img :src="imageLeft" class="w-100" >
				</BCol>

				<BCol cols="6" md="3" class="text-center">
					<BButton size="lg" class="w-100 my-5">Check Out the Menu</BButton>
				</BCol>
				<BCol cols="6" md="3" class="text-center">
					<BButton size="lg" class="w-100 my-5">Order Now</BButton>
				</BCol>

				<BCol cols="3" class="p-0 d-none d-md-block" data-aos="fade-left">
					<img :src="imageRight" class="w-100">
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Conveyor from '@/components/home/Conveyor'
	import FlavorSlider from '@/components/home/FlavorSlider'
	import GalleryPreview from '../components/home/GalleryPreview'
	import Hero from '../components/home/Hero'
	import pageData from '@/defaults/pages/index'

	export default {
		components: {
			Conveyor,
			FlavorSlider,
			GalleryPreview,
			Hero,
		},

		data() {
			return {
				pageData: pageData,
				imageLeft: require('../assets/media/pages/index/ready-left.png'),
				imageRight: require('../assets/media/pages/index/ready-right.png'),
			}
		},

		methods: {
			isOdd(num) { return num % 2 },
		},
	}
</script>

<style lang="scss" scoped>
	@import 'src/assets/styles/bootstrap-override.scss';

	.born-ready {
		transition: .5s;
	}

	.born-ready {
		&:hover {
			transform: translate(0, -10px);
			@extend .shadow-lg;
		}
	}
</style>