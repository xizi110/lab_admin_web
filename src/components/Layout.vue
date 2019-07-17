<template>
	<div class="wrapper">
		<side-navbar></side-navbar>
		<div class="main">
			<top-navbar></top-navbar>
			<app-main></app-main>
		</div>
	</div>
</template>


<script>
	import SideNavBar from "@/components/side_navbar/SideNavBar";
	import TopNavBar from "@/components/top_navbar/TopNavBar";
	import AppMain from "@/components/app_main/AppMain";

	export default {
		components: {
			"side-navbar": SideNavBar,
            "top-navbar": TopNavBar,
            "app-main": AppMain,
		}
	};
</script>


<style scoped>
	.wrapper {
		clear: both;
		display: flex;
		height: 100%;
		width: 100%;
	}
	.main {
		flex: 1;
	}
</style>

