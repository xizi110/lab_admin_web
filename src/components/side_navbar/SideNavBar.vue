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
      <router-link to="/home">
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>文章管理</span>
        </template>
        <router-link to="/event/list">
          <el-menu-item index="2-1">
            <i class="el-icon-s-order"></i>
            <span>大事记列表</span>
          </el-menu-item>
        </router-link>
        <router-link to="/event/add">
          <el-menu-item index="2-2">
            <i class="el-icon-edit"></i>
            <span>添加大事记</span>
          </el-menu-item>
        </router-link>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-video-camera-solid"></i>
        <span slot="title">视频管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-user"></i>
        <span slot="title">成员管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">公告管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">其他设置</span>
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
