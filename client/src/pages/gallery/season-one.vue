<template>
	<BContainer fluid class="my-3">
		<h1 class="text-center text-primary">Gallery</h1>

		<Gallery :images="data.images" />
	</BContainer>
</template>

<script>
	import Gallery from '../../components/images/Gallery'
	import data from '../../defaults/pages/gallery/season-one'

	export default {
		components: {
			Gallery
		},

		data() {
			return {
				data: data,
			}
		},
	}
</script>