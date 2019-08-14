<template>
  <div class="app-main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="router-view"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="router-view"></router-view>
  </div>
</template>

<script>
    export default {};
</script>

<style>
.app-main {
  width: 95%;
  margin: 0 auto;
}
</style>
