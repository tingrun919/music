<style scoped lang="less">
	@import './curriculum-detail.less';
</style>
<template>
	<div class="c-detail-main" @click="toCourse">
		<h4>{{item.aClassname}}</h4>
		<span class="c-detail-time">{{ isToday ? item.aBegintime : item.aClbetime}}</span>
		<span class="c-detail-day" v-if="isToday">今天</span>
		<div class="line"></div>
		<span v-html="item.aClassdiscript"></span>
		<!-- <span>自学教程零基础轻松萨克斯培训教程！</span><br> -->
		<!-- <span>已获得10万学员好评！</span><br> -->
		<!-- <span>十年行业全新培训经验，30天打造萨克斯终极高手！</span><br> -->
		<!-- <span>完美在线指导！</span><br> -->
		<!-- <span>自学教程零基础轻松萨克斯培训教程！</span><br> -->
		<!-- <span>已获得10万学员好评！</span><br> -->
		<!-- <span>十年行业全新培训经验，30天打造萨克斯终极高手！</span><br> -->
		<!-- <span>完美在线指导！</span><br> -->
		<div class="c-detail-video">
			<v-avatar size="35" class="grey lighten-4">
				<img :src="item.aPortrait">
			</v-avatar>
			<div class="c-info">
				<p>{{item.aNickname}}老师
					<span v-if="item.aState == 2">直播中</span>
				</p>
				<div class="info-q">
					<!-- <span>2863人关注</span> -->
					<span>{{item.signnumber}}人学习</span>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isToday: false,
			}
		},
		props: {
			item: Object,
		},
		watch: {
			isToday: function () {
				return new Date().toDateString() === new Date(item.aClbetime).toDateString()
			}
		},
		methods: {
			toCourse() {
				if (this.item.aState == 'live') {
					this.$router.push({
						name: 'live'
					});
				} else {
					var classId = this.item.aId
					this.$router.push(`course/${classId}`);
				}
			}
		},
	}
</script>