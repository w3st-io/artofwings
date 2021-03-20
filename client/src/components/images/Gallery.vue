<template>
	<BRow>
		<BCol
			v-for="(array, index)
			in imageChoppedArray"
			:key="index"
			cols="12" sm="6" md="4" lg="3" xl="2"
			class="p-1"
		>
			<viewer
				:options="{ title: false, transition: false, }"
				class="text-center"
			>
				<img
					v-for="(img, index) in array"
					:key="index"
					:src="img"
					alt="Image Here"
					class="w-100 py-1"
				>
			</viewer>
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
				// [INIT] Const //
				const imageLimitPerCol = Math.ceil(images.length / 6)

				// [INIT] //
				let i = 0
				let tempArray = []
				let choppedArray = []

				// [FOREACH] //
				images.forEach(image => {
					if (i >= imageLimitPerCol) {
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