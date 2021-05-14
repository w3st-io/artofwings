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
		<BContainer fluid class="py-4 bg-light">
			<BContainer>
				<BRow>
					<BCol cols="12" md="6">
						<FacebookPosts />
					</BCol>

					<BCol cols="12" md="6">
						<div class="mb-5">
							<img
								:src="pageData.companyInfo.bubbleologyLogo"
								class="w-100"
							>
						</div>
						<InstagramPosts />
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>
			
		<!-- Second Hero -->
		<BContainer v-if="showSecond()" fluid class="p-0 text-center">
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
		<BContainer fluid class="d-none d-sm-block py-5 text-center bg-light">
			<BRow>
				<BCol cols="3" class="p-0 d-none d-md-block">
					<img :src="pageData.cnt5.imgLeft" class="w-100" >
				</BCol>

				<BCol cols="12" md="6" class="text-center" data-aos="fade">
					<h1 class="text-center text-primary">
						Our Mission<span style="font-family: arial !important;">..</span>
					</h1>
					<p>{{ pageData.companyInfo.companyMission }}</p>
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
	import FacebookPosts from '@/components/SocialMedia/FacebookPosts'
	import InstagramPosts from '@/components/SocialMedia/InstagramPosts'
	import pageData from '@/defaults/pages/home'

	export default {
		components: {
			Intro,
			SecondHero,
			BestSellers,
			GalleryPreview,
			FlavorSlider,
			SuggestionConveyor,
			Hero,
			FacebookPosts,
			InstagramPosts,
		},

		data() {
			return {
				pageData: pageData,
			}
		},

		methods: {
			isOdd(num) { return num % 2 },

			showSecond() {
				if (window.innerWidth > 576) {
					return true
				}
				else { return false }
			},
		},
	}
</script>