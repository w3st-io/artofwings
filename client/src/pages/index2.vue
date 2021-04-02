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
		<BContainer fluid class="p-0 bg-light">
			<div class="py-5 bg-light suggestion-container">
				<BContainer class="my-3 text-center">
					<!-- Title -->
					<h1 class="mb-3 text-center">
						<mark class="bg-dark text-light">Combos & Deals</mark>
					</h1>

					<SuggestionConveyor :slides="pageData.cnt2.slides" />
				</BContainer>
			</div>
		</BContainer>

		<!-- Second Hero -->
		<BContainer fluid class="p-0 text-center">
			<SecondHero :img="pageData.cnt3.img" />
		</BContainer>
	
		<!-- Sections -->
		<BContainer class="py-5 text-center">
			<BRow>
				<BCol cols="12" md="6" lg="4" class="mb-3">
					<GalleryPreview
						:slideImgs="pageData.cnt4.r1.c2.slideImgs"
						class="w-100"
					/>
				</BCol>

				<BCol cols="12" md="6" lg="4" class="mb-3">
					<BestSellers />
				</BCol>
				
				<BCol cols="12" md="6" lg="4" class="mb-3">
					<FlavorSlider class="w-100" />
				</BCol>
			</BRow>
		</BContainer>

		<!-- Chicken Wing Gates -->
		<BContainer fluid class="text-center">
			<BRow class="mb-3 bg-white">
				<BCol cols="3" class="p-0 d-none d-md-block">
					<img :src="pageData.cnt5.imgLeft" class="w-100" >
				</BCol>

				<BCol cols="6" md="3" class="text-center" data-aos="fade">
					<BButton size="lg" class="w-100 my-5">Check Out the Menu</BButton>
				</BCol>
				<BCol cols="6" md="3" class="text-center" data-aos="fade">
					<BButton size="lg" class="w-100 my-5">Order Now</BButton>
				</BCol>

				<BCol cols="3" class="p-0 d-none d-md-block" data-aos="fade">
					<img :src="pageData.cnt5.imgRight" class="w-100">
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import SecondHero from '@/components/home/secondHero'
	import BestSellers from '@/components/home/BestSellers'
	import FlavorSlider from '@/components/home/FlavorSlider'
	import GalleryPreview from '@/components/home/GalleryPreview'
	import SuggestionConveyor from '@/components/home/SuggestionConveyor'
	import Hero from '@/components/home/Hero'
	import pageData from '@/defaults/pages'

	export default {
		components: {
			SecondHero,
			BestSellers,
			GalleryPreview,
			FlavorSlider,
			SuggestionConveyor,
			Hero,
		},

		data() {
			return {
				pageData: pageData,
			}
		},

		methods: {
			isOdd(num) { return num % 2 },
		},
	}
</script>


<style scoped>
	.suggestion-container {
		width: 100%;
		
		background-image: url('../assets/media/pages/index/bd.png');
		background-repeat: repeat;
		background-size: 20%;

		-webkit-animation: linear infinite;
		-webkit-animation-name: slide;
		-webkit-animation-duration: 80s;
	}

	@-webkit-keyframes slide {
		from { background-position: 0; }
		to { background-position: 100%; }
	}

	@-moz-keyframes slide {
		from { background-position: 0%; }
		to { background-position: 100%; }
	}
</style>