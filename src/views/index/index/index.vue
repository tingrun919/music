<template>
	<div>
		<swipe class="hidden-sm-and-down" :bannerList="banner"></swipe>
		<curriculum :cLength="4" :tTitle="title" :english="english" :curriculumClass="curriculumClass"></curriculum>
		<teacherVideo :vLength="8" :tTitle="vtitle" :english="venglish" :goodClass="goodClass"></teacherVideo>
		<teacher :teacher="teacher"></teacher>
	</div>
</template>
<script>
	import swipe from '../awesomeSwiper/indexSwipe.vue'
	import curriculum from '../curriculum/curriculum.vue'
	import teacherVideo from '../video/video.vue'
	import teacher from '../teacher/teacher.vue'
	//service
	import indexService from './service/indexService.js'

	export default {
		mixins: [indexService],
		data() {
			return {
				title:"近期课程表",
				english:"Recent Courses",
				vtitle:'推荐视频',
				venglish:'Course Video',
				banner:[],
				curriculumClass:[],
				goodClass:[],
				teacher:[],
			}
		},
		beforeMount(){
			this.getIndexData()
		},
		methods: {

		},
		components: {
			swipe,
			curriculum,
			teacherVideo,
			teacher
		}
	}
</script>