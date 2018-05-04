<template>
	<div>
		<v-toolbar flat class="transparent">
			<v-list class="pa-0">
				<v-list-tile avatar>
					<v-list-tile-avatar>
						<img src="https://randomuser.me/api/portraits/men/85.jpg">
					</v-list-tile-avatar>
					<v-list-tile-content>
						<v-list-tile-title>测试用户</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-toolbar>
		<v-list class="pt-0" dense>
			<v-divider></v-divider>
			<v-list-tile v-for="item in items" :key="item.title" @click="">
				<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>{{ item.title }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				items: [
					{ title: '首页', icon: 'dashboard' },
					{ title: '课表', icon: 'question_answer' },
					{ title: '讨论版', icon: 'dashboard' },
					{ title: '付费', icon: 'question_answer' },
					{ title: '下载', icon: 'dashboard' },
					{ title: '关注我们', icon: 'question_answer' },
				],
			}
		},
		props: {
			content: String,
		},
	}
</script>