<style scoped lang="less">
	@import './live.less';
</style>
<template>
	<div class="l-main">
		<div class="l-left" :style="{ margin: size }">
			<a class="left-btn">
				<span @click="test" v-bind:class="{l_left_span_c : isClose}"></span>
			</a>
		</div>
		<div class="course-video">
			<div class="mine-custom-info">
				<div class="teacher-left">
					<img src="../../assets/avatar/刘培义封面照1.jpg" width="100" height="100">
					<div class="l-teacher-info">
						<div>
							<p>导师：于振海</p>
						</div>
						<div  class="info-teacher-q">
							<p>萨克斯初级-入门教学第二节
							</p>
							<span>自学教程零基础轻松萨克斯培训教程！已获得10万学员好评！</span>
						</div>
					</div>
				</div>
				<div class="right">
						<v-btn round small color="orange lighten-1" dark>关注</v-btn>

					<!-- <span>关注</span> -->
				</div>
			</div>
			<video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
			</video-player>
		</div>
		<div class="l-right">
			<div class="l-chatbox">
				<div class="mine-custom-info" v-for="n in aaa" v-if="hasText">
					<div class="left">
						<img src="../../assets/avatar/刘培义封面照1.jpg" width="40" height="40">
						<div class="l-info">
							<p>{{n.name}}
								<span>{{n.time | moment}}</span>
							</p>
							<div class="info-q">
								<span>{{n.content}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<v-container fluid class="l-text">
				<v-layout row>
					<v-flex xs12>
						<v-text-field color="orange lighten-1" rows="4" v-model="sendtext" label="聊天内容" textarea></v-text-field>
						<t-Btn class="btn-enter" :tStyle="black" :content="title" :isChoise="isChoise" @clickBtn="toHistoryCurriculum"></t-Btn>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	</div>
</template>

<script>
	// videojs
	import videojs from 'video.js'
	window.videojs = videojs
	// hls plugin for videojs6
	require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

	import * as Cookies from "js-cookie";
	// export
	import tBtn from '../../components/btnMore.vue'
	//service
	import liveService from './service/liveService.js'
	export default {
		mixins: [liveService],
		data() {
			return {
				title: 'Enter',
				isChoise: false,
				black: 'black',
				isClose: false,
				size: '0',
				sendtext: '',
				aaa: [],
				channel: [],
				hasText: false,
				playerOptions: {
					// videojs and plugin options
					height: window.innerHeight - 100,
					language: 'zh-CN',
					languages: {
						'zh-CN': {
							'No compatible source was found for this media.': '请稍等 直播暂停中~',
							'The media could not be loaded, either because the server or network failed or because the format is not supported.': '请稍等 直播暂停中~'
						}
					},
					sources: [{
						withCredentials: false,
						type: "application/x-mpegURL",
						src: "http://vod8edr98q4.vod.126.net/vod8edr98q4/31259aace0724554b79b6b81e4b8420b_1518266142949_1518267963647_181474363-00001.flv"
					}],
					controlBar: {
						timeDivider: false,
						durationDisplay: false
					},
					flash: { hls: { withCredentials: false } },
					html5: { hls: { withCredentials: false } },
					poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
				},
			}
		},
		mounted() {

		},
		computed: {
			player() {
				return this.$refs.videoPlayer.player
			}
		},
		beforeMount() {
			this.getLiveData().then(() => {
				this.player.pause()
				this.player.src(this.channel.aHlspullurl)
				this.player.play()
			})
			this.webIm()
		},
		destroyed() {
			this.quitRoom()
		},
		methods: {
			webIm() {
				var self = this;
				var options = {
					apiUrl: this.$WebIM.config.apiURL,
					user: Cookies.get("aPhone"),
					pwd: Cookies.get("aImtoken"),
					appKey: this.$WebIM.config.appkey
				}
				this.$imConn.open(options);
				this.$imConn.listen({
					onOpened: function (message) {
						var room = self.channel.aRoomid
						self.$imConn.joinChatRoom({
							roomId: room
						});
					},
					onPresence: function (message) {
						self.handlePresence(message);
					},
					onTextMessage: function (message) {
						self.onMessage(message)
					},
				});
			},
			test() {
				if (this.size == "0") {
					this.isClose = true
					this.size = "0 0 0 -19%"
				} else {
					this.isClose = false
					this.size = "0"
				}
			},
			toHistoryCurriculum() {
				this.sendRoomText(this.sendtext, this.channel.aRoomid, Cookies.get("aPhone"), Cookies.get("aPortrait"))
			},
			handlePresence(e) {

			},
			quitRoom() {
				// 退出聊天室
				this.$imConn.quitChatRoom({
					roomId: this.channel.aRoomid
				});
			},
			sendRoomText(msgContent, roomid, name, img) {
				var self = this
				var id = this.$imConn.getUniqueId();         // 生成本地消息id
				var msg = new WebIM.message('txt', id); // 创建文本消息
				var option = {
					msg: msgContent,          // 消息内容
					to: roomid,               // 接收消息对象(聊天室id)
					roomType: true,
					chatType: 'chatRoom',
					ext: { 'name': name, 'icon': img },    //用户自扩展的消息内容（群聊用法相同）
					success: function () {
						var option = {
							content: self.sendtext,
							name: Cookies.get("aNickname"),
							time: new Date()
						}
						self.aaa.push(option)
						self.sendtext = ''
						self.hasText = true
					},
					fail: function () {
						console.log('failed');
					}
				};
				msg.set(option);
				msg.setGroup('groupchat');
				this.$imConn.send(msg.body);
			},
			onMessage(message) {
				var option = {
					content: message.data,
					name: message.ext.name,
					time: new Date()
				}
				this.aaa.push(option)
				this.sendtext = ''
				this.hasText = true
			}

		},
		components: {
			tBtn,
		}
	}
</script>