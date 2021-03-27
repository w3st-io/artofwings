<template>
	<BContainer class="my-3">
		<BRow v-if="!loading && !error">
			<BCol
				v-for="(section, i) in pageData.menu" :key="i"
				cols="12" md="6" lg="4" xl="3"
			>
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ section.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ section.description }}
				</h4>

				<!-- Options -->
				<BListGroup
					v-for="(option, i) in section.options"
					:key="i"
					class="mb-4"
				>
					<!-- Title -->
					<BListGroupItem v-if="option.title" variant="secondary">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">
								{{ option.title }}
							</span>
						</h4>
					</BListGroupItem>

					<!-- variants -->
					<BListGroupItem
						v-for="(variant, i) in option.variants"
						:key="i"
						variant="secondary"
						class="py-4"
					>
						<BRow>
							<BCol cols="9" class="pr-0 text-primary">
								<h5 class="font-weight-bold">
									{{ variant.title }}
								</h5>
							</BCol>
								
							<BCol cols="3" class="pl-0 text-right text-dark">
								<h5 class="m-0 price">
									${{ variant.cost.toFixed(2) }}
								</h5>
							</BCol>

							<BCol v-if="variant.description" cols="12">
								<p>{{ variant.description }}</p>
							</BCol>

							<BCol
								v-if="
									variant.subCat != 'extras' &&
									variant.subCat != 'toppings'
								"
								cols="12"
								class="text-center"
							>
								<RouterLink :to="`/user/order/add/${variant._id}`">
									<BButton
										variant="secondary"
										class="w-100"
									>Add to Order</BButton>
								</RouterLink>
							</BCol>
						</BRow>
					</BListGroupItem>
				</BListGroup>

				<!-- Flavor Options -->
				<BListGroup v-if="section.flavors" class="mb-3">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Flavors</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in section.flavors"
						:key="i"
						class="p-0 text-center"
						:style="spiceColor(section.flavors.length, i)"
					>
						<h5 class="m-0 px-5 py-0 text-light">
							{{ option.title }}
						</h5>
					</BListGroupItem>
				</BListGroup>
				
				<!-- Sauces -->
				<BListGroup v-if="section.sauces" class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Sauces</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(sauce, i) in section.sauces"
						:key="i"
						variant="info"
						class="p-1 text-center"
					><h5 class="m-0">{{ sauce.title }}</h5></BListGroupItem>
				</BListGroup>
			</BCol>
		</BRow>

		<BRow v-else>
			<BCol cols="12">
				<h5 class="text-danger">{{ error }}</h5>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import PageService from '../services/PageService'

	export default {
		data() {
			return {
				reqData: {},
				loading: true,
				error: '',
			}
		},

		async created() {
			await this.getPageData()

			this.log()
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_menu()

				if (this.reqData.status) { this.pageData = this.reqData }
				else { this.error = this.reqData.message }

				this.loading = false
			},

			spiceColor(length, index) {
				index++
				const increment = 100 / length
				const R = (255 * (index * increment)) / 100
				const G = (255 * (100 - (index * increment))) / 100 
				const B = 0

				return `background-color: rgb(${R}, ${G}, ${B});`
			},

			log() {
				console.log('%%% [PAGES] Menu %%%')
				console.log('pageData:', this.pageData)
			},
		},
	}
</script>