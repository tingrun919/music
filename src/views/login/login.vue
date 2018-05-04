<style scoped lang="less">
	@import './login.less';
</style>
<style>
	.input-group__input>input {
		background: #fff;
	}

	.input-group__input:nth-child(1){
		background: #fff;
	}

	.icon--selection-control {
		font-size: 16px;
		height: 18px!important;
	}

	.input-group.input-group--selection-controls label {
		left: 16px;
	}
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
						<v-text-field color="grey darken-4" placeholder="密码" single-line v-model="password" :append-icon="e1 ? 'visibility' : 'visibility_off'"
						 :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"></v-text-field>
					</v-flex>
					<v-flex xs1>
					</v-flex>

					<v-flex xs1>
					</v-flex>
					<v-flex xs4>
					</v-flex>
					<v-flex xs6 class="login-a">
						<v-layout row wrap class="light--text">
							<v-flex xs12>
								<v-layout align-center>
									<v-checkbox color="grey darken-4" label="记住密码" v-model="checkbox"></v-checkbox>
									<div class="login-s">
										<span @click="toSignup">没有账号？点击注册</span>
									</div>
								</v-layout>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs1>
					</v-flex>
				</v-layout>
			</v-container>
			<v-layout justify-center class="btn-login">
				<v-btn outline block color="grey darken-4" @click="login">登陆 / LOGIN</v-btn>
			</v-layout>
		</div>
	</div>
</template>
<script>
	import loginService from './service/loginService.js'
	import * as Cookies from "js-cookie";
	export default {
		mixins: [loginService],
		data() {
			return {
				phone: '',
				password: '',
				e1: true,
				checkbox:true,
			}
		},
		// beforeRouteEnter(to, from, next) {
		// 	next(vm => {
		// 		if (Cookies.get('token')) {
		// 			vm.$router.push('/index')
		// 		}
		// 	})
		// },
		computed: {
			viewHeight: function () {
				return (window.innerHeight - 64) + 'px'
			},
			viewHeightInfo: function () {
				return (window.innerHeight / 3) + 'px'
			},
		},
		methods: {
			login() {
				this.loginAction(this.phone, this.password).then(res => {
					if (res.code == 100000) {
						Cookies.set('token', res.data.aWebtoken, { expires: 7 })
						Cookies.set('aPortrait', res.data.aPortrait, { expires: 7 })
						Cookies.set('aPhone', res.data.aPhone, { expires: 7 })
						Cookies.set('aImtoken', res.data.aImtoken, { expires: 7 })
						Cookies.set('aNickname', res.data.aNickname, { expires: 7 })
						this.$router.push({
							name: 'index'
						});
					} else {

					}
				})
			},
			toSignup() {
				this.$router.push({
					name: 'signup'
				});
			}
		}
	}
</script>