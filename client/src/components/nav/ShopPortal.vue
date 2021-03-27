<template>
	<BButtonGroup>
		<!-- Shopping Cart -->
		<BButton variant="secondary" class="" @click="orderRedirect()">
			<!-- <BBadge variant="danger">3</BBadge> -->
			<ShoppingCartIcon size="2x" class="mx-3 text-dark" />
		</BButton>

		<!-- User Logged -->
		<BDropdown right @click="profileRedirect()">
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

		methods: {
			orderRedirect() { router.push({ name: 'user_order' }) },

			profileRedirect() { router.push({ name: 'user_profile' }) },

			logout() {
				UserService.s_logout()

				router.push({ name: 'user_login' })
			},
		}
	}
</script>