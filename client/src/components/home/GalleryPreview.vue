<template>
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
				v-for="(col, index) in data.r1.cx"
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
</template>

<script>
	import data from '../../defaults/components/home/GalleryPreview'

	export default {
		data() {
			return {
				data: data	
			}
		},
	}
</script>

<style lang="scss">
	.gallery-center {
		z-index: 100;
		position: absolute;
		top: 50%;
		top: 240px;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>