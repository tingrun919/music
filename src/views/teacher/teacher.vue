<style scoped lang="less">
	@import './teacher.less';
</style>
<template>
	<div>
		<teacher-Info :userInfo="userInfo" :iffollow="iffollow"></teacher-Info>
		<curriculum :cLength="4" :tTitle="title" :english="english" :curriculumClass="teacherClass.list"></curriculum>
		<div class="text-md-center h-pt">
			<v-pagination color="orange lighten-1" circle :total-visible="7" :length="teacherClass.pageNum" v-model="page"></v-pagination>
		</div>
		<!-- <history-Curriculum></history-Curriculum> -->
	</div>
</template>
<script>
	import teacherInfo from './components/teacherInfo/teacher-info.vue'
	import curriculum from '../index/curriculum/curriculum.vue'
	// import historyCurriculum from './components/historyCurriculum/history-curriculum.vue'
	import teacherService from './service/teacherService.js'
	import * as Cookies from "js-cookie";
	export default {
		mixins: [teacherService],
		data() {
			return {
				title: "近期课程表",
				english: "Recent Courses",
				curriculumClass: [],
				page: 1,
				cpage: 1,
				userInfo: null,
				iffollow: 0,
				teacherClass: null,
			}
		},
		methods: {

		},
		beforeMount() {
			this.getCurriculum(Cookies.get("token"), this.$route.params.id, this.cpage)
		},
		components: {
			teacherInfo,
			curriculum,
			// historyCurriculum,

		}
	}
</script>