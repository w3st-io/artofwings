<template>
	<BContainer fluid class="py-3 bg-light">
		<Gallery :images="data.images" />
	</BContainer>
</template>

<script>
	import Gallery from '@/components/images/Gallery'
	import data from '@/defaults/pages/gallery/satisfied-customers'

	export default {
		components: {
			Gallery,
		},

		data() {
			return {
				data: data,
			}
		},
	}
</script>