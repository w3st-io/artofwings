<template>
	<BContainer class="my-3">
		<BRow>
			<!-- Wings and Tenders -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.wingsAndTenders.title }}
				</h1>
				<h4 class="mb-4 text-center text-secondary">
					{{ pageData.wingsAndTenders.description }}
				</h4>

				<!-- Options Wings -->
				<BListGroup class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Wings</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.wingsAndTenders.options.wings"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>

				<!-- Options Tenders -->
				<BListGroup class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Tenders</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.wingsAndTenders.options.tenders"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>

				<!-- Flavor Options -->
				<BListGroup class="mb-3">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Flavors</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.wingsAndTenders.flavors"
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
			</BCol>

			<!-- Sliders -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.sliders.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ pageData.sliders.description }}
				</h4>

				<!-- Options -->
				<BListGroup class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Sliders</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.sliders.options"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>

				<!-- Toppings -->
				<BListGroup class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Toppings</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.sliders.toppings"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>


				<!-- Additions -->
				<BListGroup class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Toppings</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.sliders.additions"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>


				<!-- Sauces -->
				<BListGroup class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">Sauces</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.sliders.sauces"
						:key="i"
						class="p-0 text-center"
						:style="
							'background-color: rgb(' +
								spiceColor(pageData.sliders.sauces.length, i) + 
							');'
						"
					>
						<h3 class="m-0 px-5 py-0 text-light">
							{{ option }}
						</h3>
					</BListGroupItem>
				</BListGroup>
			</BCol>

			<!-- Signature Sandwiches -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.signatureSandwiches.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ pageData.signatureSandwiches.description }}
				</h4>

				<!-- Options -->
				<BListGroup class="mb-4">
					<BListGroupItem
						v-for="(option, i) in pageData.signatureSandwiches.options"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>
			</BCol>

			<!-- Specialty Sides -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.specialtySides.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ pageData.specialtySides.description }}
				</h4>

				<!-- Options frenchFriesOrTatorTots -->
				<BListGroup class="mb-4">
					<BListGroupItem variant="secondary" class="text-center">
						<h4 class="m-0 text-center">
							<span class="font-weight-bold text-primary">
								French Fries Or Tator Tots
							</span>
						</h4>
					</BListGroupItem>

					<BListGroupItem
						v-for="(option, i) in pageData.specialtySides.options.frenchFriesOrTatorTots"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>
			</BCol>

			<!-- Appetizers -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.appetizers.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ pageData.appetizers.description }}
				</h4>

				<!-- Options -->
				<BListGroup class="mb-4">
					<BListGroupItem
						v-for="(option, i) in pageData.appetizers.options"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>
			</BCol>

			<!-- Salad -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.salads.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ pageData.salads.description }}
				</h4>

				<!-- Options -->
				<BListGroup class="mb-4">
					<BListGroupItem
						v-for="(option, i) in pageData.salads.options"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>
			</BCol>

			<!-- Plantbased -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.plantbased.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ pageData.plantbased.description }}
				</h4>

				<!-- Options -->
				<BListGroup class="mb-4">
					<BListGroupItem
						v-for="(option, i) in pageData.plantbased.options"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>
			</BCol>

			<!-- Beverages -->
			<BCol cols="12" md="6" lg="4" xl="3">
				<h1 class="m-0 text-center font-weight-bold text-primary">
					{{ pageData.beverages.title }}
				</h1>
				<h4 class="mb-3 text-center text-secondary">
					{{ pageData.beverages.description }}
				</h4>

				<!-- Options -->
				<BListGroup class="mb-4">
					<BListGroupItem
						v-for="(option, i) in pageData.beverages.options"
						:key="i"
						variant="secondary"
						class="d-flex justify-content-between align-items-center"
					>
						<div>
							<h5 class="text-primary">{{ option.title }}</h5>
							<p>{{ option.description }}</p>
						</div>

						<BBadge variant="primary" class="custom-badge" pill>
							<h5 class="m-0">${{ option.cost }}</h5>
						</BBadge>
					</BListGroupItem>
				</BListGroup>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import pageData from '../defaults/pages/menu'

	export default {
		data() {
			return {
				pageData: pageData
			}
		},

		methods: {
			spiceColor(length, index) {
				const increment = 100 / length
				const R = (255 * (index * increment)) / 100
				const G = (255 * (100 - (index * increment))) / 100 
				const B = 64

				return `${R}, ${G}, ${B}`
			},
		},
	}
</script>

<style scoped>
	.custom-badge {
		font-family: 'Courier New', Courier, monospace;
	}
</style>