<template>
	<div>
		<!-- Top Navbar & Side Menu -->
		<NavBar class="position-fixed w-100 nav-z-index" />

		<div class="nav-spacer2"></div>

		<!-- Admin Bottom Bar -->
		<AdminNavBar v-if="adminLogged" />

		<!-- Pop Up Notifications -->
		<PopUpNotifications v-if="userLogged" />

		<!-- Floating Pop Up Banner -->
		<PopUpBanner
			v-if="message"
			:user_decoded="user_decoded"
			:message="message"
			BGColor="info"
		/>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import AdminNavBar from '@/components/admin/AdminNavBar'
	import PopUpBanner from '@/components/inform/PopUpBanner'
	import NavBar from '@/components/nav/NavBar'
	import PopUpNotifications from '@/components/notifications/PopUpNotifications'
 
	export default {
		components: {
			AdminNavBar,
			PopUpBanner,
			NavBar,
			PopUpNotifications,
		},

		data() {
			return {
				userLogged: false,
				adminLogged: false,
				message: '',
			}
		},

		created() {
			if (localStorage.usertoken) { this.userLogged = true }
			if (localStorage.admintoken) { this.adminLogged = true }
		},
	}
</script>

<style lang="scss" scoped>
	.nav-z-index { z-index: 2000; top: 0; }

	.nav-spacer2 {
		padding-top: 120px;

		@media (max-width: 1200px) { padding-top: 151px; }		
	}
</style>