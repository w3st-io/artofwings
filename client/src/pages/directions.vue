<template>
	<BContainer fluid class="bg-light">
		<BRow>
			<BCol
				cols="12" md="6" lg="4"
				class="my-auto text-center text-primary"
			>
				<div class="my-5" data-aos="fade-up">
					<h1 class="font-weight-bold">Find Us</h1>
			
					<a :href="companyInfo.googleMapsLink">
						<h2 class="mb-3 text-center text-secondary">
							{{ companyInfo.address }}
						</h2>
					</a>

					<a :href="companyInfo.googleMapsLink">
						<BButton variant="primary" size="lg" class="shadow">
							<MapPinIcon /> Open Google Maps
						</BButton>
					</a>
				</div>
			</BCol>

			<BCol
				cols="12" md="6" lg="8"
				class="p-0 map"
				data-aos="fade-up"
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.9050434314877!2d-74.45084578421793!3d40.4994827793557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c65441b020cd%3A0xb1b7ac9a77ce5156!2s48%20College%20Ave%2C%20New%20Brunswick%2C%20NJ%2008901!5e0!3m2!1sen!2sus!4v1616736032099!5m2!1sen!2sus"
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
				></iframe>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			MapPinIcon,
		},

		data() {
			return {
				companyInfo: companyInfo,
			}
		},
	}
</script>

<style lang="scss">
	.map { height: calc(100vh - 120px); }
</style>