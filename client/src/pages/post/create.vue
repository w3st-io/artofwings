<template>
	<BContainer class="my-3">
		<BCard bg-variant="dark">
			<BRow>
				<BCol cols="12">
					<h3 class="mb-3 text-light">Create Post in {{ catTitle }}</h3>

					<!-- [COMPONENT] Create -->
					<Create :cat="cat" />
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import Create from '@/components/post/Create'
	import PageService from '@/services/PageService'
	import router from '@/router'

	// [EXPORT] //
	export default {
		components: {
			Create
		},

		data() {
			return {
				cat_id: this.$route.params.cat_id,
				data: {},
				cats: [],
				cat: {},
				catTitle: '',
			}
		},

		created: async function() {
			// [REDIRECT] Not Log Needed //
			if (!localStorage.usertoken) { router.push({ name: 'user_login' }) }

			this.data = await PageService.s_post_create()

			if (this.data.status) {
				// Store Cats //
				this.cats = this.data.cats
				// Get Cat Details //
				this.cat = this.cats.find(cat => cat.cat_id === this.cat_id)
				this.catTitle = this.cat.title
			}
			
			// [LOG] //
			this.log()
		},

		methods: {
			async submit() {
				if (localStorage.usertoken) {
					console.log('submit')
				}
				else { this.error = 'Error unable to update comment, no token passed' }
			},

			log() {
				console.log('%%% [PAGE] CatPostCreate %%%')
				console.log('data:', this.data)
				console.log('cat_id:', this.cat_id)
			},
		}
	}
</script>