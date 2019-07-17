<template>
	<div>
		<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" menu-trigger="click">
			<el-submenu index="1" style="float: right; margin-right: 2em;">
				<template slot="title">李泽众</template>
				<el-menu-item index="1-1">账户信息</el-menu-item>
				<el-menu-item index="1-2">设置</el-menu-item>
				<el-menu-item index="1-3">退出登录</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	};
</script>