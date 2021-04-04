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
		<SuggestionConveyor :slides="pageData.cnt2.slides" />
			
		<!-- Second Hero -->
		<BContainer fluid class="p-0 text-center">
			<SecondHero
				:video="pageData.cnt3.video"
				:link="pageData.companyInfo.orderingSystemLink"
			/>
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
					<FlavorSlider class="" />
				</BCol>
			</BRow>
		</BContainer>

		<!-- Chicken Wing Gates -->
		<BContainer fluid class="text-center">
			<BRow class="mb-3 bg-white">
				<BCol cols="3" class="p-0 d-none d-md-block">
					<img :src="pageData.cnt5.imgLeft" class="w-100" >
				</BCol>

				<BCol cols="12" md="3" class="text-center" data-aos="fade">
					<RouterLink to="/menu">
						<BButton size="lg" class="mb-3 p-4 w-100">
							Check Out the Menu
						</BButton>
					</RouterLink>
				</BCol>
				<BCol cols="12" md="3" class="text-center" data-aos="fade">
					<a :href="pageData.companyInfo.orderingSystemLink">
						<BButton size="lg" class="mb-3 p-4 w-100">Order Now</BButton>
					</a>
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