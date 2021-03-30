<template>
	<div>
		<h1 class="mb-3">
			<mark class="bg-primary text-light">Best Sellers</mark>
		</h1>

		<BListGroup variant="dark">
			<BListGroupItem :variant="variant">Cras justo odio</BListGroupItem>
			<BListGroupItem :variant="variant">Dapibus ac facilisis in</BListGroupItem>
			<BListGroupItem :variant="variant">Morbi leo risus</BListGroupItem>
			<BListGroupItem :variant="variant">Porta ac consectetur ac</BListGroupItem>
			<BListGroupItem :variant="variant">Vestibulum at eros</BListGroupItem>
		</BListGroup>
	</div>
</template>


<script>
export default {
	data() {
		return {
			variant: 'dark',
		}
	},
}
</script>