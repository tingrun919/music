<style scoped lang="less">
	@import './teacher.less';
</style>
<template>
	<div class="teacher-main">
		<v-container grid-list-md text-xs-center>
			<div class="c-title">
				<p>优秀导师</p>
				<span>Excellent Teacher</span>
			</div>
			<v-layout row wrap v-bind="binding">
				<v-flex xs4 v-for="(i,index) in teacher" :key="`3${i}`">
					<v-card class="teacher-list">
						<t-detail :imgList="teacher[index]"></t-detail>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	import tDetail from './detail/teacher-detail.vue'
	import tBtn from '../../../components/btnMore.vue'

	import img1 from '../../../assets/teacher/于海振2.jpg'
	import img2 from '../../../assets/teacher/于海振.jpg'

	import img3 from '../../../assets/teacher/冯念2.jpg'
	import img4 from '../../../assets/teacher/冯念.jpg'

	import img5 from '../../../assets/teacher/刘培义2.jpg'
	import img6 from '../../../assets/teacher/刘培义.jpg'

	import img7 from '../../../assets/teacher/吴越2.jpg'
	import img8 from '../../../assets/teacher/吴越.jpg'

	import img9 from '../../../assets/teacher/孙德志2.jpg'
	import img10 from '../../../assets/teacher/孙德志.jpg'

	import img11 from '../../../assets/teacher/庄旭鹏2.jpg'
	import img12 from '../../../assets/teacher/庄旭鹏.jpg'

	import img13 from '../../../assets/teacher/朱红旭2.jpg'
	import img14 from '../../../assets/teacher/朱红旭.jpg'


	export default {
		data() {
			return {
				title: 'MORE',
				img: [
					{ default: img1, hover: img2 },
					{ default: img3, hover: img4 },
					{ default: img5, hover: img6 },
					{ default: img7, hover: img8 },
					{ default: img9, hover: img10 },
					{ default: img11, hover: img12 },
					{ default: img13, hover: img14 },
				]
			}
		},
		mounted() {
			console.log(this.$vuetify.breakpoint)
		},
		props:{
			teacher:Array,
		},
		computed: {
			binding() {
				const binding = {}
				if (this.$vuetify.breakpoint.smAndDown) binding.column = true
				return binding
			}
		},
		components: {
			tDetail,
			tBtn
		}
	}
</script>