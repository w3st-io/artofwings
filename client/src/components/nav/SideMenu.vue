<template>
	<nav
		class="bg-secondary shadow nav-drawer-menu"
		:class="{ isOpen: sideMenuOpen }"
	>
		<!-- Close Button -->
		<BButton
			v-show="sideMenuOpen"
			variant="primary"
			class="w-100 mb-2 p-4 text-light"
			@click="closeMenu()"
		><XIcon size="36" /></BButton>

		<!-- Close Button -->
		<BButton
			v-show="sideMenuOpen"
			variant="outline-primary"
			class="mb-2 w-100 text-primary"
			@click="closeMenu()"
		><p class="h1 my-1">Order Now</p></BButton>

		<!-- Menu Page Link -->
		<RouterLink
			v-show="sideMenuOpen"
			v-for="(button, i) in buttons"
			:key="i"
			:to="button.path"
		>
			<!-- Menu Items -->
			<BButton
				variant="outline-seconadry"
				class="w-100 text-primary"
				@click="closeMenu()"
			>
				<p v-if="button.text" class="h1 my-1">{{ button.text }}</p>
				<span v-else v-html="button.sideMenuIcon"></span>
			</BButton>
		</RouterLink>

		<!-- Address -->
		<a v-show="sideMenuOpen" :href="companyInfo.googleMapsLink" class="text-center">
			<h4 class="m-4 text-light">{{ companyInfo.address }}</h4>
		</a>

		<!-- Social Media -->
		<SocialMediaPlug v-show="sideMenuOpen" size="2x" variant="light" class="m-4" />
	</nav>
</template>

<script>
	// [IMPORT] //
	import { XIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'

	// [EXPORT] //
	export default {
		props: {
			sideMenuOpen: {
				type: Boolean,
				required: true,
			}
		},

		components: {
			XIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
				buttons: buttons,
			}
		},

		methods: {
			closeMenu() {
				this.sideMenuOpen = !this.sideMenuOpen
				this.$emit('closeMenu')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		z-index: 2000;

		position: fixed;
		top: 0;
		left: 0;

		height: 100vh;
		width: 0;

		overflow-x: hidden;
		transition: 0.5s;
	}

	.nav-drawer-menu button {
		transition: 0.3s;
		font-size: 2em;

		&:hover { background: hsl(224, 47%, 65%); }
	}
	
	.isOpen { width: 75%; }
</style>