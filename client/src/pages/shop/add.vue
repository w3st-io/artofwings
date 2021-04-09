<template>
	<BContainer class="py-5">
		<!-- Product -->
		<BRow v-if="!loading && !error && product != {}">
			<BCol cols="12" lg="8" class="mb-3">
				<BCard class="shadow">
					<BRow>
						<!-- Title -->
						<BCol cols="12" class="mb-3">
							<h2 class="text-center font-weight-bold text-primary">
								Add Item to Your Order
							</h2>
						</BCol>

						<!-- Image -->
						<BCol cols="12" sm="12" md="5" lg="3" xl="3" class="mb-3 px-3">
							<img :src="product.image" class="w-100 rounded">
						</BCol>

						<!-- Product Details -->
						<BCol cols="12" sm="12" md="7" lg="5" xl="5" class="mb-5">
							<h2 class="mb-3 text-primary">{{ product.title }}</h2>
							<p class="mb-3 h5">{{ product.description }}</p>
							<p class="mb-3 h4">Price: {{ product.cost.toFixed(2) }}</p>
						
							<BButton
								variant="secondary"
								size="lg"
							>+ Add to Order</BButton>
						</BCol>

						<!-- For Every productVariant -->
						<BCol cols="12" sm="12" md="12" lg="4" xl="4">
							<div v-for="(pv, i) in product.productVariants" :key="i">
								<!-- Labels -->
								<label :for="pv.name">
									<h3 class="text-secondary">
										{{ pv.name }}
									</h3>
									<p class="h6 text-dark">
										{{ pv.description }}
									</p>
								</label>
								<br>

								<select
									v-model="order.productVariants[i]"
									:name="pv.name"
									class="form-control mb-3"
								>
									<!-- For Every option -->
									<option
										v-for="(option, i) in pv.options"
										:key="i"
										:value="option._id"
									>{{ option.name }}</option>
								</select>

								<h5 class="my-5 text-light bg-dark">
									{{ order.productVariants }}
								</h5>
							</div>
						</BCol>

						<!-- For Every productVariant -->
						<BCol cols="12" sm="12" md="12" lg="12" xl="12">
							<h3 class="text-primary">
								Add Extras to Your Order!
							</h3>

							<div
								v-for="(pe, index) in product.productExtras"
								:key="index"
							>
								<h6 class="text-secondary">{{ pe.name }}</h6>
								
								<div v-for="(option, i) in pe.options" :key="i">
									<input
										type="checkbox"
										:name="option._id"
										class="mr-2"
										@click="extras(option._id)"
									>
									
									<label :for="option._id">
										{{ option.name }} - {{ option._id }}
									</label>
									<br>
								</div>
							</div>

							<h5 class="my-5 text-light bg-dark">
								{{ order.productExtras }}
							</h5>
						</BCol>
					</BRow>
				</BCard>
			</BCol>

			<!-- Product Additions -->
			<BCol v-if="product.productAdditions.length > 0" cols="12" lg="4">
				<BCard bg-variant="none" class="shadow">
					<div v-for="pa in product.productAdditions" :key="pa._id">
						<!-- Input -->
						<input
							v-model="order.productAddition._id"
							type="radio"
							:value="pa._id"
							@click="order.productAddition.productVariants = []"
						>

						<!-- Title -->
						<h5 class="font-weight-bold text-primary">{{ pa.name }}</h5>
						<p class="h6 text-dark">{{ pa.name }}</p>

						<div v-if="order.productAddition._id == pa._id">
							<!-- productVariants -->
							<div v-for="(pv, i) in pa.productVariants" :key="i">
								<select
									v-if="pv.options"
									v-model="order.productAddition.productVariants[i]"
									:name="pv.options"
									class="form-control mb-3"
								>
									<!-- For Every option -->
									<option
										v-for="option in pv.options"
										:key="option._id"
										:value="option._id"
									>{{ option.name }}</option>
								</select>
							</div>
						</div>
					</div>

					<h5 class="my-5 text-light bg-dark">
						{{ order.productAddition }}
					</h5>
				</BCard>
			</BCol>
		</BRow>

		<!-- Loading -->
		<BRow v-if="loading">
			<BCol cols="12">
				<BCard bg-variant="none" class="mb-3 shadow"><Loading /></BCard>
			</BCol>
		</BRow>

		<!-- Error -->
		<BRow v-if="error != ''" class="mb-3">
			<BCol cols="12">
				<BCard bg-variant="none" class="shadow">
					<p class="h3 text-danger">Error: {{ error }}</p>
				</BCard>
			</BCol>
		</BRow>
		
		<h5 class="my-5 text-light bg-dark">{{ order }}</h5>
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
					productVariants: [],
					productExtras: [],
					productAddition: {
						_id: '',
						productVariants: [],
						productExtra: [],
					},
				},
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
				this.reqData = await PageService.s_shop_add({
					product_id:	this.product_id
				})

				if (this.reqData.status) {
					this.pageData = this.reqData
					this.product = this.reqData.product
				}
				else { this.error = this.reqData.message }

				this.loading = false
			},

			extras(option_id) {
				// [INIT] //
				let updatedArray = []
				let found = false
				
				// [FLAG] //
				this.order.productExtras.forEach(pe => {
					if (pe == option_id) { found = true }
					else { updatedArray.push(pe) }
				})
				
				// Add
				if (found == false) { updatedArray.push(option_id) }

				// Update Array //
				this.order.productExtras = updatedArray
			},

			log() {
				console.log('%%% [PAGE] order_add %%%')
				console.log('pageData:', this.pageData)
				console.log('product:', this.product)
				if (this.error) { console.log('error:', this.error) }
			},
		}
	}
</script>