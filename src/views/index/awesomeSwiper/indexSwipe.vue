/* * @Author: tarn.tianrun * @Date: 2018-04-20 16:12:44 * @Last Modified by: tarn.tianrun * @Last Modified time: 2018-05-03
14:13:09 */

<style scoped lang="less">
	@import './indexSwipe.less';
</style>
<style>
	.swiper-pagination-bullet {
		background: #fff;
		border: 1px solid #fff;
	}
</style>
<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="item in bannerList" :key="item.id" @click.native="test">
			<!-- <swiper-slide v-bind:style="{backgroundImage: 'url(' + item.aPicUrl + ')'}"> -->
				<img :src=" item.aPicUrl" alt="">
			<!-- </swiper-slide> -->
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import banner1 from '../../../assets/indexBanner/2091017367.png'
	import banner2 from '../../../assets/indexBanner/2088702585.png'
	import banner3 from '../../../assets/indexBanner/1456697552.png'
	import banner4 from '../../../assets/indexBanner/1355392551.png'
	import banner5 from '../../../assets/indexBanner/948805895.png'
	import banner6 from '../../../assets/indexBanner/576433252.png'
	export default {
		data() {
			return {
				currentClick: 0,
				swiperOption: {
					loop: true,
					effect: 'fade',
					autoplay: {
					delay: 6000,
					disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				dataSwipe: [
					{
						id: 1, src: banner1
					}, {
						id: 2, src: banner2
					}, {
						id: 3, src: banner3
					}, {
						id: 4, src: banner4
					}, {
						id: 5, src: banner5
					}, {
						id: 6, src: banner6
					}
				],
			}
		},
		props: {
			bannerList: Array,
		},
		methods: {
			test() {
				console.log(1)
			}
		}
	}
</script>