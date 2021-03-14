<template>
	<div>
		<!-- Top Bar -->
		<div class="bg-primary">
			<BContainer>
				<nav class="px-0 navbar navbar-expand-lg navbar-dark">
					<!-- Logo -->
					<RouterLink to="/" class="navbar-brand">
						<h1 class="m-0">
							{{ defaultData.companyName }}
						</h1>
					</RouterLink>

					<!-- Hidden Menu Button -->
					<BButton class="d-block d-md-none" @click="toggle()">
						<MenuIcon class="text-primary" />
					</BButton>
				</nav>
			</BContainer>
		</div>

		<!-- Hidden Side Menu -->
		<SideMenu :sideMenuOpen="sideMenuOpen" @closeMenu="toggle()" />
	</div>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import defaultData from '../../defaults/companyInfo'
	import router from '@/router'
	import UserService from '@/services/UserService'
	import { EventBus } from '@/main'

	// [EXPORT] //
	export default {
		components: {
			MenuIcon,
			SideMenu,
		},

		data() {
			return {
				defaultData: defaultData,
				decoded: {},
				userLogged: false,
				query: '',
				notifications: '',
				totalNotifications: 0,

				// [MENU] //
				sideMenuOpen: false,
			}
		},

		async created() {
			await this.userTasks()

			if (localStorage.usertoken) { this.userLogged = true }
		},

		methods: {
			async userTasks() {
				try {
					if (localStorage.usertoken) {
						this.userLogged = true

						this.decoded = await UserService.s_getUserTokenDecodeData()
					}
				}
				catch (err) { console.log(`Navbar: ${err}`) }
			},

			loginRedirect() { router.push({ name: 'user_login' }) },

			registerRedirect() { router.push({ name: 'register' }) },

			profileRedirect() { router.push({ name: 'user_profile' }) },

			followedRedirect() {
				router.push({
					name: 'user_followed',
					params: { page: 1 }
				})
			},

			allActivityRedirect() {
				router.push({
					name: 'activity',
					params: {
						sort: 1,
						limit: 10,
						page: 1
					}
				})
			},

			searchRedirect() {
				if (this.query) {
					router.push({
						name: 'search',
						params: {
							type: 'posts',
							query: this.query,
							limit: 5,
							page: 1,
						}
					})
	
					EventBus.$emit('force-rerender')
				}
			},

			toggle() { this.sideMenuOpen = !this.sideMenuOpen },
		},
	}
</script>