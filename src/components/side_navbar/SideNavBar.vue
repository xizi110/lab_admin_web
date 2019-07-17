<template>
	<div class="side-wrapper">
		<el-menu
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			:collapse="isCollapse"
			:collapse-transition="true"
		>
			<el-menu-item index="0" @click="isOpen">
				<i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
			</el-menu-item>
			<el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
				<el-menu-item index="1-1">选项1</el-menu-item>
				<el-menu-item index="1-2">选项2</el-menu-item>
				<el-menu-item index="1-3">选项3</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二</span>
			</el-menu-item>
			<el-menu-item index="3" disabled>
				<i class="el-icon-document"></i>
				<span slot="title">导航三</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<span slot="title">导航四</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false
			};
		},
		methods: {
			isOpen() {
				this.isCollapse = !this.isCollapse;
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	};
</script>

  
<style>
	.side-wrapper {
		display: inline-block;
		text-align: center;
		border: solid 1px #e6e6e6;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		height: 100%;
	}
	.el-menu {
		border: 0;
	}
</style>
