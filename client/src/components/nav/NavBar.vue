<template>
	<div>
		<!-- Top Bar -->
		<div class="bg-primary">
			<BContainer class="py-3">
				<BRow>
					<!-- Logo -->
					<BCol cols="12" lg="3">
						<RouterLink to="/" class="text-decoration-none text-light">
							<img :src="logo" class="w-100" style="max-width: 256px;">
						</RouterLink>
					</BCol>

					<!-- Menu Items -->
					<BCol cols="12" lg="7" class="d-none d-md-block py-3">
						<RouterLink
							v-for="button in buttons"
							:key="button.type"
							:to="button.path"
						>
							<BButton
								variant="primary"
								size="lg"
								class="mx-1 px-1 py-0 text-light menu-link"
							>
								<h5 class="m-0 font-weight-bold">
									<span v-if="button.text">{{ button.text }}</span>
									<span v-else v-html="button.navIcon"></span>
								</h5>
							</BButton>
						</RouterLink>
					</BCol>

					<!-- User Content -->
					<BCol cols="12" lg="2">
						<div class="text-right">
							<RouterLink to="/user/login">
								<BButton v-if="!userLogged" variant="info" class="mx-1">Login</BButton>
							</RouterLink>

							<!-- User Logged -->
							<BDropdown
								v-if="userLogged"
								split
								right
								text="Profile"
								class="m-2"
								@click="profileRedirect()"
							>
								<BDropdownItemButton @click="logout()">
									Log Out
								</BDropdownItemButton>
							</BDropdown>
						</div>
					</BCol>
				</BRow>
			</BContainer>

			<BContainer fluid class="d-block d-md-none">
				<BRow>
					<!-- Hidden Menu Button -->
					<BCol cols="12" class="p-0">
						<BButton class="w-100" @click="toggle()">
							<MenuIcon size="3x" class="text-primary" />
						</BButton>
					</BCol>
				</BRow>
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
	import defaultData from '@/defaults/companyInfo'
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
				logo: require('../../assets/media/company/logo.png'),
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

			logout() {
				UserService.s_logout()

				router.push({ name: 'user_login' })
			},
		},
	}
</script>

<style lang="scss">
	@import '../../assets/styles/bootstrap-override.scss';

	.menu-link {
		position: relative;
		text-decoration: none;
		transition: .2s;
		text-decoration: none !important;
	}

	.menu-link:hover { @extend .text-secondary; }

	.menu-link::before {
		@extend .bg-secondary;
		
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}
	
	.menu-link:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}
</style>