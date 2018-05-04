<style scoped lang="less">
		@import './playvideo.less';
	</style>
	<template>
		<div>
			<course-Info :videoList="videoList"></course-Info>
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
					videoList:null,
				}
			},
			beforeMount(){
				this.getVideo()
			},
			methods: {
	
			},
			components: {
				courseInfo,
			}
		}
	</script>