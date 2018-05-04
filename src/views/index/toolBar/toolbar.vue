<style scoped lang="less">
	@import './toolbar.less';
</style>
<template>
	<div class="header__toolbar">
		<ul>
			<li>
				<span class="link ">
					<router-link to="/" tag="a" class="link__action" v-bind:class="{ isactive: currentRoute == 'index'}">
						<span>
							首页
						</span>
					</router-link>
				</span>
			</li>
			<li>
				<span class="link ">
					<router-link to="/history-course" tag="a" class="link__action" v-bind:class="{ isactive: currentRoute == 'history-course'}">
						<span>
							课表
						</span>
					</router-link>
				</span>
			</li>
			<!-- <li>
				<span class="link ">
					<router-link to="/all-video" tag="a" class="link__action" v-bind:class="{ isactive: currentRoute == 'all-video'}">
						<span>
							视频
						</span>
					</router-link>
				</span>
			</li> -->
			<!-- <li>
				<span class="link ">
					<a href="https://www.wrayward.com/about" class="link__action">
						<span>
							讨论版
						</span>
					</a>
				</span>
			</li> -->
			<li>
				<span class="link ">
					<a href="https://www.wrayward.com/careers" class="link__action">
						<span>
							付费
						</span>
					</a>
				</span>
			</li>
			<!-- <li>
				<span class="link ">
					<a href="https://www.wrayward.com/careers" class="link__action">
						<span>
							下载
						</span>
					</a>
				</span>
			</li> -->
			<!-- <li>
				<span class="link ">
					<a href="https://www.wrayward.com/careers" class="link__action">
						<span>
							关注我们
						</span>
					</a>
				</span>
			</li> -->
			<li>
				<v-icon class="icon__action" @click="toLogin">person</v-icon>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isActive: false,
			}
		},
		computed:{
			currentRoute() {
				return this.$route.name
			}
		},
		methods:{
			toLogin(){
				this.$router.push({
					name: 'login'
				});
			}
		}
	}
</script>