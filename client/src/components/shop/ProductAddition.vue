<template>
	<div>
		<!-- Title -->
		<h5 class="font-weight-bold text-primary">{{ value.name }}</h5>
		<p class="h6 text-dark">{{ value.name }}</p>
		
		<!-- Product Variants -->
		<div v-if="value.productVariants.length > 0">
			<!-- For Every productVariants -->
			<div v-for="(pv, i) in value.productVariants" :key="i">
				<select
					v-if="pv.options"
					v-model="productAdditions[i]"
					:name="pv.options"
					@input="updateData(productAdditions[i])"
					class="form-control mb-3"
				>
					<!-- For Every option -->
					<option
						v-for="option in pv.options"
						:key="option._id"
						:value="option._id"
					>{{ option.name }}</option>
				</select>
			</div>
		</div>

		<h6 class="bg-dark text-light">{{ value }}</h6>
	</div>
</template>

<script>
export default {
	props: ['value'],

	data() {
		return {
			productAdditions: [],
		}
	},

	methods: {
		updateData() {
			this.$emit('input', {
				productAdditions: this.productAdditions
			})
		}
	}
}
</script>
