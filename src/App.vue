<template>
  <div id="app">
    <Navbar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
/* 导入全局样式 */
@import './assets/styles.css';

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  /* 确保页面高度至少为视口高度 */
  overflow-x: hidden;
  /* 防止水平滚动 */
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.content {
  padding-top: 72px;
  /* 为导航栏留出空间，根据导航栏高度调整 */
  min-height: calc(100vh - 72px);
}

/* 确保所有页面内容都能正常显示 */
* {
  box-sizing: border-box;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .content {
    padding-top: 64px;
    /* 移动端导航栏高度可能不同 */
    min-height: calc(100vh - 64px);
  }
}
</style>