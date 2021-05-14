<template>
	<BRow>
		<BCol cols="12">
			<h4 class="mb-4 text-center">
				<span class="px-2">
					See What Others are Saying About Us!
				</span>
			</h4>
		</BCol>

		<BCol cols="12" class="mb-3 mb-xl-5">
			<BRow>
				<BCol cols="6" class="">
					<BButton
						variant="primary"
						pill
						size="sm"
						id="FBPPrevButton"
						class="w-100"
					>
						<ArrowLeftIcon
							size="2x"
							class="m-auto"
						/>
					</BButton>
				</BCol>

				<BCol cols="6" class="">
					<BButton
						variant="primary"
						pill
						size="sm"
						id="FBPNextButton"
						class="w-100"
					>
						<ArrowRightIcon
							size="2x"
							class="m-auto"
						/>
					</BButton>
				</BCol>
			</BRow>
		</BCol>

		<BCol cols="12" class="my-slider">
			<VueTinySlider v-bind="options" ref="slider">
				<div v-for="(slide, i) in slides" :key="i" class="px-1">
					<img :src="slide" class="w-100">
				</div>
			</VueTinySlider>
		</BCol>
	</BRow>
</template>

<script>
	// [IMPORT] //
	import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons'
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		components: {
			ArrowLeftIcon,
			ArrowRightIcon,
			VueTinySlider,
		},

		data() {
			return {
				options: {
					container: '.my-slider',
					items: 1,
					gutter: 0,
					nav: false,
					controls: true,
					prevButton: '#FBPPrevButton',
					nextButton: '#FBPNextButton',
					loop: true,
					autoplay: true,
					autoplayButtonOutput: false,
					autoplayTimeout: 3000,
				},

				slides: [
					require('./fr1.png'),
					require('./fr2.png'),
					require('./fr3.png'),
					require('./fr4.png'),
					require('./fr5.png'),
					require('./fr6.png'),
					require('./fr7.png'),
				]
			}
		},
	}
</script>