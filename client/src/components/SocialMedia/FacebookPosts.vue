<template>
	<div class="content-container">
		<BRow>
			<BCol cols="3" class="p-0 px-1">
				<div class="image-container">
					<img :src="img1" class="w-100">
				</div>
			</BCol>

			<BCol cols="3" class="p-0 px-1">
				<div class="image-container">
					<img :src="img2" class="w-100">
				</div>
			</BCol>

			<BCol cols="3" class="p-0 px-1">
				<div class="image-container">
					<img :src="img3" class="w-100">
				</div>
			</BCol>

			<BCol cols="3" class="p-0 px-1">
				<div class="image-container">
					<img :src="img4" class="w-100">
				</div>
			</BCol>
		</BRow>

		<div class="center-content filter">
			<div class="center-content">
				<a :href="link">
					<BButton
						variant="outline-light"
						class="custom-button"
						style="width: 100vw; max-width: 700px"
					>
						<h1 class="m-0">
							Check Out Our Instagram Page!
						</h1>
					</BButton>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			img1: require('../../assets/media/artpfwingsinsta/1.png'),
			img2: require('../../assets/media/artpfwingsinsta/2.png'),
			img3: require('../../assets/media/artpfwingsinsta/3.png'),
			img4: require('../../assets/media/artpfwingsinsta/4.png'),
		}
	},
}
</script>

<style lang="scss" scoped>
	.content-container { position: relative; }

	/* Style the center-content and place it in the middle of image */
	.content-container .center-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
	}

	.image-container {
		height: 300px !important;
		overflow: hidden;
	}

	.custom-button {
		background-color: rgba(0, 0, 0, 0.50);
	}
</style>