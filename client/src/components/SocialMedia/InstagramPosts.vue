<template>
	<div class="content-container">
		<BRow>
			<BCol cols="6" class="p-0">
				<div :class="sharedImageClass">
					<img :src="img1" class="image">
				</div>
			</BCol>

			<BCol cols="6" class="p-0">
				<div :class="sharedImageClass">
					<img :src="img2" class="image">
				</div>
			</BCol>

			<BCol cols="6" class="p-0">
				<div :class="sharedImageClass">
					<img :src="img3" class="image">
				</div>
			</BCol>

			<BCol cols="6" class="p-0">
				<div :class="sharedImageClass">
					<img :src="img4" class="image">
				</div>
			</BCol>
		</BRow>

		<div class="w-100 center-content filter">
			<div class="text-center center-content">
				<div class="p-3 rounded-lg shadow insta-color">
					<a :href="link" class="text-decoration-none">
						<InstagramIcon size="3x" class="text-light" />
						<br>
						<h4 class="m-0 font-weight-bold text-light">
							Instagram
						</h4>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// [IMPORT] //
	import { InstagramIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '../../defaults/companyInfo'
	
	export default {
		components: { InstagramIcon },
		data() {
			return {
				sharedImageClass: 'my-1 px-1 rounded image-container',
				link: companyInfo.instagramLink,
				img1: require('../../assets/media/artpfwingsinsta/1.png'),
				img2: require('../../assets/media/artpfwingsinsta/2.png'),
				img3: require('../../assets/media/artpfwingsinsta/3.png'),
				img4: require('../../assets/media/artpfwingsinsta/4.png'),
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content-container { position: relative; }

	/* Style the center-content and place it in the middle of image */
	.content-container .center-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
	}

	.image-container {
		width: 100%;
		height: 150px;
		overflow: hidden;
	}

	.insta-color {
		background: #f09433; 
		background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%,);
		background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%,);
		background: linear-gradient(45deg, #f09433 0%, #e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%,);

		filter: progid:DXImageTransform.Microsoft.gradient(
			startColorstr='#f09433',
			endColorstr='#bc1888',
			GradientType=1
		);
	}
</style>