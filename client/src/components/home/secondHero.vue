<template>
	<div class="w-100 content-container" :style="sharedStyle">
		<VideoBG :sources="[video]" :style="sharedStyle" />
		
		<div class="center-content filter">
			<div class="center-content">
				<mark class="h1 text-center bg-dark text-light">
					Ready <span class="text-secondary">to</span> Order?
				</mark>
				<br><br>

				<a :href="link">
					<BButton
						variant="primary"
						class="shadow"
					>Order Now!</BButton>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			video: {
				type: String,
				required: true,
			},

			link: {
				type: String,
				required: true,
			},
		},

		data() {
			return {
				sharedStyle: 'height: 360px; overflow: hidden;',
			}
		},
	}
</script>

<style scoped>
	.content-container { position: relative; }

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