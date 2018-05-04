<style scoped lang="less">
	@import './btnMore.less';
</style>
<template>
	<button v-bind:class="isWhite" @click="clickBtn">{{content}}</button>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			isWhite() {
				return {
					'btn-style': this.tStyle === 'black',
					btn_Choise: this.isChoise,
					'btn-style-white': this.tStyle === 'white',
				}
			}
		},
		props: {
			content: String,
			tStyle: String,
			isChoise: Boolean,
		},
		methods:{
			clickBtn(){
				this.$emit('clickBtn')
			}
		}
	}
</script>