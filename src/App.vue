<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
	html,body{
		height: 100%;
	}
	#app {
		font-family: 'Montserrat', "PingFang SC", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	a,a:active,a:focus,a:hover,a:visited {
		text-decoration:none
	}
	ol,ul,li {
		list-style: none
	}
	textarea{
		outline: none;
		resize: none;
	}
</style>