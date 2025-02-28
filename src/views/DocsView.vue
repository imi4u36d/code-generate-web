<template>
    <div class="docs-view">
        <div class="sidebar">
            <ul>
                <li v-for="(chapter, index) in chapters" :key="index" @click="selectChapter(index)">
                    {{ chapter.title }}
                </li>
            </ul>
        </div>
        <div class="content">
            <div v-if="selectedChapter !== null">
                <h2>{{ chapters[selectedChapter].title }}</h2>
                <div v-html="chapters[selectedChapter].content"></div>
            </div>
            <div v-else>
                <p>请选择一个章节</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedChapter = ref<number | null>(null);
const chapters = [
    {
        title: '第一章',
        content: '<p>这是第一章的内容。</p>'
    },
    {
        title: '第二章',
        content: '<p>这是第二章的内容。</p>'
    },
    {
        title: '第三章',
        content: '<p>这是第三章的内容。</p>'
    }
];

const selectChapter = (index: number) => {
    selectedChapter.value = index;
};
</script>

<style scoped>
.docs-view {
    display: flex;
    height: 100vh;
}

.sidebar {
    width: 20rem;
    background-color: #f4f4f4;
    padding: 2rem;
    overflow-y: auto;
    /* 添加滚动条 */
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.sidebar li:hover {
    background-color: #ddd;
}

.content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    /* 确保内容区域也可以滚动 */
}
</style>