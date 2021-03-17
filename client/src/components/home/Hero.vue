<template>
	<BRow>
		<BCol cols="12" style="max-height: 360px; overflow: hidden;">
			<div class="p-2 bg-white gallery-center">
				<img
					:src="heroImg"
					class="w-100"
					style="max-width: 300px"
					data-aos="fade-up"
					data-aos-delay="1500"
				>
			</div>
			<BRow>
				<BCol
					v-for="(col, index) in cols"
					:key="index"
					cols="6" sm="6" md="4" lg="3" xl="2"
					class="px-1"
					:class="colClass[index]"
				>
					<img
						:src="col[0]"
						class="mb-2 w-100"
						:data-aos="randomFade()"
						:data-aos-delay="randomDelay()"
					>
					<img
						:src="col[1]"
						class="mb-2 w-100"
						:data-aos="randomFade()"
						:data-aos-delay="randomDelay()"
					>
				</BCol>
			</BRow>
		</BCol>
	</BRow>
</template>

<script>
	import data from '../../defaults/components/home/GalleryPreview'

	export default {
		data() {
			return {
				data: data,

				heroImg: require('../../assets/images/components/home/Hero/hero-text2.png'),

				cols: [
					[ data[0], data[1] ],
					[ data[2], data[3] ],
					[ data[4], data[5] ],
					[ data[6], data[7] ],
					[ data[8], data[9] ],
					[ data[10], data[11] ]
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

			randomDelay() {
				return Math.floor(Math.random() * 10) * 150
			}
		},
	}
</script>

<style lang="scss">
	.gallery-center {
		z-index: 100;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>