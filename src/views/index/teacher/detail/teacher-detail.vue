<style scoped lang="less">
	@import './teacher-detail.less';
</style>
<template>
	<div class="t-detail-hover" v-bind:style="{backgroundImage: 'url(' + imgList.aReason + ')', height:viewHeight}" @click="toTeacher">
		<div class="t-detail" v-bind:style="{backgroundImage: 'url(' + imgList.aAuditedmemo + ')', height:viewHeight}"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			imgList: Object,
		},
		beforeMount() {
		},
		methods: {
			toTeacher() {
				var classId = this.imgList.aId
				this.$router.push(`teacher/${classId}`);
			}
		},
		computed: {
			viewHeight: function () {
				if (this.$vuetify.breakpoint.smAndDown) {
					return ((window.innerWidth) / 1.1) + 'px'
				} else {
					return ((window.innerWidth + 180) / 5) + 'px'
				}
			},
		},
	}
</script>