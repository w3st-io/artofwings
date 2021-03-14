<template>
	<div>
		<BContainer fluid class="py-5 text-center">
			<BRow>
				<BCol cols="3" class="p-0" data-aos="fade-right">
					<img :src="imageLeft" class="w-100" >
				</BCol>

				<BCol cols="6" class="text-center" data-aos="fade-up">
					<h1 class="mb-3 text-primary font-weight-bold" style="font-size: 5em;">Are you ready..</h1>
					<h1 class="mb-5 text-primary font-weight-bold">for food
						<mark class="p-0 text-light bg-primary" style="font-size: 1.5em;">awesome-ness</mark>
						?!
					</h1>

					<BButton size="lg" class="born-ready">
						<h1 class="m-0">I was born ready!!</h1>
					</BButton>
				</BCol>

				<BCol cols="3" class="p-0" data-aos="fade-left">
					<img :src="imageRight" class="w-100">
				</BCol>
			</BRow>
		</BContainer>

		<hr class="bg-primary">

		<BContainer fluid class="px-0 text-center">
			<Conveyor />
		</BContainer>

		<hr class="bg-secondary">

		<BContainer fluid class="mb-3 px-0 py-0 text-center">
			<BRow>
				<BCol cols="4">
					<h1 class="mb-3">
						<mark class="bg-dark text-light">Best Sellers</mark>
					</h1>

					<ul class="text-left">
						<li>
							<h1>Dish 2</h1>
						</li>

						<li>
							<h1>Dish 2</h1>
						</li>

						<li>
							<h1>Dish 2</h1>
						</li>
					</ul>
				</BCol>

				<BCol cols="4" class="bg-primary">
					<h1 class="text-light">Art of Our Flavors</h1>
				</BCol>

				<BCol cols="4">
					<h1 class="mb-3 text-secondary"><i>Gallery</i></h1>
				</BCol>
			</BRow>
			
		</BContainer>

		<BContainer fluid class="px-0 py-0 text-center">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.1102056357126!2d-74.03326818420827!3d40.89139737931285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa081611492f%3A0x7fca07c3b7ec3147!2s724%20Cedar%20Ln%2C%20Teaneck%2C%20NJ%2007666!5e0!3m2!1sen!2sus!4v1615710948982!5m2!1sen!2sus"
				width="100%"
				height="450"
				style="margin: 0; padding: 0; border: 0;"
				allowfullscreen=""
				loading="lazy"
			></iframe>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Conveyor from '@/components/home/Conveyor'

	export default {
		components: {
			Conveyor,
		},

		data() {
			return {
				imageLeft: require('../assets/images/pages/index/ready-left.png'),
				imageRight: require('../assets/images/pages/index/ready-right.png'),
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import 'src/assets/styles/bootstrap-override.scss';

	.born-ready {
		transition: .5s;
	}

	.born-ready {
		&:hover {
			transform: translate(0, -10px);
			@extend .shadow-lg;
		}
	}
</style>