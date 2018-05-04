<style scoped lang="less">
	@import './all-video.less';
</style>
<template>
	<div>
		<teacherVideo :vLength="12" :tTitle="title" :english="english"></teacherVideo>
		<div class="text-md-center v-pt">
			<v-pagination color="orange lighten-1" circle :total-visible="7" :length="18" v-model="page"></v-pagination>
		</div>
	</div>
</template>
<script>
	import teacherVideo from '../index/video/video.vue'
	export default {
		data() {
			return {
				title: "全部视频",
				english: "All Video",
				page: 1
			}
		},
		methods: {

		},
		components: {
			teacherVideo,
		}
	}
</script>