<style scoped lang="less">
	@import './teacher-info.less';
</style>
<template>
	<div>
		<div class="teacher-bg" v-bind:style="{backgroundImage: 'url(' + img + ')'}">
			<div>
				<p>{{userInfo.aNickname}}</p>
			</div>
			<!-- <div>
				<span>2375</span>
				<span>213</span>
				<span>1203</span>
			</div> -->
			<div>
				<t-Btn :tStyle="white" :content="follow" :isChoise="isChoise"></t-Btn>
				<t-Btn :tStyle="white" :content="enter" :isChoise="nisChoise"></t-Btn>
			</div>
		</div>
		<!-- <div class="teacher-info">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap v-bind="binding">
					<p>中国著名爵士萨克斯演奏家、广州维度爵士乐团团长、中国大众音乐协会萨克斯学会常务理事、广东省青年文艺家协会副秘书长、广东省流行音乐协会爵士委员会主任、广州市青年现代音乐协会会长、星海音乐学院现代音乐与戏剧学院爵士萨克斯专业教师、星海音乐学院继续教育学院萨克斯专业教师、广州艺术学校萨克斯专业教师。
						毕业于广州星海音乐学院，师从著名作曲理论家、教育家、翻译家、作曲系教授、研究生导师-任达敏,系统地学习了爵士和声和爵士作曲。曾录制过个人教学影碟《萨克斯入门》并发行过多张萨克斯专辑，创作过许多大、中、小型爵士乐队以及萨克斯重奏的作品，在国内成功举办多场爵士音乐会。
					</p>
					<v-flex xs6>
						<v-card class="video-list">
							<v-card-media :src="src0" height="300px"></v-card-media>
						</v-card>
					</v-flex>
					<v-flex xs6>
						<v-card class="video-list">
							<v-card-media :src="src1" height="300px"></v-card-media>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</div> -->
	</div>
</template>
<script>
	import bg from '../../../../assets/bg/upload-3-2560x1440.jpg';
	import tBtn from '../../../../components/btnMore.vue';
	import ti1 from '../../../../assets/teacher/teacher-info1.jpg';
	import ti2 from '../../../../assets/teacher/teacher-info2.jpg';
	export default {
		data() {
			return {
				img: bg,
				follow: '关注',
				enter: '进入直播',
				white: 'white',
				isChoise: true,
				nisChoise: false,
				src0: ti1,
				src1: ti2,
			}
		},
		props: {
			userInfo: {
				type: Object,
				default: function () {
					return []
				}
			},
			iffollow: Number,
		},
		watch: {
			iffollow: function () {
				if (this.iffollow == 0) {
					this.isChoise == false
					this.nisChoise == true
				} else {
					this.isChoise == true
					this.nisChoise == false
				}
			}
		},
		computed: {
			binding() {
				const binding = {}
				if (this.$vuetify.breakpoint.smAndDown) binding.column = true
				return binding
			},
		},
		methods: {

		},
		components: {
			tBtn
		}
	}
</script>