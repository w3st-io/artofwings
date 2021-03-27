<template>
	<div id="app" :key="appKey">
		<!-- UI -->
		<UI />

		<!-- Router -->
		<RouterView :key="$route.name + ($route.params.id || '')" />

		<!-- Bottom Footer -->
		<Footer />

		<!-- Socket -->
		<Socket />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Footer from '@/components/nav/Footer'
	import Socket from '@/components/socket'
	import UI from '@/components/UI'
	import { EventBus } from '@/main'
	import Service from '@/services/Service'

	// [EXPORT] //
	export default {
		name: 'App',

		components: {
			Footer,
			Socket,
			UI,
		},

		data() {
			return {
				appKey: 0,
				reqData: {},
			}
		},

		async created() {
			this.forceRerender()

			await this.setNodeEnv()
			
			EventBus.$on('force-rerender', () => { this.forceRerender() })

			// [LOG] //
			//this.log()
		},

		methods: {
			forceRerender() { this.appKey++ },

			async setNodeEnv() {
				try {
					this.reqData = await Service.index()

					if (this.reqData.status) {
						localStorage.setItem('node_env', this.reqData.node_env)
					}	
				}
				catch (err) { console.log(`App: Error --> ${err}`) }
			},

			log() {
				console.log('%%% [APP] %%%')
				console.log('usertoken:', localStorage.usertoken)
				console.log('admintoken:', localStorage.admintoken)
			}
		}
	}
</script>

<style lang="scss">
	// [IMPORT] Personal //
	body {
		font-family: 'dot', 'meltix' !important;
	}

	@font-face {
		font-family: 'meltix';
		src: url('./assets/fonts/meltix/Meltix_Regular_Demo.otf');
	}

	@font-face {
		font-family: 'dot';
		src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300');
		unicode-range: U+002E;
	}
</style>