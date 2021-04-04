<template>
	<BContainer class="py-3">
		<BCard>
			<BRow v-if="loading">
				<BCol cols="12">
					<Loading />
				</BCol>
			</BRow>

			<BRow v-if="!loading && product != {}">
				<BCol cols="12" class="mb-3">
					<h2 class="text-center font-weight-bold text-primary">
						Add Item to Your Order
					</h2>
				</BCol>

				<BCol cols="12" sm="12" md="5" lg="3" xl="3" class="mb-3 px-2">
					<img :src="product.image" class="w-100 rounded shadow">
				</BCol>

				<BCol cols="12" sm="12" md="7" lg="5" xl="5" class="mb-5">
					<h2 class="mb-3 text-primary">{{ product.title }}</h2>
					<h5 class="mb-3">{{ product.description }}</h5>
					<h4 class="mb-3 price">Price: {{ product.cost.toFixed(2) }}</h4>
				
					<BButton
						variant="secondary"
						size="lg"
					>+ Add to Order</BButton>
				</BCol>

				<!-- For Every productVariant -->
				<BCol cols="12" sm="12" md="12" lg="4" xl="4" class="">
					<div
						v-for="(productVariant, i) in product.productVariants"
						:key="i"
						class=""
					>
						<!-- Labels -->
						<label :for="productVariant.name">
							<h3 class="text-secondary">{{ productVariant.name }}</h3>
							<h5 class="text-dark">{{ productVariant.description }}</h5>
						</label>
						<br>

						<select
							v-model="order.productVariant[i]"
							:name="productVariant.name"
							class="mb-3"
						>
							<!-- For Every option -->
							<option
								v-for="(option, i) in productVariant.options"
								:key="i"
								:value="option.name"
							>{{ option.name }}</option>
						</select>
					</div>
					{{ order }}
				</BCol>
			</BRow>
		</BCard>

		<BRow v-if="error" class="mb-3">
			<h3 class="text-danger">{{ error }}</h3>
		</BRow>
	</BContainer>
</template>

<script>
	import Loading from '@/components/inform/Loading'
	import router from '@/router'
	import PageService from '@/services/PageService'
	
	export default {
		components: {
			Loading,
		},

		data() {
			const product_id = this.$route.params.product_id

			return {
				product_id: product_id,
				pageData: {},
				product: {},
				reqData: {},
				order: {
					product: product_id,
					productVariant: [],
				},
				option: [],
				loading: true,
				error: '',
			}
		},

		async created() {
			if (!localStorage.usertoken) { router.push({ name: 'user_login' }) }

			await this.getPageData()

			this.log()
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_order_add({
					product_id:	this.product_id
				})

				if (this.reqData.status) {
					this.pageData = this.reqData
					this.product = this.reqData.product
				}
				else { this.error = this.reqData.message }

				this.loading = false
			},

			log() {
				console.log('%%% [PAGE] order_add %%%')
				console.log('pageData:', this.pageData)
				console.log('product:', this.product)
			},
		}
	}
</script>