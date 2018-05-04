<style scoped lang="less">
	@import './history-curriculum.less';
</style>
<template>
	<div class="video-main">
		<v-container grid-list-md text-xs-center>
			<div class="c-title">
				<p>课程视频</p>
				<span>Course Video</span>
			</div>
			<v-layout row wrap v-bind="binding">
				<v-flex xs3 v-for="i in 12" :key="`3${i}`">
					<v-card class="video-list">
						<v-detail></v-detail>
					</v-card>
				</v-flex>
				<div class="text-md-center history-pt">
					<v-pagination color="orange lighten-1" circle :total-visible="7" :length="18" v-model="page"></v-pagination>
				</div>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	import vDetail from '../../../index/video/detail/video-detail.vue'
	// import tBtn from '../../../components/btnMore.vue'
	export default {
		data() {
			return {
				title: 'MORE',
				page: 1
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
			}
		},
		watch: {
			page() {
				console.log('page: ' + this.page);
			}
		},
		methods: {
		},
		components: {
			vDetail,
			// tBtn
		}
	}
</script>