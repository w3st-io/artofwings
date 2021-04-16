<template>
	<BContainer class="py-5">
		<!-- Product -->
		<BRow v-if="!loading && !error && product != {}">
			<BCol cols="12" lg="9" class="mb-3">
				<BCard class="shadow">
					<BRow>
						<!-- Title -->
						<BCol cols="12" class="mb-3">
							<h2 class="text-center font-weight-bold text-primary">
								Add Item to Your Order
							</h2>
						</BCol>

						<!-- Image -->
						<BCol
							cols="12" sm="12" md="5" lg="3" xl="3"
							class="mb-3 px-3"
						><img :src="product.image" class="w-100 rounded"></BCol>

						<!-- Product Details -->
						<BCol cols="12" sm="12" md="7" lg="5" xl="5" class="mb-5">
							<BRow>
								<BCol cols="12">
									<h2 class="mb-3 text-primary">
										{{ product.name }}
									</h2>
									<p class="mb-3 h5">{{ product.description }}</p>
									
								</BCol>

								<BCol cols="12">
									<p class="mb-3 h4">
										${{ product.cost.toFixed(2) }}
									</p>
								</BCol>

								<BCol cols="12">
									<label for="quantity" class="h5">
										Quantity
									</label>
								
									<input
										v-model="orderItem.quantity"
										name="quantity"
										type="number"
										min="1"
										max="100"
										class="form-control w-100 mb-3"
										style="max-width: 100px;"
									>
								</BCol>

								<BCol cols="12">
									<BButton
										variant="secondary"
										size="lg"
										class="w-100"
									>+ Add to Order</BButton>
								</BCol>
							</BRow>
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
									v-model="orderItem.productVariants[i]"
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
									{{ orderItem.productVariants }}
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

							<p class="h5 my-5 text-light bg-dark">
								orderItem.productExtras: {{ orderItem.productExtras }}
							</p>
						</BCol>
					</BRow>
				</BCard>
			</BCol>

			<!-- Product Additions -->
			<BCol v-if="product.productAdditions.length > 0" cols="12" lg="3">
				<BCard bg-variant="none" class="shadow">
					<h2 class="mb-3 text-center font-weight-bold text-primary">
						Add More!
					</h2>

					<!-- [FOR] productAdditions -->
					<BCard
						v-for="(pa, i) in product.productAdditions" :key="i"
						bg-variant="none"
						class="mb-3"
					>
						<!-- [INPUT] Radio -->
						<input
							:name="pa._id"
							type="radio"
							:value="pa._id"
							v-model="orderItem.productAdditions[0].productAddition"
							@click="clearPAPAV()"
						>

						<div>
							<!-- Title -->
							<h5 class="font-weight-bold text-primary">
								{{ pa.name }}
							</h5>
							<p class="h6 text-dark">{{ pa.name }}</p>
							
							<!-- Product Variants -->
							<div v-if="pa.productVariants.length > 0">
								<!-- For Every productVariants -->
								<div
									v-for="(pv, ii) in pa.productVariants"
									:key="ii"
								>
									<select
										v-if="pv.options"
										:name="pv.options"
										v-model="orderItem.productAdditions[0].productAdditionVariants[i]"
										class="form-control mb-3"
									>
										<!-- For Every option -->
										<option
											v-for="(option, iii) in pv.options"
											:key="iii"
											:value="option._id"
										>{{ option.name }}</option>
									</select>
								</div>
							</div>
						</div>
					</BCard>

					<p class="h5 my-5 text-light bg-dark">
						orderItem.productAdditions:
						{{ orderItem.productAdditions }}
					</p>

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
		
		<p class="h5 my-5 text-light bg-dark">
			orderItem: {{ orderItem }},
		</p>
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
				orderItem: {
					product: product_id,
					quantity: 1,
					productVariants: [],
					productExtras: [],
					productAdditions: [
						{
							productAddition: '',
							productAdditionVariants: [],
							productAdditionExtras: [],
						},
					],
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
				this.orderItem.productExtras.forEach(pe => {
					if (pe == option_id) { found = true }
					else { updatedArray.push(pe) }
				})
				
				// Add
				if (found == false) { updatedArray.push(option_id) }

				// Update Array //
				this.orderItem.productExtras = updatedArray
			},

			clearPAPAV() {
				this.orderItem.productAdditions[0].productAdditionVariants = []
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