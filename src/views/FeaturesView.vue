<template>
    <section class="features">
        <h2>Our Features</h2>
        <div class="feature-item">
            <h3>Feature 1</h3>
            <p>Description of feature 1.</p>
        </div>
        <div class="feature-item">
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
        </div>
        <div class="feature-item">
            <h3>Feature 3</h3>
            <p>Description of feature 3.</p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FeaturesView',
});
</script>

<style scoped>
.features {
    padding: 3rem 0;
    background-color: #fff;
}

.features h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.feature-item {
    margin-bottom: 2rem;
}

.feature-item h3 {
    font-size: 1.5rem;
}

.feature-item p {
    font-size: 1rem;
}
</style>