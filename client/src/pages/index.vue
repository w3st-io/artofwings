<template>
	<BContainer class="my-3">
		<BRow v-if="!loading" class="mb-3">
			<!-- Main Content -->
			<BCol cols="lg-9" class="mb-3 p-0">
				<BCard bg-variant="dark" class="text-light">
					<CatList :cats="cats1" groupName="General" class="mb-3" />
					<CatList :cats="cats2" groupName="Trade Token Market Place" class="mb-3" />
					<CatList :cats="cats3" groupName="Productive" class="mb-3" />
					<CatList :cats="cats4" groupName="Education" class="mb-3" />
				</BCard>

				<!-- Adsense -->
				<Adsense class="mt-3" />
			</BCol>

			<!-- Side Content -->
			<BCol cols="12" lg="3">
				<BCard
					v-if="reqData.cryptoQuote.status"
					bg-variant="dark"
					class="mb-3 text-primary"
				>
					<h6 class="m-0">
						BTC-USDT :
						<span class="text-light">
							{{ parseInt(reqData.cryptoQuote.btcusdt.last).toFixed(2) }}
						</span>
					</h6>
					<h6 class="m-0">
						ETH-USDT : 
						<span class="text-light">
							{{ parseInt(reqData.cryptoQuote.ethusdt.last).toFixed(2) }}
						</span>
					</h6>
				</BCard>

				<TopPosts :topPosts="topPosts" />
			</BCol>
		</BRow>

		<!-- [LOADING + ERROR] -->
		<BRow class="mt-3 row">
			<BCol cols="12">
				<Alert v-show="loading" variant="dark" />
				<Alert v-if="error" variant="danger" :message="error" />
			</BCol>
		</BRow>

		<BRow>
		</Brow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import TopPosts from '@/components/home/TopPosts'
	import Adsense from '@/components/adsense'
	import CatList from '@/components/cat/List'
	import Alert from '@/components/inform/Alert'
	import router from '@/router'
	import PageService from '@/services/PageService'

	// [EXPORT] //
	export default {
		components: {
			Adsense,
			Alert,
			CatList,
			TopPosts,
		},

		data() {
			return {
				reqData: [],
				cats1: [],
				cats2: [],
				cats3: [],
				cats4: [],
				topPosts: [],
				error: '',
				loading: true,
			}
		},

		async created() {
			try {
				this.reqData = await PageService.s_home()
				
				// [REDIRECT] Custom Home Page Available //
				if (this.reqData.customHome == true) {
					router.push({ name: 'home' })
				}

				if (this.reqData.status) {
					this.cats1 = this.reqData.cats.slice(0, 2)
					this.cats2 = this.reqData.cats.slice(2, 4)
					this.cats3 = this.reqData.cats.slice(4, 7)
					this.cats4 = this.reqData.cats.slice(7, 10)

					this.topPosts = this.reqData.topPosts

					this.loading = false
				}
				else { this.error = this.reqData.message }
			}
			catch (err) { this.error = err }

			this.log()
		},

		methods: {
			log() {
				console.log('%%% [/] %%%')
				console.log('reqData:', this.reqData)
			}
		},
	}
</script>