<template>
	<BContainer>
		<h1>Menu</h1>
		<h6>Wings</h6>

		{{ pageData }}
	</BContainer>
</template>

<script>
import pageData from '../defaults/pages/menu'

export default {
	data() {
		return {
			pageData: pageData
		}
	},
}
</script>