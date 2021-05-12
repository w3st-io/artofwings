<template>
	<div class="">
		<!-- Intro -->
		<Intro v-if="$store.state.showIntro" />

		<!-- Hero -->
		<BContainer fluid class="py-2 text-center bg-white">
			<Hero
				:centerImg="pageData.cnt1.heroCenterImg"
				:backgroundImgs="pageData.cnt1.heroBackgoundImgs"
				class="px-1"
			/>
		</BContainer>

		<!-- SuggestionConveyor -->
		<SuggestionConveyor :slides="pageData.cnt2.slides" />

		<!-- Review and Social Media -->
		<BContainer fluid class="py-4 bg-white">
			<BRow>
				<BCol cols="12" md="6">
					
				</BCol>

				<BCol cols="12" md="6">
					<InstagramPosts />
				</BCol>
			</BRow>
		</BContainer>
			
		<!-- Second Hero -->
		<BContainer fluid class="p-0 text-center">
			<SecondHero
				:video="pageData.cnt3.video"
				:link="pageData.companyInfo.orderingSystemLink"
			/>
		</BContainer>
	
		<!-- Sections -->
		<BContainer fluid class="bg-white">
			<BContainer class="py-5 text-center">
				<BRow>
					<BCol cols="12" md="6" lg="4" class="mb-3">
						<GalleryPreview
							:slideImgs="pageData.cnt4.r1.c2.slideImgs"
							class="w-100 shadow"
						/>
					</BCol>

					<BCol cols="12" md="6" lg="4" class="mb-3">
						<BestSellers class=""/>
					</BCol>
					
					<BCol cols="12" md="6" lg="4" class="mb-3">
						<FlavorSlider class="" />
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<!-- Chicken Wing Gates -->
		<BContainer fluid class="py-5 text-center bg-light">
			<BRow>
				<BCol cols="3" class="p-0 d-none d-md-block">
					<img :src="pageData.cnt5.imgLeft" class="w-100" >
				</BCol>

				<BCol cols="12" md="3" class="text-center" data-aos="fade">
					<RouterLink to="/menu">
						<BButton variant="primary" size="lg" class="mb-3 p-4 w-100">
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
	import Intro from '@/components/Intro'
	import SecondHero from '@/components/home/secondHero'
	import BestSellers from '@/components/home/BestSellers'
	import FlavorSlider from '@/components/home/FlavorSlider'
	import GalleryPreview from '@/components/home/GalleryPreview'
	import SuggestionConveyor from '@/components/home/SuggestionConveyor'
	import Hero from '@/components/home/Hero'
	import InstagramPosts from '@/components/SocialMedia/InstagramPosts'
	import pageData from '@/defaults/pages'

	export default {
		components: {
			Intro,
			SecondHero,
			BestSellers,
			GalleryPreview,
			FlavorSlider,
			SuggestionConveyor,
			Hero,
			InstagramPosts,
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