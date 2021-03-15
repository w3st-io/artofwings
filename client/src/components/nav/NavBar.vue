<template>
	<div>
		<!-- Top Bar -->
		<div class="bg-primary">
			<BContainer class="py-3">
				<!-- Logo -->
				<RouterLink to="/" class="text-decoration-none text-light">
					<h1 class="m-0">
						{{ defaultData.companyName }}
					</h1>
				</RouterLink>
			</BContainer>
		</div>

		<!-- Hidden Menu Button -->
		<BButton class="d-block d-md-none w-100" @click="toggle()">
			<MenuIcon size="3x" class="text-primary" />
		</BButton>

		<div class="d-none d-md-block w-100 py-2 bg-secondary">
			<BContainer class="text-center">
				<!-- Menu Items -->
				<RouterLink
					v-for="button in buttons"
					:key="button.type"
					:to="button.path"
				>
					<BButton
						variant="secondary"
						class="mx-1 px-2 py-0 text-light menu-link"
					>
						<span v-if="button.text">{{ button.text }}</span>
						<span v-else v-html="button.navIcon"></span>
					</BButton>
				</RouterLink>
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
	import buttons from '@/defaults/pageLinks'
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
				buttons: buttons,
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

<style lang="scss">
	.menu-link {
		position: relative;
		text-decoration: none;
		transition: .2s;
		text-decoration: none !important;
	}

	.menu-link:hover { color: white !important; }

	.menu-link::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: white !important;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}
	
	.menu-link:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}
</style>