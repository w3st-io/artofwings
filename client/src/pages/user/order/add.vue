<template>
	<BContainer class="py-3">
		<h3 class="text-primary">Add to Your Order</h3>

		{{ product_id }}
	</BContainer>
</template>

<script>
	//import PageService from '../../../services/PageService'
	
	export default {
		data() {
			const product_id = this.$route.params.product_id

			return {
				product_id: product_id,
			}
		},
	}
</script>