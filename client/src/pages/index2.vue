<template>
	<div class="my-5">
		<!-- Hero -->
		<BContainer fluid class="mb-5 text-center">
			<BRow>
				<BCol cols="3" class="p-0 d-none d-md-block" data-aos="fade-right">
					<img :src="imageLeft" class="w-100" >
				</BCol>

				<BCol cols="12" md="6" class="p-0 text-center" data-aos="fade-up">
					<h1 class="mb-3 text-primary font-weight-bold" style="font-size: 5em;">
						The Art of Wings
					</h1>

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

		<!-- Images -->
		<BContainer fluid class="m-0 py-3 text-center">
			<BRow class="mb-5">
				<BCol cols="12" class="mb-3">
					<h1 class="text-primary">We Craft With Love</h1>
				</BCol>

				<BCol cols="12">
					<div class="p-2 bg-white gallery-center">
						<BButton
							variant="primary"
							size="lg"
						><h3 class="m-0">Check Out the Gallery</h3></BButton>
					</div>
					<BRow>
						<BCol
						v-for="(col, index) in pageData.cnt3.r1.c3.r1.cx"
						:key="index"
						cols="12" sm="6" md="4" lg="3" xl="2"
						class="px-1"
						>
							<img :src="col[0]" class="mb-2 w-100">
							<img :src="col[1]" class="mb-2 w-100">
						</BCol>
					</BRow>
				</BCol>
			</BRow>
		</BContainer>

		<!-- Sections -->
		<BContainer fluid class="m-0 py-3 text-center">
			<BRow>
				<BCol cols="12" sm="6" md="4" lg="3">
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

				<BCol cols="12" sm="6" md="4" lg="3">
					<FlavorSlider class="w-100" />
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import FlavorSlider from '@/components/home/FlavorSlider'
	import Conveyor from '@/components/home/Conveyor'
	import pageData from '@/defaults/pages/index'

	export default {
		components: {
			FlavorSlider,
			Conveyor,
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

	.gallery-center {
		z-index: 100;
		position: absolute;
		top: 50%;
		top: 240px;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>