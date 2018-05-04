<style scoped lang="less">
	@import './footer.less';
</style>
<template>
	<v-container fluid>
		<v-layout row wrap>
			<v-flex d-flex md12>
				<v-flex d-flex md7 class="f-card">
				</v-flex>
				<v-flex d-flex md5>
					<div class="f-card">
						<div>
							<span>购买课程</span>
							<span>收费说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span>联系我们</span>
						</div>
						<div>
							<span>最新课表</span>
							<span>用户注册使用协议</span>
							<span>北京市西城区前桃园胡同1号楼D1-5号</span>
						</div>
						<div>
							<span>讲师列表</span>
							<span>讲师注册使用协议</span>
							<span>+86 18515185860</span>
						</div>
					</div>
				</v-flex>
			</v-flex>
			<v-flex d-flex md12>
				<div class="f-info">
					<span>icp备案：京ICP备18008018号-1</span><span>鲲鹏爱乐©版权所有</span>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
	export default {
		data() {
			return {
				lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
			}
		},
		props: {
			content: String,
		},
	}
</script>