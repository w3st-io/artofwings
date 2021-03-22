<template>
	<article class="mx-auto my-3 text-light register-terminal">
		<BCard bg-variant="light" text-variant="dark">
			<ValidationObserver v-slot="{ handleSubmit }">
				<form @submit.prevent="handleSubmit(register)">
					<!-- Username -->
					<ValidationProvider
						tag="div"
						class="form-group"
						rules="required"
						v-slot="{ errors }"
					>
						<label>Username</label>
						<input
							v-model="formData.username"
							name="username"
							type="text"
							class="form-control"
							:class="{ 'is-invalid border-danger': errors != '' }"
							placeholder="username"
						>
						<span class="text-danger">{{ errors[0] }}</span>
					</ValidationProvider>

					<!-- Email -->
					<ValidationProvider
						tag="div"
						type="email"
						class="form-group"
						rules="required"
						v-slot="{ errors }"
					>
						<label>Email</label>
						<input
							v-model="formData.email"
							name="email"
							type="email"
							class="form-control"
							:class="{ 'is-invalid border-danger': errors != '' }"
							placeholder="example@example.com"
						>
						<span class="text-danger">{{ errors[0] }}</span>
					</ValidationProvider>

					<!-- Phone Number -->
					<ValidationProvider
						tag="div"
						class="form-group"
						rules="required"
						v-slot="{ errors }"
					>
						<label>Phone Number</label>
						<VuePhoneNumberInput
							v-model="p"
							@update="updatePhone"
							no-country-selector
						/>
						{{ formData.phone }}
						<span class="text-danger">{{ errors[0] }}</span>
					</ValidationProvider>

					<!-- Password -->
					<ValidationProvider
						tag="div"
						class="form-group"
						rules="required|password:8, 50|confirmed:@confirmation"
						v-slot="{ errors }"
					>
						<label>Password</label>
						<input
							v-model="formData.password"
							type="password"
							class="form-control"
							:class="{ 'is-invalid border-danger': errors != '' }"
							placeholder="Password"
						>
						<span class="text-danger">{{ errors[0] }}</span>
					</ValidationProvider>

					<!-- Confirmed Password -->
					<ValidationProvider
						tag="div"
						name="confirmation"
						rules="required"
						class="form-group" 
						v-slot="{ errors }"
					>
						<label for="confirm">Confirm Password</label>
						<input
							v-model="confirm"
							type="password"
							class="form-control"
							:class="{ 'is-invalid border-danger': errors != '' }"
							placeholder="Repeat Password"
						>
						<span class="text-danger">{{ errors[0] }}</span>
					</ValidationProvider>

					<!-- Submit -->
					<button type="submit" class="w-100 mt-5 btn btn-lg btn-primary">
						Register
					</button>
				</form>
			</ValidationObserver>
		</BCard>
		
		<!-- [ERROR] -->
		<Alert v-if="error" variant="danger" :message="error" class="m-0 mt-3" />
	</article>
</template>

<script>
	// [IMPORT] //
	import VuePhoneNumberInput from 'vue-phone-number-input'
	import 'vue-phone-number-input/dist/vue-phone-number-input.css'

	// [IMPORT] Personal //
	import Alert from '@/components/inform/Alert'
	import router from '@/router'
	import UserService from '@/services/UserService'

	// [EXPORT] //
	export default {
		components: {
			VuePhoneNumberInput,
			Alert,
		},

		data() {
			return {
				formData: {
					username: '',
					email: '',
					phone: '',
					password: '',
				},
				p: '',
				data: '',
				error: '',
				confirm: '',
			}
		},

		async created() {
			// [REDIRECT] Log Required //
			if (localStorage.usertoken) { router.push({ name: 'user_profile' }) }
		},

		methods: {
			updatePhone(number) { this.formData.phone = number.nationalNumber },

			async register() {
				try {
					this.data = await UserService.s_register({
						username: this.formData.username,
						email: this.formData.email,
						phone: this.formData.phone,
						password: this.formData.password,
					})

					// Check Status //
					if (this.data.created) { router.push({ name: 'user_registered' }) }
					else { this.error = this.data.message }
				}
				catch (err) { this.error = err }
			},
		}
	}
</script>

<style scoped>
	.register-terminal { max-width: 400px; }
</style>