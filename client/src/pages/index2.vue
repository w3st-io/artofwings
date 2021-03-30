<template>
	<div class="mb-5">
		<!-- Hero -->
		<BContainer fluid class="py-2 text-center">
			<Hero
				:centerImg="pageData.cnt1.heroCenterImg"
				:backgroundImgs="pageData.cnt1.heroBackgoundImgs"
				class="px-1"
			/>
		</BContainer>

		<!-- SugggestionConveyor -->
		<BContainer fluid class="m-0 py-5 bg-light">
			<BContainer class="m3 text-center">
				<SuggestionConveyor :slides="pageData.cnt2.slides" />
			</BContainer>
		</BContainer>

		<!-- Sections -->
		<BContainer fluid class="m-0 bg-light">
			<BContainer class="py-5 text-center">
				<BRow>
					<BCol cols="12" md="6" lg="4" class="mb-3">
						<FlavorSlider class="w-100" />
					</BCol>

					<BCol cols="12" md="6" lg="4" class="mb-3">
						<GalleryPreview
							:slideImgs="pageData.cnt3.r1.c2.slideImgs"
							class="w-100"
						/>
					</BCol>

					<BCol cols="12" md="6" lg="4" class="mb-3">
						<BestSellers />
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<!-- Chicken Wing Gates -->
		<BContainer fluid class="text-center">
			<BRow class="mb-3 bg-white">
				<BCol cols="3" class="p-0 d-none d-md-block">
					<img :src="imageLeft" class="w-100" >
				</BCol>

				<BCol cols="6" md="3" class="text-center" data-aos="fade">
					<BButton size="lg" class="w-100 my-5">Check Out the Menu</BButton>
				</BCol>
				<BCol cols="6" md="3" class="text-center" data-aos="fade">
					<BButton size="lg" class="w-100 my-5">Order Now</BButton>
				</BCol>

				<BCol cols="3" class="p-0 d-none d-md-block" data-aos="fade">
					<img :src="imageRight" class="w-100">
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import BestSellers from '@/components/home/BestSellers'
	import FlavorSlider from '@/components/home/FlavorSlider'
	import GalleryPreview from '@/components/home/GalleryPreview'
	import SuggestionConveyor from '@/components/home/SuggestionConveyor'
	import Hero from '@/components/home/Hero'
	import pageData from '@/defaults/pages'

	export default {
		components: {
			BestSellers,
			GalleryPreview,
			FlavorSlider,
			SuggestionConveyor,
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