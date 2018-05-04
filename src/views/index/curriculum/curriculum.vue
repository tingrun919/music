<style scoped lang="less">
	@import './curriculum.less';
</style>
<template>
	<div class="curriculum-main">
		<v-container grid-list-lg text-xs-center>
			<div class="c-title">
				<p>{{tTitle}}</p>
				<span>{{english}}</span>
			</div>
			<v-layout row wrap v-bind="binding">
				<v-flex xs3 v-for="item in curriculumClass" :key="item.id">
					<v-card class="curriculum-list">
						<c-Detail :item="item"></c-Detail>
					</v-card>
				</v-flex>
			</v-layout>
			<div class="c-btn" v-if="currentRoute">
				<t-Btn :tStyle="black" :content="title" :isChoise="isChoise" @clickBtn="toHistoryCurriculum"></t-Btn>
			</div>
		</v-container>
	</div>
</template>

<script>
	import cDetail from './detail/curriculum-detail.vue'
	import tBtn from '../../../components/btnMore.vue'
	export default {
		data() {
			return {
				title: 'MORE',
				isChoise:false,
				black:'black',
			}
		},
		props: {
			cLength:Number,
			tTitle:String,
			english:String,
			curriculumClass:Array,
		},
		mounted() {
			console.log(this.$vuetify.breakpoint)
		},
		computed: {
			binding() {
				const binding = {}
				if (this.$vuetify.breakpoint.smAndDown) binding.column = true
				return binding
			},
			currentRoute() {
				var path = this.$route.name
				if(path == 'teacher' || path == 'history-course'){
					return false
				}else{
					return true
				}
			}
		},
		methods:{
			toHistoryCurriculum(){
				this.$router.push({
					name: 'history-course'
					// name: 'live'
				});
			}
		},
		components: {
			cDetail,
			tBtn
		}
	}
</script>