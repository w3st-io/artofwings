<template>
	<BContainer class="my-3">
		<BJumbotron variant="light">
			<BRow>
				<BCol cols="12" class="mb-4 text-center" data-aos="fade">
					<h1 class="mb-3 font-weight-bold text-primary">Visit Us</h1>
					<a :href="pData.googleMapsLink">
						<BButton
							variant="primary"
							class="mb-3 shadow"
						>
							<h3 class="mb-0">
								<MapPinIcon />
								{{ pData.address }}
							</h3>
						</BButton>
					</a>
				</BCol>

				<BCol cols="12" lg="6" class="mb-3 text-center" data-aos="fade-right">
					<h1 class="mb-3 font-weight-bold text-primary">Or Call Us</h1>
					<a :href="pData.phoneNumberLink">
						<BButton
							variant="primary"
							class="mb-3 shadow"
						>
							<h3 class="mb-0">
								<PhoneIcon />
								{{ pData.phoneNumber }}
							</h3>
						</BButton>
					</a>
				</BCol>

				<BCol  cols="12" lg="6" class="mb-3" data-aos="fade-left">
					<h1 class="mb-3 font-weight-bold text-primary">Our Hours</h1>
					<h4 v-for="(h, i) in pData.hoursOfOperation" :key="i">
						<span class="text-secondary">{{ h.days }} :</span>
						{{ h.hours }}
					</h4>
				</BCol>
			</BRow>
		</BJumbotron>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon, PhoneIcon } from 'vue-feather-icons'


	// [IMPORT] Personal //
	import pData from '../defaults/pages/contact'

	export default {
		components: {
			MapPinIcon,
			PhoneIcon,
		},

		data() {
			return {
				pData: pData
			}
		},
	}
</script>