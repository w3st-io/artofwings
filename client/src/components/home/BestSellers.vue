<template>
	<BListGroup flush>
		<BListGroupItem>
			<h1 class="m-0 font-weight-bold text-primary">Best Sellers</h1>
		</BListGroupItem>

		<BListGroupItem
			v-for="(bestSeller, i) in bestSellers" :key="i"
			:variant="variant"
		>
			<BRow>
				<BCol cols="9" class="text-left">{{ bestSeller.title }}</BCol>
				<BCol cols="3">${{ bestSeller.cost.toFixed(2) }}</BCol>
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
					cost: 7.99,
				},
				{
					title: '12 Piece Wings',
					cost: 14.99,
				},
				{
					title: '24 Piece Wings',
					cost: 27.99,
				},
				{
					title: 'Rutgers Cheesesteak',
					cost: 8.99,
				},
			],
		}
	},
}
</script>