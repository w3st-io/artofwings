<template>
	<div class="w-100">
		<div class="gallery-center">
			<RouterLink to="/gallery">
				<BButton variant="primary" size="lg" class="shadow">
					View Gallery
				</BButton>
			</RouterLink>
		</div>

		<Carousel
			:per-page="1"
			:loop="true"
			:autoplay="true"
			:autoplayTimeout="2000"
			:paginationEnabled="false"

		>
			<Slide v-for="(img, index) in slideImgs" :key="index">
				<img :src="img" class="w-100">
			</Slide>
		</Carousel>
	</div>
</template>

<script>
	// [IMPORT] //
	import { Carousel, Slide } from 'vue-carousel'

	export default {
		props: {
			slideImgs: {
				type: Array,
				required: true
			},
		},

		components: {
			Carousel,
			Slide,
		},
	}
</script>

<style lang="scss">
	.gallery-center {
		z-index: 100;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>