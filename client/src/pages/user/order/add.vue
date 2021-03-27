<template>
	<BContainer class="py-3">
		<BCard>
			<BRow>
				<BCol cols="12" class="mb-3">
					<h2 class="text-center font-weight-bold text-primary">
						Add Item to Your Order
					</h2>
				</BCol>

				<BCol cols="12" sm="12" md="6" lg="4" xl="4" class="px-2">
					<img :src="product.image" class="w-100 rounded shadow">
				</BCol>

				<BCol cols="12" sm="12" md="6" lg="8" xl="8">
					<h2 class="mb-3 text-primary">{{ product.title }}</h2>
					<h5 class="mb-3">{{ product.description }}</h5>
					<h4 class="mb-3 price">Price: {{ product.cost }}</h4>
				
					<BButton
						variant="secondary"
						size="lg"
					>+ Add to Order</BButton>
				</BCol>
			</BRow>
		</BCard>

		<BRow v-if="error" class="mb-3">
			<h3 class="text-danger">{{ error }}</h3>
		</BRow>
	</BContainer>
</template>

<script>
	import PageService from '@/services/PageService'
	
	export default {
		data() {
			const product_id = this.$route.params.product_id

			return {
				product_id: product_id,
				product: {},
				reqData: {},
				error: '',
			}
		},

		async created() {
			await this.getPageData()
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_user_order_add({
					product_id:	this.product_id
				})

				if (this.reqData.status) { this.product = this.reqData.product }
				else { this.error = this.reqData.message }
			},
		}
	}
</script>