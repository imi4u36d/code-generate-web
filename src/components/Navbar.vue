<template>
    <nav class="navbar">
        <div class="logo">NO WORK</div>
        <ul class="nav-links">
            <li><router-link to="/" disabled>首页</router-link></li>
            <li><router-link to="/docs">文档</router-link></li>
            <li><router-link to="/contact">相关连接</router-link></li>
            <li><router-link to="/version">版本</router-link></li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    position: fixed;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid #ccc;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    margin-left: 15rem;
}

.nav-links {
    list-style: none;
    display: flex;
    padding: 1rem;
    margin-right: 15rem;
}

.nav-links li {
    margin: 0 1rem;
}

.nav-links a {
    color: black;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #555;
}
</style>