<style scoped lang="less">
		@import './course.less';
	</style>
	<template>
		<div>
			<course-Info :courseList="courseList" :videoList="videoList"></course-Info>
		</div>
	</template>
	<script>
		import courseInfo from './compoents/course-info.vue'
		import courseService from './service/courseService.js'
		import * as Cookies from "js-cookie";
		export default {
			mixins: [courseService],
			data() {
				return {
					courseList:null,
					videoList:null,
				}
			},
			beforeMount(){
				this.getCourseList(Cookies.get("token"), this.$route.params.id).then(res => {
					console.log(res,'oooooo')
					this.courseList = res.data.class
					this.videoList = res.data.video
				})
			},
			methods: {
	
			},
			components: {
				courseInfo,
			}
		}
	</script>