<template>
	<div class="w-100">
		<div class="gallery-center">
			<RouterLink to="/gallery">
				<BButton variant="primary" size="lg">View Gallery</BButton>
			</RouterLink>
		</div>

		<Carousel
			:per-page="1"
			:loop="true"
			:autoplay="true"
			:autoplayTimeout="2000"
			:paginationEnabled="false"

		>
			<Slide v-for="(slide, index) in data.slides" :key="index">
				<img :src="slide" class="w-100">
			</Slide>
		</Carousel>
	</div>
</template>

<script>
	// [IMPORT] //
	import { Carousel, Slide } from 'vue-carousel'

	// [IMPORT] Personal //
	import data from '../../defaults/components/home/GalleryPreview'

	export default {
		components: {
			Carousel,
			Slide
		},

		data() {
			return {
				data: data,
			}
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