<template>
	<BContainer class="py-5">
		<BCard bg-variant="none" class="shadow">
			<BRow>
				<!-- Title -->
				<BCol cols="12" class="mb-3 text-left">
					<h2 class="font-weight-bold text-center text-primary">Gallery</h2>
				</BCol>

				<!-- Season 1 -->
				<BCol
					cols="12" sm="6"
					class="mb-4 px-2 py-0"
					data-aos="fade-up"
					data-aos-delay="300"
				>
					<RouterLink to="/gallery/season-one" class="icon">
						<div class="gallery-center">
							<h2 class="text-secondary label">Season One</h2>
						</div>

						<img :src="data.seasonOneImg" class="w-100 rounded-lg">
					</RouterLink>
				</BCol>

				<!-- Season 2 -->
				<BCol
					cols="12" sm="6"
					class="mb-4 px-2 py-0"
					data-aos="fade-up"
					data-aos-delay="600"
				>
					<RouterLink to="/gallery/season-two" class="icon">
						<div class="gallery-center">
							<h2 class="text-secondary label">Season Two</h2>
						</div>

						<img :src="data.seasonTwoImg" class="w-100 rounded-lg">
					</RouterLink>
				</BCol>

				<!-- Satisfied Customers -->
				<BCol
					cols="12"
					class="mb-4 px-2"
					data-aos="fade-up"
					data-aos-delay="900"
				>
					<RouterLink to="/gallery/satisfied-customers" class="icon">
						<div class="gallery-center">
							<h2 class="text-secondary label">Satisfied Customers</h2>
						</div>

						<img :src="data.satisfiedCustomersImg" class="w-100 rounded-lg">
					</RouterLink>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import data from '@/defaults/pages/gallery'

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