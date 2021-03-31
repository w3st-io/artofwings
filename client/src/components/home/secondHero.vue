<template>
	<div class="w-100 content-container" :style="sharedStyle">
		<VideoBG :sources="[video]" :style="sharedStyle" />
		
		<div class="center-content filter">
			<div class="center-content">
				<mark class="h1 text-center bg-primary text-light">
					Ready <span class="text-secondary">to</span> Order?
				</mark>
				<br><br>
				<BButton variant="primary" class="shadow">Order Now!</BButton>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			img: {
				type: String,
				required: true,
			},

			video: {
				default: require('../../assets/media/pages/index/2ndhero.mp4')
			}
		},

		data() {
			return {
				sharedStyle: 'height: 360px; overflow: hidden;',
			}
		},
	}
</script>

<style scoped>
	.content-container {
		position: relative;
	}

	/* Make the image responsive */
	.content-container img {
		width: 100%;
		height: auto;
	}

	/* Style the center-content and place it in the middle of image */
	.content-container .center-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
	}

	.filter {
		z-index: 1000;
		width: 100%;
		height: 360px;
		background-color: rgba(0, 0, 0, 0.623);
	}
</style>