<template>
	<BRow>
		<BCol cols="12" class="hero-container">
			<div class="p-2 gallery-center">
				<img
					:src="centerImg"
					class="w-100 hero-text-img"
					style="max-width: 600px"
					data-aos="fade-up"
					data-aos-delay="1000"
				/>
			</div>
			
			<BRow class="">
				<BCol
					v-for="(col, index) in cols"
					:key="index"
					cols="6" sm="6" md="4" lg="3" xl="2"
					class="px-1"
					:class="colClass[index]"
				>
					<img
						:src="col[0]"
						class="mb-2 w-100 images"
						:data-aos="randomFade()"
						:data-aos-delay="randomDelay()"
					/>
					<img
						:src="col[1]"
						class="mb-2 w-100 images"
						:data-aos="randomFade()"
						:data-aos-delay="randomDelay()"
					/>
				</BCol>
			</BRow>
		</BCol>
	</BRow>
</template>

<script>
	export default {
		props: {
			centerImg: {
				type: String,
				required: true,
			},

			backgroundImgs: {
				type: Array,
				required: true,
			},
		},
			
		data() {
			return {
				cols: [
					[ this.backgroundImgs[0], this.backgroundImgs[1] ],
					[ this.backgroundImgs[2], this.backgroundImgs[3] ],
					[ this.backgroundImgs[4], this.backgroundImgs[5] ],
					[ this.backgroundImgs[6], this.backgroundImgs[7] ],
					[ this.backgroundImgs[8], this.backgroundImgs[9] ],
					[ this.backgroundImgs[10], this.backgroundImgs[11] ]
				],

				colClass: [
					'd-block',
					'd-block',
					'd-none d-md-block',
					'd-none d-lg-block',
					'd-none d-xl-block',
					'd-none d-xl-block',
				],
			}
		},

		methods: {
			randomFade() {
				const fade = ['fade-up', 'fade-down', 'fade-left', 'fade-right']

				const randomNum = Math.floor(Math.random() * 3)

				return fade[randomNum]
			},

			randomDelay() { return Math.floor(Math.random() * 10) * 100 }
		},
	}
</script>

<style lang="scss">
	.hero-container {
		max-height: 600px;
		overflow: hidden;

		@media (max-width: 990px) {
			max-height: 400px;
		}
	}

	.gallery-center {
		z-index: 100;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.hero-text-img {
		background: rgba(0, 0, 0, 0.48);

		// Only Move images on screen abouve 800px //
		@media (min-width: 800px) {
			-webkit-animation: mover 1.5s infinite  alternate;
			animation: mover 1.5s infinite  alternate;
		}
	}

	.images {
		
	}

	@-webkit-keyframes mover {
		0% { transform: translateY(0); }
		100% { transform: translateY(-30px); }
	}
	@keyframes mover {
		0% { transform: translateY(0); }
		100% { transform: translateY(-30px); }
	}
</style>