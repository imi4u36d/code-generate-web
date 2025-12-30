<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3 class="footer-logo gradient-text">NO WORK</h3>
                    <p class="footer-desc">稳定 灵活 快速的Mybatis插件</p>
                </div>

                <div class="footer-links">
                    <a href="/" class="footer-link">首页</a>
                    <a href="/features" class="footer-link">特性</a>
                    <a href="/contact" class="footer-link">相关链接</a>
                    <a href="https://github.com/imi4u36d/code-generate.git" target="_blank"
                        class="footer-link">GitHub</a>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-copyright">
                    <span>Released under the MIT License.</span>
                    <span>Copyright © 2025-present Wang zhuo</span>
                </div>
                <div class="footer-icp">
                    <span>备案号:豫ICP备2025111982号</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.footer {
    margin-top: 5rem;
    width: 100%;
    background-color: var(--bg-primary);
    border-top: 1px solid var(--border-color);
    padding: 3rem 0 2rem;
    color: var(--text-secondary);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    /* 新的渐变颜色 - 与全站保持一致 */
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    -webkit-background-clip: text;
    color: transparent;
    text-fill-color: transparent;
}

.footer-desc {
    font-size: 0.875rem;
    color: var(--text-light);
    margin: 0;
}

.footer-links {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color var(--transition-fast);
}

.footer-link:hover {
    color: var(--primary-color);
}

.footer-bottom {
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.875rem;
}

.footer-copyright {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.footer-copyright span,
.footer-icp span {
    color: var(--text-light);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .footer {
        padding: 2rem 0 1.5rem;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }

    .footer-links {
        justify-content: center;
        gap: 1.5rem;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .footer-copyright {
        justify-content: center;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .footer-links {
        flex-direction: column;
        gap: 1rem;
    }

    .footer-copyright {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>