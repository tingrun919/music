<style scoped lang="less">
	@import './Main.less';
</style>
<template>
	<v-app v-resize="onResize">
		<v-navigation-drawer stateless temporary app v-model="drawer">
			<navList></navList>
		</v-navigation-drawer>
		<v-toolbar app>
			<v-toolbar-side-icon @click.stop="toggleDrawer" v-if="isMobile"></v-toolbar-side-icon>
			<v-spacer></v-spacer>
			<toolbar class="hidden-xs-only"></toolbar>
		</v-toolbar>
		<v-content>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-content>
		<Tfooter></Tfooter>
	</v-app>
</template>

<script>
	import toolbar from './index/toolBar/toolbar.vue'
	import Tfooter from '../components/footer/footer.vue'
	import navList from '../components/navList/navList.vue'
	export default {
		data() {
			return {
				drawer: false,
				isMobile: false,
				windowSize: {
					x: 0,
					y: 0
				}
			}
		},
		mounted() {
			document.addEventListener('click', (e) => {
				// console.log(e, 'this is target')
				if (this.isMobile && e.target.className == "overlay overlay--active" || e.target.className == "toolbar__content") {
					this.drawer = false
				}
			})
			document.body.addEventListener('touchstart', function () { });
		},
		methods: {
			onResize() {
				this.isMobile = window.innerWidth < 640
				if (this.isMobile && !this.drawer) {
					this.drawer = !this.drawer
				} else {
					if (this.drawer) {
						this.drawer = !this.drawer
					}
				}
				this.windowSize = { x: window.innerWidth, y: window.innerHeight }
			},
			toggleDrawer() {
				this.drawer = !this.drawer
			}
		},
		components: {
			toolbar,
			Tfooter,
			navList
		}
	}

</script>