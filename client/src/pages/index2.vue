<template>
	<div>
		<BContainer fluid class="px-0 py-5 text-center bg-info">
			<h1 class="mb-3 text-primary font-weight-bold" style="font-size: 5em;">Are you ready..</h1>
			<h1 class="mb-5 text-primary font-weight-bold">for food
				<mark class="p-0 text-light bg-primary" style="font-size: 1.5em;">awesome-ness</mark>
				?!
			</h1>

			<BButton size="lg" class="born-ready">
				<h1 class="m-0">I was born ready!!</h1>
			</BButton>
		</BContainer>

		<BContainer fluid class="px-0 text-center bg-white">
			<Conveyor />
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
	}
</script>

<style lang="scss" scoped>
	@import 'src/assets/styles/bootstrap-override.scss';

	.born-ready {
		&:hover {
			transform: translate(0, -10px);
			transition: .5s;
			@extend .shadow-lg;
		}
	}
</style>