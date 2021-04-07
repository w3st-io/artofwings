<template>
	<BListGroup flush class="shadow">
		<BListGroupItem>
			<h1 class="m-0 text-primary">Best Sellers</h1>
		</BListGroupItem>

		<BListGroupItem
			v-for="(bestSeller, i) in bestSellers" :key="i"
			:variant="variant"
		>
			<BRow>
				<BCol cols="9" class="text-left">{{ bestSeller.title }}</BCol>
				<BCol cols="3" class="price">${{ bestSeller.cost.toFixed(2) }}</BCol>
			</BRow>
		</BListGroupItem>
	</BListGroup>
</template>


<script>
export default {
	data() {
		return {
			variant: 'none',

			bestSellers: [
				{
					title: '6 Piece Wings',
					cost: 6.99,
				},
				{
					title: '12 Piece Wings',
					cost: 12.99,
				},
				{
					title: '24 Piece Wings',
					cost: 24.99,
				},
				{
					title: 'Rutgers Cheesesteak',
					cost: 6.99,
				},
			],
		}
	},
}
</script>