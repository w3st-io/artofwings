<template>
	<div class="my-5">
		<BContainer fluid class="my-5">
			<BRow>
				<BCol cols="12" class="mb-3 text-center text-primary">
					<h1 class="font-weight-bold">Get Directions</h1>
				</BCol>
				
				<BCol cols="12" class="mb-3">
					<a :href="companyInfo.googleMapsLink">
						<h3 class="text-center text-secondary">
							{{ companyInfo.address }}
						</h3>
					</a>
				</BCol>

				<BCol cols="12" class="mb-3 text-center">
					<a :href="companyInfo.googleMapsLink">
						<BButton
							variant="primary"
							size="lg"
						>
							<MapPinIcon />
							Open Google Maps
						</BButton>
					</a>
				</BCol>

				<BCol cols="12" class="mx-0 mb-3 p-0">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.9050434314877!2d-74.45084578421793!3d40.4994827793557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c65441b020cd%3A0xb1b7ac9a77ce5156!2s48%20College%20Ave%2C%20New%20Brunswick%2C%20NJ%2008901!5e0!3m2!1sen!2sus!4v1616736032099!5m2!1sen!2sus"
						width="100%"
						height="450"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
					></iframe>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '../defaults/companyInfo'

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