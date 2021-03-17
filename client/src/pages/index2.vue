<template>
	<div class="my-5">
		<!-- Hero -->
		<BContainer fluid class="mb-5 text-center">
			<BRow>
				<BCol cols="3" class="p-0 d-none d-md-block" data-aos="fade-right">
					<img :src="imageLeft" class="w-100" >
				</BCol>

				<BCol cols="12" md="6" class="p-0 text-center" data-aos="fade-up">
					<img :src="pageData.cnt1.r1.c2.image" class="w-100">

					<BButton size="lg" class="born-ready">
						<h1 class="m-0">Menu</h1>
					</BButton>
				</BCol>

				<BCol cols="3" class="p-0 d-none d-md-block" data-aos="fade-left">
					<img :src="imageRight" class="w-100">
				</BCol>
			</BRow>
		</BContainer>

		<hr class="bg-primary">

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
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import FlavorSlider from '@/components/home/FlavorSlider'
	import Conveyor from '@/components/home/Conveyor'
	import GalleryPreview from '../components/home/GalleryPreview'
	import pageData from '@/defaults/pages/index'

	export default {
		components: {
			FlavorSlider,
			Conveyor,
			GalleryPreview,
		},

		data() {
			return {
				pageData: pageData,
				imageLeft: require('../assets/images/pages/index/ready-left.png'),
				imageRight: require('../assets/images/pages/index/ready-right.png'),
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