<template>
    <div class="features-page">
        <!-- Hero 区域 -->
        <section class="features-hero">
            <div class="container">
                <h1 class="page-title gradient-text">功能特性</h1>
                <p class="page-subtitle">深入了解 NO WORK Maven 代码生成插件的强大功能</p>
            </div>
        </section>

        <!-- 核心功能区域 -->
        <section class="features-section core-features">
            <div class="container">
                <h2 class="section-title">核心功能</h2>
                <p class="section-subtitle">自动化生成基于数据库表的 Java 代码，提高开发效率</p>
                <div class="features-grid">
                    <!-- 特性卡片 1 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">💡</div>
                        <h3 class="feature-title">智能代码生成</h3>
                        <p class="feature-desc">
                            自动生成高质量的 MyBatis 代码，包括实体类、Mapper 接口、XML 映射文件等，
                            无需手动编写繁琐重复的代码，大幅提高开发效率。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>支持多种数据库方言</li>
                                <li>可自定义模板</li>
                                <li>自动处理关联关系</li>
                                <li>支持批量生成</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 2 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🌞</div>
                        <h3 class="feature-title">稳定可靠</h3>
                        <p class="feature-desc">
                            经过严格测试，完美适配主流版本的 MySQL 和 MyBatis，
                            支持自主更换驱动版本，确保在各种环境下稳定运行。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>兼容 MySQL 5.7+</li>
                                <li>支持 MyBatis 3.x</li>
                                <li>稳定的生成逻辑</li>
                                <li>完善的错误处理</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 3 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">💃</div>
                        <h3 class="feature-title">高度灵活</h3>
                        <p class="feature-desc">
                            提供完善的配置选项，可根据项目结构自定义生成输出，
                            支持多种命名策略，满足不同团队的开发习惯。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>自定义包路径</li>
                                <li>多种命名策略</li>
                                <li>可配置生成内容</li>
                                <li>支持插件扩展</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 4 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">⚡️</div>
                        <h3 class="feature-title">极速生成</h3>
                        <p class="feature-desc">
                            采用高效的代码逻辑，生成速度快如闪电，
                            即使面对大型数据库，也能在短时间内完成代码生成。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>优化的生成算法</li>
                                <li>多线程支持</li>
                                <li>低内存占用</li>
                                <li>生成速度提升 50%+</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 5 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">⚙️</div>
                        <h3 class="feature-title">开发工具支持</h3>
                        <p class="feature-desc">
                            只要是 Maven 项目，NO WORK 都能给你更好的开发体验，
                            支持主流 IDE，如 IntelliJ IDEA、Eclipse 等。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>Maven 插件集成</li>
                                <li>IDE 插件支持</li>
                                <li>命令行工具</li>
                                <li>可视化配置界面</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 6 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📦</div>
                        <h3 class="feature-title">极致轻量化</h3>
                        <p class="feature-desc">
                            插件体积小，依赖少，不会给项目带来额外负担，
                            易于集成和使用，学习成本低。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>体积仅几 KB</li>
                                <li>无额外依赖</li>
                                <li>易于集成</li>
                                <li>简单易用的 API</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 高级功能区域 -->
        <section class="features-section advanced-features">
            <div class="container">
                <h2 class="section-title">高级功能</h2>
                <p class="section-subtitle">提供更多个性化配置选项，满足不同项目需求</p>
                <div class="features-grid">
                    <!-- 特性卡片 1 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🔧</div>
                        <h3 class="feature-title">自定义属性支持</h3>
                        <p class="feature-desc">
                            通过 `customProperties` 节点配置各种自定义属性，
                            实现更灵活的代码生成控制。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>支持多种自定义属性</li>
                                <li>灵活的配置方式</li>
                                <li>可扩展的配置体系</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 2 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">✨</div>
                        <h3 class="feature-title">Lombok 支持</h3>
                        <p class="feature-desc">
                            自动添加 Lombok 注解和导入语句，
                            减少样板代码，使代码更加简洁。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>自动添加 Lombok 注解</li>
                                <li>支持 @Data、@Getter、@Setter 等注解</li>
                                <li>减少样板代码</li>
                                <li>使代码更加简洁</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 3 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📝</div>
                        <h3 class="feature-title">自定义分层后缀</h3>
                        <p class="feature-desc">
                            可自定义各个分层的类名后缀，如 Controller、Service、ServiceImpl 等，
                            满足不同项目的命名规范。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>自定义 Controller 后缀</li>
                                <li>自定义 Service 后缀</li>
                                <li>自定义 ServiceImpl 后缀</li>
                                <li>自定义 Mapper 后缀</li>
                                <li>自定义 DTO 后缀</li>
                                <li>自定义 Entity 后缀</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 4 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📁</div>
                        <h3 class="feature-title">自定义分层包名称</h3>
                        <p class="feature-desc">
                            可自定义各个分层的包名称，如 dto、entity、service 等，
                            满足不同项目的包结构需求。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>自定义 DTO 包名称</li>
                                <li>自定义 Entity 包名称</li>
                                <li>自定义 Service 包名称</li>
                                <li>自定义 ServiceImpl 包名称</li>
                                <li>自定义 Mapper 包名称</li>
                                <li>自定义 Controller 包名称</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 5 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🔄</div>
                        <h3 class="feature-title">自定义返回对象</h3>
                        <p class="feature-desc">
                            支持配置自定义的返回对象，
                            满足不同项目的 API 设计需求。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>可配置自定义返回对象</li>
                                <li>支持全局返回对象配置</li>
                                <li>满足不同 API 设计需求</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特性卡片 6 -->
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🔀</div>
                        <h3 class="feature-title">DTO 作为请求对象</h3>
                        <p class="feature-desc">
                            新增、修改、删除等操作使用 DTO 作为请求对象，
                            保持代码的规范性和安全性。
                        </p>
                        <div class="feature-highlights">
                            <ul>
                                <li>新增操作使用 DTO</li>
                                <li>修改操作使用 DTO</li>
                                <li>删除操作使用 DTO</li>
                                <li>保持代码规范性</li>
                                <li>提高代码安全性</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.features-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

/* Hero 区域 */
.features-hero {
    padding: 5rem 0 3rem;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
}

/* 背景动画装饰 */
.features-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    animation: backgroundFloat 20s ease-in-out infinite;
    z-index: 0;
}

/* Hero 内容容器 */
.features-hero .container {
    position: relative;
    z-index: 1;
}

/* 背景浮动动画 */
@keyframes backgroundFloat {

    0%,
    100% {
        transform: translateY(0px) scale(1);
    }

    33% {
        transform: translateY(-20px) scale(1.05);
    }

    66% {
        transform: translateY(20px) scale(0.95);
    }
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.page-subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

/* 特性区域 */
.features-section {
    padding: 5rem 0;
    width: 100%;
}

/* 核心功能区域样式 */
.core-features {
    background-color: var(--bg-primary);
}

/* 高级功能区域样式 */
.advanced-features {
    background-color: var(--bg-secondary);
}

/* 章节标题样式 */
.section-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1.125rem;
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.feature-card {
    background-color: var(--bg-card);
    padding: 2.5rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    text-align: left;
    transition: all var(--transition-normal);
    border: 1px solid var(--border-color);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
}

.feature-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.feature-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 1.5rem;
}

.feature-highlights {
    margin-top: 1.5rem;
}

.feature-highlights ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-highlights li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
}

.feature-highlights li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--success-color);
    font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .features-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .feature-card {
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    .features-hero {
        padding: 4rem 0 2rem;
    }

    .page-title {
        font-size: 2rem;
    }

    .page-subtitle {
        font-size: 1rem;
    }

    .features-details {
        padding: 3rem 0;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .feature-card {
        padding: 2rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1.75rem;
    }

    .feature-card {
        padding: 1.5rem;
    }

    .feature-icon {
        font-size: 2.5rem;
    }

    .feature-title {
        font-size: 1.25rem;
    }
}
</style>