<template>
	<BRow>
		<BCol v-for="(array, index) in imageChoppedArray" :key="index" cols="4" class="p-1">
			<img v-for="(img, index) in array" :key="index" :src="img" class="w-100 py-1">
		</BCol>
	</BRow>
</template>

<script>
	export default {
		props: {
			images: {
				type: Array,
				required: true,
			}
		},

		data() {
			return {
				imageChoppedArray: [],
			}
		},

		created() {
			this.imageChoppedArray = this.chopImageArray(this.images)
		},

		methods: {
			chopImageArray(images) {
				// [INIT] //
				let i = 0
				let tempArray = []
				let choppedArray = []

				// [FOREACH] //
				images.forEach(image => {
					if (i >= 5) {
						i = 0

						choppedArray.push(tempArray)
						
						tempArray = []
					}
						
					tempArray.push(image)
					
					i++
				})
				
				// Push last numbers left
				if (tempArray != []) { choppedArray.push(tempArray) }

				return choppedArray
			},
		},
	}
</script>