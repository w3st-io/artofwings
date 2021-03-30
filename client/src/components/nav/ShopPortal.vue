<template>
	<BButtonGroup>
		<!-- Shopping Cart -->
		<BButton variant="secondary" class="px-4" @click="mainRedirect()">
			<!-- <BBadge variant="danger">3</BBadge> -->
			<ShoppingCartIcon v-if="userLogged" class="text-dark" />

			<span v-if="!userLogged" style="2em">Login</span>
		</BButton>

		<!-- User Logged -->
		<BDropdown v-if="userLogged" right @click="profileRedirect()">
			<BDropdownItemButton @click="logout()">
				Log Out
			</BDropdownItemButton>
		</BDropdown>
	</BButtonGroup>
</template>

<script>
	// [IMPORT] //
	import { ShoppingCartIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import router from '@/router'
	import UserService from '@/services/UserService'

	export default {
		components: {
			ShoppingCartIcon
		},

		data() {
			return {
				userLogged: false,
			}
		},

		async created() {
			if (localStorage.usertoken) { this.userLogged = true }
		},

		methods: {
			mainRedirect() {
				if (this.userLogged) {
					router.push({ name: 'order' })
				}
				else { router.push({ name: 'user_login' }) }
			},

			profileRedirect() { router.push({ name: 'user_profile' }) },

			logout() {
				UserService.s_logout()

				router.push({ name: 'user_login' })
			},
		}
	}
</script>