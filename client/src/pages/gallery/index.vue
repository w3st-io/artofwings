<template>
	<BContainer class="my-3">
		<BRow>
			<!-- Season 1 -->
			<BCol cols="12" sm="6" md="4">
				<RouterLink to="/gallery/season-one" class="icon">
					<div class="gallery-center">
						<h2 class="text-secondary label">Season One</h2>
					</div>

					<img :src="data.seasonOneImg" alt="Img" class="w-100">
				</RouterLink>
			</BCol>

			<!-- Season 2 -->
			<BCol cols="12" sm="6" md="4">
				<RouterLink to="/gallery/season-two" class="icon">
					<div class="gallery-center">
						<h2 class="text-secondary label">Season Two</h2>
					</div>

					<img :src="data.seasonTwoImg" alt="Img" class="w-100">
				</RouterLink>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import data from '../../defaults/pages/gallery'

	export default {
		data() {
			return {
				data: data,
			}
		},
	}
</script>

<style lang="scss">
	.label {
		background-color: rgba(0, 0, 0, 0.48);
	}

	.icon {
		img {
			transition: .6s;
			filter: grayscale(100%);
		}

		&:hover { img { filter: grayscale(0%); } } 
	}
</style>