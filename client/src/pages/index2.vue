<template>
	<div class="mb-5">
		<!-- Hero -->
		<BContainer fluid class="mb-3 py-2 text-center">
			<Hero />
		</BContainer>

		<hr class="bg-light">

		<!-- SugggestionConveyor -->
		<BContainer fluid class="m-0 py-3 text-center">
			<BRow>
				<BCol cols="12">
					<SuggestionConveyor />
				</BCol>
			</BRow>
		</BContainer>

		<!-- Sections -->
		<BContainer fluid class="m-0 py-3 text-center bg-light">
			<BRow>
				<BCol cols="12" md="6" lg="4">
					<FlavorSlider class="w-100" />
				</BCol>

				<BCol cols="12" md="6" lg="4">
					<GalleryPreview class="w-100" />
				</BCol>

				<BCol cols="12" md="6" lg="4">
					<h1 class="mb-3">
						<mark class="bg-primary text-light">Best Sellers</mark>
					</h1>

					<BListGroup>
						<BListGroupItem variant="secondary">Cras justo odio</BListGroupItem>
						<BListGroupItem variant="secondary">Dapibus ac facilisis in</BListGroupItem>
						<BListGroupItem variant="secondary">Morbi leo risus</BListGroupItem>
						<BListGroupItem variant="secondary">Porta ac consectetur ac</BListGroupItem>
						<BListGroupItem variant="secondary">Vestibulum at eros</BListGroupItem>
					</BListGroup>
				</BCol>
			</BRow>
		</BContainer>

		<!-- Chicken Wing Gates -->
		<BContainer fluid class="text-center">
			<BRow class="mb-3 bg-white">
				<BCol cols="3" class="p-0 d-none d-md-block">
					<img :src="imageLeft" class="w-100" >
				</BCol>

				<BCol cols="6" md="3" class="text-center">
					<BButton size="lg" class="w-100 my-5">Check Out the Menu</BButton>
				</BCol>
				<BCol cols="6" md="3" class="text-center">
					<BButton size="lg" class="w-100 my-5">Order Now</BButton>
				</BCol>

				<BCol cols="3" class="p-0 d-none d-md-block">
					<img :src="imageRight" class="w-100">
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import SuggestionConveyor from '@/components/home/SuggestionConveyor'
	import FlavorSlider from '@/components/home/FlavorSlider'
	import GalleryPreview from '@/components/home/GalleryPreview'
	import Hero from '@/components/home/Hero'
	import pageData from '@/defaults/pages/index'

	export default {
		components: {
			SuggestionConveyor,
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