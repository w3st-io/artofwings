<template>
	<BContainer class="py-5">
		<BRow class="shadow">
			<BCol cols="12" class="py-3 bg-primary">
				<h1 class="m-0 text-center font-weight-bold text-light">
					{{ pData.r1.c1.title }}
				</h1>
			</BCol>

			<BCol
				cols="12" lg="6"
				class="d-none d-lg-block p-0 bg-light"
				style="overflow: hidden;"
				data-aos="fade-right"
			>
				<img
					:src="pData.r1.c2.image"
					alt="Image Here"
					class="h-100"
					data-aos="fade-right"
				>
			</BCol>

			<BCol cols="12" lg="6" class="p-5 bg-light" data-aos="fade-up">
				<h2 class="mb-4 text-center text-primary">
					{{ pData.r1.c3.title }}
				</h2>
				<p>{{ pData.r1.c3.description }}</p>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import pData from '../defaults/pages/about'

	export default {
		data() {
			return {
				pData: pData,
			}
		},
	}
</script>