<style scoped lang="less">
	@import './video-detail.less';
</style>
<template>
	<div>
		<div class="v-detail-box" v-bind:style="{backgroundImage: 'url(' + item.aCover + ')', height:viewHeight}" @click="toCourse">
			<div class="v-detail-bg" v-bind:style="{height:viewHeight}">
				<!-- <div class="v-detail-top" v-if="currentRoute != 'teacher'"> -->
				<!-- <span>刘培艺</span> -->
				<!-- </div> -->
				<!-- <div class="v-detail-content"> -->
				<!-- <span>3256</span> -->
				<!-- <span>645</span> -->
				<!-- </div> -->
				<div class="v-detail-bottom">
					<!-- 自学教程零基础轻松萨克斯培训教程！ 已获得10万学员好评！ -->
					{{item.aDiscript}}
				</div>
			</div>
		</div>
		<span class="v-detail-title">
			<!-- 萨克斯初级—入门教学第二节 -->
			{{item.aName}}
		</span>
	</div>
</template>

<script>
	import img from '../../../../assets/video/timg.jpeg';
	export default {
		data() {
			return {
				src: img
			}
		},
		props: {
			item: Object,
		},
		computed: {
			viewHeight: function () {
				if (this.$vuetify.breakpoint.smAndDown) {
					return ((window.innerWidth) / 2.5) + 'px'
				} else {
					return ((window.innerWidth - 300) / 10) + 'px'
				}

			},
			currentRoute() {
				return this.$route.name
			}
		},
		methods: {
			toCourse() {
					var classId = this.item.aId
					this.$router.push(`video/${classId}`);
			}
		},
		components: {
		}
	}
</script>