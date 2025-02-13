<template>
    <div id="home">
        <section class="hero">
            <h1 class="header">Code Generate</h1>
            <h1>稳定 灵活 快速的Mybatis插件</h1>
        </section>

        <section class="tabs">
            <div class="tab-item">
                <div class="tab-header-item-title">
                    <div class="tab-header-item-title-text">
                        <span>💡代码生成</span>
                    </div>
                    <div class="tab-header-item-title-desc">
                        更适合于快速开发，无需从头到尾编写繁琐重复的代码
                    </div>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-header-item-title">
                    <div class="tab-header-item-title-text">
                        <span>🌞稳定</span>
                    </div>
                    <div class="tab-header-item-title-desc">
                        完美适配Mysql、Mybatis。可自主更换版本驱动
                    </div>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-header-item-title">
                    <div class="tab-header-item-title-text">
                        <span>💃灵活</span>
                    </div>
                    <div class="tab-header-item-title-desc">
                        完善的配置可自定义，针对项目结构自定义生成输出
                    </div>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-header-item-title">
                    <div class="tab-header-item-title-text">
                        <span>⚡️快速</span>
                    </div>
                    <div class="tab-header-item-title-desc">
                        高效的代码逻辑，闪电般的生成速度
                    </div>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-header-item-title">
                    <div class="tab-header-item-title-text">
                        <span>⚙️ 开发工具支持</span>
                    </div>
                    <div class="tab-header-item-title-desc">
                        只要是maven项目,Code Generate都能给你更好的开发体验。
                    </div>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-header-item-title">
                    <div class="tab-header-item-title-text">
                        <span>📦 极致轻量化</span>
                    </div>
                    <div class="tab-header-item-title-desc">
                        高效的代码逻辑，闪电般的生成速度
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeView',
});
</script>

<style scoped>
#home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero {
    padding: 5rem 0;
    background-color: white;
}

.hero .header {
    font-size: 48px;
    font-weight: bold;
    /* 渐变色方向和颜色 */
    background: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);
    /* 使背景色应用到文字上 */
    -webkit-background-clip: text;
    /* 将文字颜色设置为透明，让背景色显示 */
    color: transparent;
    /* 兼容一些浏览器 */
    text-fill-color: transparent;
}

.hero h1 {
    font-size: 3rem;
}

.hero p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.tabs {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* 允许换行 */
}

.tab-item {
    max-width: 20rem;
    min-width: 10rem;
    height: 6rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;
    background-color: #f0f0f0;
    flex: 1 1 25%;
    /* flex-grow, flex-shrink, flex-basis */
}

.tab-header-item-title-text {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: start;
}

.tab-header-item-title-desc {
    text-align: start;
    /* 使文本两端对齐 */
    text-align-last: left;
    /* 确保最后一行左对齐 */
}
</style>