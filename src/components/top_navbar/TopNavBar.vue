<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" menu-trigger="click">
      <el-menu-item>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height: inherit;">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/event' }">文章管理</el-breadcrumb-item>
          <el-breadcrumb-item>大事记列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-menu-item>
      <el-submenu index="1" style="float: right; margin-right: 2em;">
        <template slot="title">{{username}}</template>
        <el-menu-item index="1-1">账户信息</el-menu-item>
        <el-menu-item index="1-2">设置</el-menu-item>
        <el-menu-item index="1-3">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { getUser } from '@/util/auth'
export default {
  data() {
    return {
        username: getUser()
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>