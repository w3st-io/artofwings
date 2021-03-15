<template>
	<div>
		<BContainer fluid class="py-5 text-center">
			<BRow>
				<BCol cols="3" class="p-0" data-aos="fade-right">
					<img :src="imageLeft" class="w-100" >
				</BCol>

				<BCol cols="6" class="p-0 text-center" data-aos="fade-up">
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

		<BContainer class="px-0 text-center">
			<Conveyor :totalOnLg="3" />
		</BContainer>

		<hr class="bg-secondary">

		<BContainer fluid class="mb-3 py-0 text-center">
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

				<BCol cols="4" class="">
					<h1 class="text-secondary">Our Flavors</h1>
				</BCol>

				<BCol cols="4">
					<h1 class="mb-3 text-info"><i>Gallery</i></h1>
				</BCol>
			</BRow>
			
		</BContainer>

		<BContainer fluid class="px-0 py-0 text-center">
			
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