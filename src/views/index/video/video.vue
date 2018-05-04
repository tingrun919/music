<style scoped lang="less">
	@import './video.less';
</style>
<template>
	<div class="video-main">
		<v-container grid-list-md text-xs-center>
			<div class="c-title">
				<p>{{tTitle}}</p>
				<span>{{english}}</span>
			</div>
			<v-layout row wrap v-bind="binding">
				<v-flex xs3 v-for="item in goodClass" :key="item.id">
					<v-card class="video-list">
						<v-detail :item="item"></v-detail>
					</v-card>
				</v-flex>
			</v-layout>
			<!-- <div class="c-btn" v-if="currentRoute"> -->
				<!-- <t-Btn :tStyle="black" :content="title" :isChoise="isChoise" @clickBtn="toAllVideo"></t-Btn> -->
			<!-- </div> -->
		</v-container>
	</div>
</template>

<script>
	import vDetail from './detail/video-detail.vue'
	import tBtn from '../../../components/btnMore.vue'
	export default {
		data() {
			return {
				title: 'MORE',
				isChoise: false,
				black: 'black'
			}
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
				if(path == 'teacher' || path == 'history-course' || path == 'all-video'){
					return false
				}else{
					return true
				}
			}
		},
		props: {
			vLength:Number,
			tTitle:String,
			english:String,
			goodClass:Array,
		},
		methods: {
			toAllVideo() {
				this.$router.push({
					name: 'all-video'
				});
			}
		},
		components: {
			vDetail,
			tBtn
		}
	}
</script>