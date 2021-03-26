<template>
	<BContainer class="my-3">
		<BRow v-if="!loading && !error">
			<BCol
				v-for="(section, i) in pageData.menu" :key="i"
				cols="12" md="6" lg="4" :xl="colSizeSetter(i)"
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
								<h4 class="font-weight-bold">
									{{ variant.title }}
								</h4>
							</BCol>
								
							<BCol cols="3" class="pl-0 text-right text-dark">
								<h5 class="m-0 custom-badge">
									${{ variant.cost.toFixed(2) }}
								</h5>
							</BCol>

							<BCol v-if="variant.description" cols="12">
								<p>{{ variant.description }}</p>
							</BCol>

							<BCol cols="12" class="text-center">
								<BButton
									variant="secondary"
									class="w-100"
								>Add to Order</BButton>
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

			colSizeSetter(index) {
				let value = 3

				switch (index) {
					case 0:
						value = 4
						break
						
					case 1:
						value = 4
						break

					case 2:
						value = 4
						break
				}

				return value
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
/*
<BCol
				v-for="(section, index) in pageData.menu" :key="index"
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
					class="mb-4 shadow"
				>
					<BListGroupItem v-if="option.title" variant="light">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">
								{{ option.title }}
							</span>
						</h4>
					</BListGroupItem>

					<!-- Variants -->
					<BListGroupItem
						v-for="(variant, i) in option.variants"
						:key="i"
						variant="light"
					>
						<BRow>
							<BCol cols="9" class="text-dark">
								<h5>{{ variant.title }}</h5>
								<p v-if="variant.description">
									{{ variant.description }}
								</p>
							</BCol>
								
							<BCol cols="3" class="text-right text-dark">
								<h5 class="m-0 custom-badge">
									${{ variant.cost.toFixed(2) }}
								</h5>
							</BCol>

							<BCol cols="12">
								<BButton
									variant="primary" size="sm" class="w-100"
								>Add to Order</BButton>
							</BCol>
						</BRow>
					</BListGroupItem>
				</BListGroup>

				<!-- Flavor Options -->
				<BListGroup v-if="section.flavors" class="mb-3 shadow">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Flavors</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in section.flavors"
						:key="i"
						class="p-0 text-center"
						:style="
							'background-color: rgb(' +
							spiceColor(pageData.wingsAndTenders.flavors.length, i) +
							');'
						"
					>
						<h3 class="m-0 px-5 py-0 text-light">
							{{ option.title }}
						</h3>
					</BListGroupItem>
				</BListGroup>

				<!-- Sauces -->
				<BListGroup v-if="section.sauses" class="mb-4 shadow">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Sauces</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(sauce, i) in section.sauces"
						:key="i"
						variant="secondary"
						class="text-center"
					><h4 class="m-0">{{ sauce.title }}</h4></BListGroupItem>
				</BListGroup>
			</BCol>*/
</script>

<style scoped>
	.custom-badge {
		font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
</style>