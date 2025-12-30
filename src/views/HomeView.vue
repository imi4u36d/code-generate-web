<template>
    <div id="home" class="home-container">
        <!-- Hero 区域 -->
        <section class="hero-section">
            <div class="container">
                <h1 class="hero-main-title gradient-text">NO WORK</h1>
                <h2 class="hero-subtitle">稳定 灵活 快速的Maven代码生成插件</h2>
                <p class="hero-description">
                    不到100KB超小体积，自动化生成基于数据库表的Java代码，包括Controller、Service、ServiceImpl、Entity、DTO、Mapper和XML文件</p>
                <div class="hero-cta">
                    <a href="https://github.com/imi4u36d/code-generate.git" target="_blank" class="primary-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        前往GitHub
                    </a>
                    <a href="/features" class="secondary-button">
                        查看特性
                    </a>
                </div>
            </div>
        </section>

        <!-- 核心功能区域 -->
        <section class="core-features-section">
            <div class="container">
                <h2 class="section-title">核心功能</h2>
                <div class="features-grid">
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">💡</div>
                        <h3 class="feature-title">自动化代码生成</h3>
                        <p class="feature-desc">根据数据库表结构自动生成Controller、Service、ServiceImpl、Entity、DTO、Mapper和XML文件</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📋</div>
                        <h3 class="feature-title">多表同时生成</h3>
                        <p class="feature-desc">支持同时为多个数据库表生成代码，提高开发效率</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">⚙️</div>
                        <h3 class="feature-title">灵活的配置</h3>
                        <p class="feature-desc">通过YAML配置文件，轻松指定数据库连接、生成表和输出路径等</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🎨</div>
                        <h3 class="feature-title">自定义生成模版</h3>
                        <p class="feature-desc">可自定义生成模版，按需调整代码生成规则</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📚</div>
                        <h3 class="feature-title">支持Swagger配置</h3>
                        <p class="feature-desc">可选择是否启用Swagger文档生成</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📦</div>
                        <h3 class="feature-title">超小体积</h3>
                        <p class="feature-desc">45KB超小体积，小身材，大作用</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 高级功能区域 -->
        <section class="advanced-features-section">
            <div class="container">
                <h2 class="section-title">高级功能</h2>
                <div class="features-grid">
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🔧</div>
                        <h3 class="feature-title">自定义属性支持</h3>
                        <p class="feature-desc">通过customProperties节点配置各种自定义属性</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">✨</div>
                        <h3 class="feature-title">Lombok支持</h3>
                        <p class="feature-desc">自动添加Lombok注解和导入语句</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📝</div>
                        <h3 class="feature-title">自定义分层后缀</h3>
                        <p class="feature-desc">可自定义各个分层的类名后缀（如Controller、Service等）</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">📁</div>
                        <h3 class="feature-title">自定义分层包名称</h3>
                        <p class="feature-desc">可自定义各个分层的包名称（如dto、entity、service等）</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🔄</div>
                        <h3 class="feature-title">自定义返回对象</h3>
                        <p class="feature-desc">支持配置自定义的返回对象</p>
                    </div>
                    <div class="feature-card hover-lift">
                        <div class="feature-icon">🔀</div>
                        <h3 class="feature-title">DTO作为请求对象</h3>
                        <p class="feature-desc">新增、修改、删除等操作使用DTO作为请求对象</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 快速开始区域 -->
        <section class="quickstart-section">
            <div class="container">
                <h2 class="section-title">快速开始</h2>
                <div class="quickstart-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3 class="step-title">引入插件</h3>
                            <p class="step-desc">在pom.xml中添加插件配置</p>
                        </div>
                    </div>
                    <div class="step-arrow">→</div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3 class="step-title">创建配置文件</h3>
                            <p class="step-desc">在resources目录下创建codeGenerate-config.yml</p>
                        </div>
                    </div>
                    <div class="step-arrow">→</div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3 class="step-title">执行生成</h3>
                            <p class="step-desc">运行<code>mvn code-generate:code-generate</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 使用示范区域 -->
        <section class="demo-section">
            <div class="container">
                <div class="markdown-container" v-html="demoHtml"></div>
            </div>
        </section>

        <!-- GitHub 统计区域 -->
        <section class="github-section">
            <div class="container">
                <div class="github-card">
                    <h3 class="github-title">支持我们</h3>
                    <p class="github-desc">喜欢这个项目？给我们一个Star支持一下吧！</p>
                    <a href="https://github.com/imi4u36d/code-generate.git" target="_blank" class="github-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Star on GitHub
                    </a>
                    <div class="github-stats">
                        <img src="https://img.shields.io/github/stars/imi4u36d/code-generate?style=social"
                            alt="GitHub Stars" class="github-stars-badge">
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue';
import { marked } from 'marked';

// 使用示范的markdown内容
const demoMarkdown = `# 使用示范

了解如何使用我们的代码生成插件来提高开发效率

## 1. 配置文件示例

在项目的src/main/resources目录下创建codeGenerate-config.yml文件

\`\`\`yaml
database:
  url: jdbc:mysql://localhost:3306/your-db-name
  username: your-username
  password: your-password
  driverClassName: com.mysql.cj.jdbc.Driver

tables:
  - tableName: your_table_name

swaggerConfig:
  swaggerEnable: true

outputConfig:
  baseOutputDir: /path/to/output
  authorInfo: your-name
  packageUrl: com.yourcompany
  overwriteEnable: true

# 自定义模板目录（可选，不配置则使用默认模板）
# ftlFileDir: /path/to/your/templates

# 自定义属性
customProperties:
  # Lombok支持
  lombokEnable: true
  # 自定义分层后缀
  layerSuffix:
    controller: Controller
    service: Service
    serviceImpl: Impl
    mapper: Mapper
    dto: Dto
    entity: Entity
  # 自定义分层包名称
  layerPackageName:
    dto: dto
    entity: domain
    service: service
    serviceImpl: service.impl
    mapper: mapper
    controller: controller
\`\`\`

## 2. 执行生成命令

在项目根目录下运行以下命令

\`\`\`bash
mvn code-generate:code-generate
\`\`\`

## 3. 生成效果

自动生成完整的代码结构，包括以下文件

\`\`\`
your_table_name
└── src
    └── main
        ├── java
        │   └── com
        │       └── yourcompany
        │           ├── controller
        │           │   └── YourTableNameController.java
        │           ├── domain
        │           │   └── YourTableNameEntity.java
        │           ├── dto
        │           │   ├── YourTableNameDto.java
        │           │   ├── BaseResponseDto.java
        │           │   └── Result.java
        │           ├── mapper
        │           │   ├── YourTableNameMapper.java
        │           │   └── YourTableNameMapper.xml
        │           └── service
        │               ├── YourTableNameService.java
        │               └── impl
        │                   └── YourTableNameServiceImpl.java
        └── resources
            └── mapper
                └── YourTableNameMapper.xml
\`\`\`

## 4. 核心代码示例

生成的Controller包含完整的CRUD接口

\`\`\`java
package com.yourcompany.controller;

import com.yourcompany.dto.BaseResponseDto;
import com.yourcompany.dto.YourTableNameDto;
import com.yourcompany.service.YourTableNameService;
import org.springframework.web.bind.annotation.*;
import com.miaomiao.miaomiaoservice.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiOperation;

/**
* @说明: YourTableName相关接口
* @作者: your-name
* @创建时间: 2024-01-01 12:00:00
*/
@RestController
@Api(tags = {"YourTableName相关接口"})
@RequestMapping("/api/yourTableName")
public class YourTableNameController {

    private final YourTableNameService yourTableNameService;

    public YourTableNameController(YourTableNameService yourTableNameService) {
        this.yourTableNameService = yourTableNameService;
    }

    /**
    * 查询列表
    */
    @ApiOperation("查询列表")
    @PostMapping("/list")
    public BaseResponseDto list(@RequestBody YourTableNameDto yourTableName) {
        return yourTableNameService.list(yourTableName);
    }

    /**
    * 通过id查询对象
    */
    @ApiOperation("通过id查询对象")
    @GetMapping("/selById/{id}")
    public BaseResponseDto selById(@ApiParam(name = "id", value = "需要查询数据的id") @PathVariable Long id) {
        return yourTableNameService.selById(id);
    }

    /**
    * 新增
    */
    @ApiOperation("新增")
    @PostMapping("/add")
    public BaseResponseDto add(@RequestBody YourTableNameDto yourTableName) {
        return yourTableNameService.add(yourTableName);
    }

    /**
    * 更新
    */
    @ApiOperation("更新")
    @PutMapping("/update")
    public BaseResponseDto update(@RequestBody YourTableNameDto yourTableName) {
        return yourTableNameService.update(yourTableName);
    }

    /**
    * 通过id删除
    */
    @ApiOperation("通过id删除")
    @PutMapping("/delById/{id}")
    public BaseResponseDto delById(@ApiParam(name = "id", value = "需要删除数据的id") @PathVariable Long id) {
        return yourTableNameService.delById(id);
    }

    /**
    * 批量删除
    */
    @ApiOperation("批量删除")
    @PutMapping("/delBatchByIdList")
    public BaseResponseDto delBatchByIdList(@RequestBody List ids) {
        return yourTableNameService.delBatchByIdList(ids);
    }

    /**
    * 分页列表查询
    */
    @ApiOperation("分页列表查询")
    @PostMapping("/page/{pageNum}/{pageSize}")
    public BaseResponseDto page(
        @RequestBody YourTableNameDto yourTableName,
        @ApiParam(name = "pageNum", value = "页码") @PathVariable int pageNum,
        @ApiParam(name = "pageSize", value = "每页数量") @PathVariable int pageSize
    ) {
        return yourTableNameService.page(yourTableName, pageNum, pageSize);
    }
}
\`\`\`
`;

// 将markdown转换为HTML
const demoHtml = marked(demoMarkdown);
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

/* Hero 区域 */
.hero-section {
    padding: 6rem 0 4rem;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
}

/* 背景动画装饰 */
.hero-section::before {
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
.hero-section .container {
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

.hero-main-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #3B82F6 0%, #10B981 100%);
    -webkit-background-clip: text;
    color: transparent;
    text-fill-color: transparent;
}

.hero-subtitle {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    color: var(--text-secondary);
    font-weight: 500;
    margin-bottom: 1.5rem;
}

.hero-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 800px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.primary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md) var(--spacing-2xl);
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
    color: white;
    border-radius: var(--radius-lg);
    font-weight: 600;
    transition: all var(--transition-normal);
    text-decoration: none;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
    color: white;
}

.secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md) var(--spacing-2xl);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-lg);
    font-weight: 600;
    transition: all var(--transition-normal);
    text-decoration: none;
}

.secondary-button:hover {
    background-color: var(--bg-secondary);
    border-color: var(--primary-color);
    color: var(--primary-color);
}

/* 核心功能区域 */
.core-features-section {
    padding: 5rem 0;
    width: 100%;
    background-color: var(--bg-primary);
}

/* 高级功能区域 */
.advanced-features-section {
    padding: 5rem 0;
    width: 100%;
    background-color: var(--bg-secondary);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background-color: var(--bg-card);
    padding: 2.5rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    text-align: center;
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
}

/* 快速开始区域 */
.quickstart-section {
    padding: 5rem 0;
    width: 100%;
    background-color: var(--bg-primary);
}

.quickstart-steps {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
}

.step {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--bg-card);
    padding: 2rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    min-width: 250px;
    transition: all var(--transition-normal);
    flex: 1;
    max-width: 400px;
    height: auto;
    min-height: 150px;
}

.step:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.step-content {
    text-align: left;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80px;
}

.step-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.step-desc {
    color: var(--text-secondary);
    font-size: 1rem;
    word-break: break-word;
    margin: 0;
}

.step-arrow {
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: var(--text-light);
    font-weight: bold;
    margin: 0;
    width: 40px;
    justify-content: center;
    align-self: center;
}

/* 确保箭头只在水平排列时显示，垂直排列时隐藏 */
@media (max-width: 768px) {
    .quickstart-steps {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .step {
        width: 100%;
        max-width: 100%;
    }

    .step-arrow {
        transform: rotate(90deg);
        margin: 1rem 0;
        opacity: 0.5;
    }
}

@media (max-width: 480px) {
    .step {
        padding: 1.5rem;
        flex-direction: column;
        text-align: center;
    }

    .step-content {
        text-align: center;
        min-height: auto;
    }

    .step-arrow {
        transform: rotate(90deg);
    }
}

.step code {
    background-color: var(--bg-secondary);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    color: var(--primary-color);
}

/* 使用示范区域 */
.demo-section {
    padding: 5rem 0;
    width: 100%;
    background-color: var(--bg-primary);
}

/* Markdown 容器样式 */
.markdown-container {
    max-width: 100%;
    text-align: left;
}

/* GitHub 统计区域 */
.github-section {
    padding: 4rem 0;
    width: 100%;
    background-color: var(--bg-secondary);
}

.github-card {
    background-color: var(--bg-card);
    padding: 3rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.github-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.github-desc {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.github-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md) var(--spacing-2xl);
    background-color: var(--text-primary);
    color: white;
    border-radius: var(--radius-lg);
    font-weight: 600;
    transition: all var(--transition-normal);
    text-decoration: none;
    margin-bottom: 1.5rem;
}

.github-button:hover {
    background-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    color: white;
}

.github-stats {
    display: flex;
    justify-content: center;
    align-items: center;
}

.github-stars-badge {
    max-width: 200px;
    height: auto;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .features-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .feature-card {
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    .hero-section {
        padding: 4rem 0 3rem;
    }

    .features-section {
        padding: 3rem 0;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-subtitle {
        font-size: 1rem;
        margin-bottom: 3rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .github-section {
        padding: 3rem 0;
    }

    .github-card {
        padding: 2rem;
    }
}

@media (max-width: 480px) {
    .hero-main-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.125rem;
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

<!-- 非scoped样式，用于v-html渲染的markdown内容 -->
<style>
/* Markdown 内容样式 */
.markdown-container h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: left;
}

.markdown-container h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-align: center;
}

.markdown-container h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: left;
}

.markdown-container p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: left;
}

.markdown-container pre {
    background-color: #1e1e1e;
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    overflow-x: auto;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-md);
    margin-bottom: 1.5rem;
    text-align: left;
}

.markdown-container code {
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.7;
    color: #d4d4d4;
    text-align: left;
}

.markdown-container pre code {
    color: #d4d4d4;
    text-align: left;
}

.markdown-container ul,
.markdown-container ol {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: left;
    padding-left: 1.5rem;
}

.markdown-container li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    text-align: left;
}
</style>