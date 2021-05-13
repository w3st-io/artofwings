<template>
	<div class="content-container">
		<BRow>
			<BCol cols="6" class="pr-0">
				<div :class="sharedImageClass">
					<img :src="img1" class="image">
				</div>
			</BCol>

			<BCol cols="6" class="pl-0">
				<div :class="sharedImageClass">
					<img :src="img2" class="image">
				</div>
			</BCol>

			<BCol cols="6" class="pr-0">
				<div :class="sharedImageClass">
					<img :src="img3" class="image">
				</div>
			</BCol>

			<BCol cols="6" class="pl-0">
				<div :class="sharedImageClass">
					<img :src="img4" class="image">
				</div>
			</BCol>
		</BRow>
	
		<a :href="link" class="text-decoration-none">
			<div class="p-3 text-center rounded-lg shadow center-content insta-color">
				<InstagramIcon size="3x" class="text-light" />
				<br>
				<h4 class="m-0 font-weight-bold text-light">
					Find Us on Instagram
				</h4>
			</div>
		</a>
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

	.filter {
		height: 100%;
		background: rgba(0, 0, 0, 0.40);
	}

	.image-container {
		width: 100%;
		height: 175px;
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