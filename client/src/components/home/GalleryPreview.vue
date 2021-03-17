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
				><h3 class="m-0">View Gallery</h3></BButton>
			</div>
			<BRow>
				<BCol
					v-for="(col, index) in cols"
					:key="index"
					cols="6" sm="6" md="4" lg="3" xl="2"
					class="px-1"
					:class="colClass[index]"
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
				data: data,

				cols: [
					[ data[0], data[1] ],
					[ data[2], data[3] ],
					[ data[4], data[5] ],
					[ data[6], data[7] ],
					[ data[8], data[9] ],
					[ data[10], data[11] ]
				],

				colClass: [
					'd-block',
					'd-block',
					'd-none d-md-block',
					'd-none d-lg-block',
					'd-none d-xl-block',
					'd-none d-xl-block',
				],
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