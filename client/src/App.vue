<template>
	<div id="app" :key="appKey">
		<!-- UI -->
		<UI />

		<div class="aw-background">
			<!-- Router -->
			<RouterView :key="$route.name + ($route.params.id || '')" />
		</div>

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
	import Service from '@/services'

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
				console.log('localStorage:', localStorage)
			}
		},

		async created() {
			this.forceRerender()

			await this.setNodeEnv()
			
			EventBus.$on('force-rerender', () => { this.forceRerender() })

			// [LOG] //
			this.log()
		},
	}
</script>

<style lang="scss">
	body { font-family: 'meltix' !important; }

	body.loading-no-scroll { overflow: hidden; }

	@font-face {
		font-family: 'meltix';
		src: url('./assets/fonts/meltix/Meltix_Regular_Demo.otf');
	}
</style>