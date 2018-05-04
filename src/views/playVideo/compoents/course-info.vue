<style scoped lang="less">
	@import './course-info.less';
</style>
<template>
	<div>
		<div class="course-bg" v-bind:style="{backgroundImage: 'url(' + img + ')'}">
			<div>
				<!-- <p>{{video.aClbetime}}</p> -->
			</div>
			<div>
				<!-- <h3>导师：{{video.aNickname}}</h3> -->
				<!-- <span>2375</span> -->
				<!-- <span>213</span> -->
				<!-- <span>1203</span> -->
			</div>
		</div>
		<div class="course-video">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap v-bind="binding">
					<v-flex xs10 offset-xs1>
						<video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
						</video-player>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
		<div class="course-info">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap v-bind="binding">
					<v-flex xs8 offset-xs2>
						<!-- <div v-html="videoList.aJiangyi"></div> -->
						<!-- <h2>萨克斯初级-入门教学第二节</h2>
						<span>自学教程零基础轻松萨克斯培训教程！已获得10万学员好评</span>
						<v-card class="video-list">
							<v-card-media :src="src1" height="400px"></v-card-media>
						</v-card>
						<p>中国著名爵士萨克斯演奏家、广州维度爵士乐团团长、中国大众音乐协会萨克斯学会常务理事、广东省青年文艺家协会副秘书长、广东省流行音乐协会爵士委员会主任、广州市青年现代音乐协会会长、星海音乐学院现代音乐与戏剧学院爵士萨克斯专业教师、星海音乐学院继续教育学院萨克斯专业教师、广州艺术学校萨克斯专业教师。
							毕业于广州星海音乐学院，师从著名作曲理论家、教育家、翻译家、作曲系教授、研究生导师-任达敏,系统地学习了爵士和声和爵士作曲。曾录制过个人教学影碟《萨克斯入门》并发行过多张萨克斯专辑，创作过许多大、中、小型爵士乐队以及萨克斯重奏的作品，在国内成功举办多场爵士音乐会。
						</p>
					</v-flex>
					<v-flex xs8 offset-xs2>
						<v-card class="video-list">
							<v-card-media :src="src0" height="400px"></v-card-media>
						</v-card>
						<p>中国著名爵士萨克斯演奏家、广州维度爵士乐团团长、中国大众音乐协会萨克斯学会常务理事、广东省青年文艺家协会副秘书长、广东省流行音乐协会爵士委员会主任、广州市青年现代音乐协会会长、星海音乐学院现代音乐与戏剧学院爵士萨克斯专业教师、星海音乐学院继续教育学院萨克斯专业教师、广州艺术学校萨克斯专业教师。
							毕业于广州星海音乐学院，师从著名作曲理论家、教育家、翻译家、作曲系教授、研究生导师-任达敏,系统地学习了爵士和声和爵士作曲。曾录制过个人教学影碟《萨克斯入门》并发行过多张萨克斯专辑，创作过许多大、中、小型爵士乐队以及萨克斯重奏的作品，在国内成功举办多场爵士音乐会。
						</p> -->
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	</div>
</template>
<script>
	import bg from '../../../assets/bg/upload-3-2560x1440.jpg';
	import ti1 from '../../../assets/teacher/teacher-info1.jpg';
	import ti2 from '../../../assets/teacher/teacher-info2.jpg';

	import 'videojs-flash'

	export default {
		data() {
			return {
				img: bg,
				src0: ti1,
				src1: ti2,
				video:null,
				ifJang:false,
				// videojs options
				playerOptions: {
					height: '500',
					autoplay: false,
					language: 'en',
					playbackRates: [0.7, 1.0, 1.5, 2.0],
					techOrder: ['flash', 'html5'], // 兼容顺序
					sources: [{
						// flv
						type: 'video/x-flv',
						src: ''
						// src:'http://vod8edr98q4.vod.126.net/vod8edr98q4/cca5a781ace94e33aef8d545b07552a0_1524571687678_1524572266212_328698545-00002.flv'
					}],
					poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
				}
			}
		},
		props: {
			videoList: Array,
		},
		watch:{
			videoList:function(){
				for(var i = 0; i < this.videoList.length; i++){
					if(this.videoList[i].aId == this.$route.params.id){
						this.video = this.videoList[i].video.ret
						this.playerOptions.sources[0].src = this.video.origUrl;
					}
				}
				console.log(this.video,'videoListvideoListvideoList')
			}
		},
		computed: {
			binding() {
				const binding = {}
				if (this.$vuetify.breakpoint.smAndDown) binding.column = true
				return binding
			},
			player() {
				return this.$refs.videoPlayer.player
			}
		},
		mounted() {
			// setTimeout(() => {
				// console.log(this.video,'2131231231231')
			// }, 500)
			var fls = this.checkFlash();
			if (!fls.f) {
				if (confirm("您的浏览器未安装Flash插件，现在安装？")) {
					window.location.href = "https://get2.adobe.com/cn/flashplayer/";
				}
			}
		},
		methods: {
			checkFlash() {
				var hasFlash = 0;　　　　 //是否安装了flash    
				var flashVersion = 0;　　 //flash版本    

				if (document.all) {
					var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					if (swf) {
						hasFlash = 1;
						VSwf = swf.GetVariable("$version");
						flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
					}
				} else {
					if (navigator.plugins && navigator.plugins.length > 0) {
						var swf = navigator.plugins["Shockwave Flash"];
						if (swf) {
							hasFlash = 1;
							var words = swf.description.split(" ");
							for (var i = 0; i < words.length; ++i) {
								if (isNaN(parseInt(words[i]))) continue;
								flashVersion = parseInt(words[i]);
							}
						}
					}
				}
				return {
					f: hasFlash,
					v: flashVersion
				};
			}
		},
		components: {
		}
	}
</script>