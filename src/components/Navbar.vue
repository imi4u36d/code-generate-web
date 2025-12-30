<template>
    <nav class="navbar">
        <div class="container flex justify-between items-center">
            <router-link to="/" class="logo gradient-text font-bold">
                NO WORK
            </router-link>

            <!-- 桌面导航 -->
            <ul class="nav-links desktop-nav">
                <li>
                    <router-link to="/" class="nav-link" exact-active-class="active">
                        首页
                    </router-link>
                </li>
                <li>
                    <router-link to="/features" class="nav-link" active-class="active">
                        特性
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" class="nav-link" active-class="active">
                        相关链接
                    </router-link>
                </li>
                <li>
                    <a href="https://github.com/imi4u36d/code-generate.git" target="_blank" class="nav-link">
                        GitHub
                    </a>
                </li>
            </ul>

            <!-- 移动端汉堡菜单 -->
            <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Toggle menu">
                <span class="menu-icon"></span>
                <span class="menu-icon"></span>
                <span class="menu-icon"></span>
            </button>
        </div>

        <!-- 移动端导航菜单 -->
        <ul class="nav-links mobile-nav" :class="{ 'active': isMobileMenuOpen }">
            <li>
                <router-link to="/" class="nav-link" exact-active-class="active" @click="toggleMobileMenu">
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/features" class="nav-link" active-class="active" @click="toggleMobileMenu">
                    特性
                </router-link>
            </li>
            <li>
                <router-link to="/contact" class="nav-link" active-class="active" @click="toggleMobileMenu">
                    相关链接
                </router-link>
            </li>
            <li>
                <a href="https://github.com/imi4u36d/code-generate.git" target="_blank" class="nav-link"
                    @click="toggleMobileMenu">
                    GitHub
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--bg-primary);
    box-shadow: var(--shadow-sm);
    z-index: 1000;
    transition: all var(--transition-normal);
}

.logo {
    font-size: var(--font-size-xl);
    font-weight: 700;
    padding: var(--spacing-md) 0;
    /* 新的渐变颜色 - 与Hero区域保持一致 */
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    -webkit-background-clip: text;
    color: transparent;
    text-fill-color: transparent;
}

/* 导航链接基础样式 */
.nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
    background-color: var(--bg-secondary);
}

.nav-link.active {
    color: var(--primary-color);
    font-weight: 600;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background-color: var(--primary-color);
    border-radius: var(--radius-full);
}

/* 桌面导航 */
.desktop-nav {
    display: flex;
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    padding: var(--spacing-sm);
    cursor: pointer;
}

.menu-icon {
    display: block;
    width: 24px;
    height: 3px;
    background-color: var(--text-primary);
    border-radius: var(--radius-full);
    transition: all var(--transition-normal);
}

.mobile-menu-btn.active .menu-icon:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active .menu-icon:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active .menu-icon:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* 移动端导航菜单 */
.mobile-nav {
    display: none;
    flex-direction: column;
    background-color: var(--bg-primary);
    box-shadow: var(--shadow-md);
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: var(--spacing-md) 0;
    gap: 0;
    transition: all var(--transition-normal);
}

.mobile-nav.active {
    display: flex;
}

.mobile-nav .nav-link {
    display: block;
    width: 100%;
    text-align: center;
    padding: var(--spacing-md);
    border-radius: 0;
}

.mobile-nav .nav-link:hover {
    background-color: var(--bg-secondary);
}

.mobile-nav .nav-link.active::after {
    display: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .desktop-nav {
        display: none;
    }

    .mobile-menu-btn {
        display: flex;
    }
}

@media (max-width: 480px) {
    .logo {
        font-size: var(--font-size-lg);
    }

    .nav-links {
        gap: var(--spacing-md);
    }
}
</style>