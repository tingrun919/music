<style scoped lang="less">
	@import './signup.less';
</style>
<template>
	<div class="login-main" v-bind:style="{height:viewHeight}">
		<p>WELCOM BACK</p>
		<div class="login-info">
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs1>
					</v-flex>
					<v-flex xs4>
						<div class="login-l">
							<span>PhoneNumber</span>
						</div>
					</v-flex>
					<v-flex xs6>
						<v-text-field color="grey darken-4" placeholder="手机号" single-line v-model="phone"></v-text-field>
					</v-flex>
					<v-flex xs1>
					</v-flex>

					<v-flex xs1>
					</v-flex>
					<v-flex xs4>
						<div class="login-l">
							<span>Password</span>
						</div>
					</v-flex>
					<v-flex xs6>
						<v-text-field color="grey darken-4" placeholder="设置密码" single-line v-model="password" :append-icon="e1 ? 'visibility' : 'visibility_off'"
						 :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"></v-text-field>
					</v-flex>
					<v-flex xs1>
					</v-flex>

					<v-flex xs1>
					</v-flex>
					<v-flex xs4>
						<div class="login-l">
							<span>ConfirmPassword</span>
						</div>
					</v-flex>
					<v-flex xs6>
						<v-text-field color="grey darken-4" placeholder="重复密码" single-line v-model="ConfirmPassword" :append-icon="e2 ? 'visibility' : 'visibility_off'"
						 :append-icon-cb="() => (e2 = !e2)" :type="e1 ? 'password' : 'text'"></v-text-field>
					</v-flex>
					<v-flex xs1>
					</v-flex>

					<v-flex xs1>
					</v-flex>
					<v-flex xs4>
						<div class="login-l">
							<span>VerificationCode</span>
						</div>
					</v-flex>
					<v-flex xs4>
						<v-text-field color="grey darken-4" placeholder="验证码" single-line v-model="VerificationCode"></v-text-field>
					</v-flex>
					<v-flex xs2>
						<v-btn style="margin-top: 14px;" outline block color="grey darken-4" :disabled="isActivity" @click="getVerificationCode">{{Vcode}}</v-btn>
					</v-flex>
					<v-flex xs1>
					</v-flex>
				</v-layout>
			</v-container>
			<v-layout justify-center class="btn-login">
				<v-btn outline block color="grey darken-4" @click="signup">注册 / SIGNUP</v-btn>
			</v-layout>
		</div>
	</div>
</template>
<script>
	import signupService from './service/signupService.js'
	import * as Cookies from "js-cookie";
	export default {
		mixins: [signupService],
		data() {
			return {
				phone: '',
				password: '',
				ConfirmPassword: '',
				VerificationCode: '',
				Vcode: '获取验证码',
				alltime: 60,
				timer: null,
				e1: true,
				e2: true,
				isActivity: false,
			}
		},
		computed: {
			viewHeight: function () {
				return (window.innerHeight - 64) + 'px'
			},
			viewHeightInfo: function () {
				return (window.innerHeight / 3) + 'px'
			},
		},
		methods: {
			signup() {
				this.signupAction(this.phone, this.password, this.VerificationCode).then(res => {
					if (res.code == 100000) {
						Cookies.set('token', res.data.aWebtoken, { expires: 7 })
						Cookies.set('aPortrait', res.data.aPortrait, { expires: 7 })
						Cookies.set('aPhone', res.data.aPhone, { expires: 7 })
						Cookies.set('aImtoken', res.data.aImtoken, { expires: 7 })
						Cookies.set('aNickname', res.data.aNickname, { expires: 7 })
						this.$router.push({
							name: 'index'
						});
					}
				})
			},
			getVerificationCode() {
				this.getVcode(this.phone)
				this.timer = setInterval(this.time, 1000);
			},
			time() {
				this.isActivity = true
				this.Vcode = this.alltime
				this.alltime = this.alltime - 1;
				if (this.alltime < 0) {
					clearTimeout(this.timer);
					this.alltime = 60;
					this.Vcode = '重新获取验证码'
					this.isActivity = false
				}
			}
		}
	}
</script>