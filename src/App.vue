<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  /* 为导航栏留出空间 */
  min-height: 100vh;
  /* 确保页面高度至少为视口高度 */
  overflow-y: scroll;
  /* 允许垂直滚动 */
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.content {
  padding-top: 60px;
  /* 为导航栏留出空间，根据导航栏高度调整 */
}
</style>