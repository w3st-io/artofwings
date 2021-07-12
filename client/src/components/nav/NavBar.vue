<template>
	<div>
		<!-- Top Bar -->
		<div class="bg-primary">
			<BContainer class="py-3 d-flex container-fluid">
				<!-- [LEFT] Logo -->
				<div class="">
					<RouterLink to="/" class="text-decoration-none text-light">
						<div class="d-none d-xl-block logo-img">
							<img :src="logo" class="w-100 mb-2" style="max-width: 260px;">
							<h6 class="text-center font-weight-bold text-secondary">
								WINGS • BURGERS • FRIES
							</h6>
						</div>

						<div class="d-block d-xl-none text-center logo-img">
							<img
								:src="logoSm"
								class="w-100 mb-2"
								style="max-width: 100px;"
							>
							<h6
								class="text-center font-weight-bold text-secondary"
								style="font-size: 10px;"
							>WINGS • BURGERS • FRIES</h6>
						</div>
					</RouterLink>
				</div>

				<!-- [HIDDEN] Shopping Cart + User -->
				<div class="d-block d-xl-none ml-auto text-right">
					<a :href="defaultData.phoneNumberLink" class="text-light">
						<BButton class="mr-2">
							<PhoneIcon size="1x" />
						</BButton>
					</a>

					<a :href="defaultData.orderingSystemLink">
						<BButton>Order Now</BButton>
					</a>

					<ShopPortal v-if="localStorage.node_env == 'development'" />
				</div>

				<!-- [CENTER] Menu Items -->
				<div class="d-none d-xl-block mx-auto text-lg-left py-4">
					<RouterLink
						v-for="(button, i) in buttons"
						:key="i"
						:to="button.path"
					>
						<BButton
							variant="none"
							size="sm"
							class="text-light menu-link"
							data-aos="fade"
						>
							<h5 class="m-0 font-weight-bold">
								<span v-if="button.text">{{ button.text }}</span>
								<span v-else v-html="button.navIcon"></span>
							</h5>
						</BButton>
					</RouterLink>
				</div>

				<!-- [RIGHT] Shopping Cart + User -->
				<div class="d-none d-xl-block ml-auto text-right">
					<SocialMediaPlug size="2x" variant="light" class="mb-3"/>
					
					<a :href="defaultData.phoneNumberLink" class="text-light">
						<BButton class="mr-2">
							<PhoneIcon size="1x" />
						</BButton>
					</a>

					<a :href="defaultData.orderingSystemLink">
						<BButton>Order Now</BButton>
					</a>

					<ShopPortal v-if="localStorage.node_env == 'development'" />
				</div>
			</BContainer>

			<BContainer fluid class="d-block d-xl-none">
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
	import { MenuIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import ShopPortal from '@/components/nav/ShopPortal'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import defaultData from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'
	import UserService from '@/services/user/UserService'

	export default {
		components: {
			MenuIcon,
			PhoneIcon,
			SideMenu,
			ShopPortal,
			SocialMediaPlug,
		},

		data() {
			return {
				localStorage: localStorage,
				logo: require('../../assets/media/company/logo.png'),
				logoSm: require('../../assets/media/company/logo-small.png'),
				buttons: buttons,
				defaultData: defaultData,
				user_decoded: {},
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

						this.user_decoded = await UserService.s_getUserTokenDecodeData()
					}
				}
				catch (err) { console.log(`Navbar: ${err}`) }
			},

			loginRedirect() { router.push({ name: 'user_login' }) },

			registerRedirect() { router.push({ name: 'register' }) },

			toggle() { this.sideMenuOpen = !this.sideMenuOpen },
		},
	}
</script>

<style lang="scss">
	@import '../../assets/styles/bootstrap-override.scss';

	.logo-img {
		transition: .36s;
		&:hover {
			transform: translate(0px, -3px);
		}
	}

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