<template>
	<BContainer class="my-3">
		{{ pData }}
		<BRow>
			<BCol cols="12" class="mb-4 text-center">
				<img
					:src="pData.companyLogo"
					class="py-2 w-100 bg-primary rounded shadow"
					style="max-width: 300px;"
				>
			</BCol>

			<BCol cols="12" lg="6" class="mb-3">
				<h2 class="mb-3 text-primary">Visit Us</h2>
				<a :href="pData.googleMapsLink">
					<h4 class="mb-3 text-secondary">{{ pData.address }}</h4>
				</a>

				<h2 class="mb-3 text-primary">Give Us a Call</h2>
				<a :href="pData.phoneNumberLink">
					<BButton
						variant="primary"
						class="w-100 mb-3"
					>Call US</BButton>
				</a>
			</BCol>

			<BCol  cols="12" lg="6" class="mb-3">
				<h3 class="mb-3 text-primary">Our Hours</h3>
				<h5 v-for="(h, i) in pData.hoursOfOperation" :key="i">
					<span class="text-primary">{{ h.days }} :</span> {{ h.hours }}
				</h5>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import pData from '../defaults/pages/contact'

	export default {
		data() {
			return {
				pData: pData
			}
		},
	}
</script>