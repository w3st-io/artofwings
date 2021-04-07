<template>
	<!-- Footer -->
	<div class="w-100 bg-dark text-light">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center" data-aos="fade">
					<h5 class="text-primary">
						{{ companyInfo.companyName }} {{ new Date().getFullYear() }}
					</h5>
					<h6 v-html="companyInfo.companyCaption" class="text-light">
					</h6>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center text-sm-left" data-aos="fade-up">
					<h4 class="text-primary">Location</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 class="text-primary">Hours</h4>
					<ul class="list-unstyled text-small text-light">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
						>
							<span class="text-secondary">{{ hoo.days }}:</span>
							{{ hoo.hours }}
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4 class="text-primary">Company</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/contact">
								Contact Us
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/about">
								About
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/gallery">
								Gallery
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4 class="text-primary">User</h4>
					<ul class="list-unstyled text-small">
						<li class="mb-2">
							<BButton
								v-if="userLogged"
								variant="outline-secondary"
								size="sm"
								class="m-auto"
								@click="logout()"
							>Log Out</BButton>
						</li>
						<li>
							<RouterLink to="/shop">
								Your Order
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" class="my-3 text-center">
					<h6 class="text-secondary">
						© w3st.io {{ new Date().getFullYear() }}
					</h6>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import companyInfo from '@/defaults/companyInfo'
	import router from '@/router'
	import UserService from '@/services/UserService'

	export default {
		data() {
			return {
				companyInfo: companyInfo,
				userLogged: false,
			}
		},

		created() {
			if (localStorage.usertoken) { this.userLogged = true }
		},
		
		methods: {
			logout() {
				UserService.s_logout()

				router.push({ name: 'user_login' })
			},
		}
	}
</script>

<style scoped>
	* { color: white; }
</style>