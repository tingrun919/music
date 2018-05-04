<style scoped lang="less">
	@import './history-course.less';
</style>
<template>
	<div>
		<curriculum :cLength="8" :tTitle="title" :english="english" :curriculumClass="courseList.list"></curriculum>
		<div class="text-md-center h-pt">
			<v-pagination color="orange lighten-1" circle :total-visible="7" :length="courseList.pageNum" v-model="page"></v-pagination>
		</div>
	</div>
</template>
<script>
	import curriculum from '../index/curriculum/curriculum.vue'
	import historyService from './service/historyService.js'
	export default {
		mixins: [historyService],
		data() {
			return {
				title: "全部课程表",
				english: "All Courses",
				page: 1,
				cPage:1,
				courseList:[],
			}
		},
		beforeMount(){
			this.getHistoryList(this.cPage)
		},
		methods: {

		},
		components: {
			curriculum,
		}
	}
</script>