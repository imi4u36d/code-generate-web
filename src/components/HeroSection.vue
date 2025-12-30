<template>
    <section id="hero" class="hero">
        <div class="hero-content">
            <h1 class="hero-title gradient-text">
                Welcome to My Portal
            </h1>
            <p class="hero-subtitle">
                Your one-stop solution for all your needs.
            </p>
            <div class="hero-cta">
                <button class="cta-button primary">
                    Get Started
                </button>
                <button class="cta-button secondary">
                    Learn More
                </button>
            </div>
            <div class="hero-stats">
                <div class="stat-item">
                    <div class="stat-number">10K+</div>
                    <div class="stat-label">Users</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Features</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-number">99.9%</div>
                    <div class="stat-label">Uptime</div>
                </div>
            </div>
        </div>
        <div class="hero-decoration">
            <div class="decoration-circle circle-1"></div>
            <div class="decoration-circle circle-2"></div>
            <div class="decoration-circle circle-3"></div>
        </div>
    </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    overflow: hidden;
    padding: var(--spacing-3xl) 0;
}

/* 背景动画装饰 */
.hero::before {
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

.hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    z-index: 2;
    animation: fadeInUp 0.8s ease-out;
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, var(--font-size-5xl));
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: var(--spacing-xl);
    letter-spacing: -0.02em;
}

.hero-subtitle {
    font-size: clamp(1rem, 2vw, var(--font-size-xl));
    color: var(--text-secondary);
    margin-bottom: var(--spacing-2xl);
    line-height: 1.6;
}

.hero-cta {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--spacing-3xl);
}

.cta-button {
    padding: var(--spacing-md) var(--spacing-2xl);
    font-weight: 600;
    border-radius: var(--radius-lg);
    font-size: var(--font-size-base);
    transition: all var(--transition-normal);
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.cta-button.primary {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(102, 84, 241, 0.3);
}

.cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(102, 84, 241, 0.4);
}

.cta-button.secondary {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: 2px solid var(--border-color);
}

.cta-button.secondary:hover {
    background-color: var(--bg-secondary);
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.hero-stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xl);
    flex-wrap: wrap;
    padding: var(--spacing-xl);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
}

.stat-item {
    text-align: center;
    min-width: 100px;
}

.stat-number {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
}

.stat-label {
    font-size: var(--font-size-sm);
    color: var(--text-light);
    font-weight: 500;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background-color: var(--border-color);
    display: block;
}

/* 装饰元素 */
.hero-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.decoration-circle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(105, 234, 203, 0.3) 0%, transparent 70%);
    animation: float 6s ease-in-out infinite;
}

.circle-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.circle-2 {
    width: 200px;
    height: 200px;
    bottom: 15%;
    right: 15%;
    background: radial-gradient(circle, rgba(234, 204, 248, 0.3) 0%, transparent 70%);
    animation-delay: -2s;
}

.circle-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 25%;
    background: radial-gradient(circle, rgba(102, 84, 241, 0.2) 0%, transparent 70%);
    animation-delay: -4s;
}

/* 动画 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(180deg);
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .hero {
        min-height: 70vh;
        padding: var(--spacing-2xl) 0;
    }

    .hero-cta {
        flex-direction: column;
        align-items: center;
    }

    .cta-button {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }

    .hero-stats {
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
    }

    .stat-item {
        min-width: 80px;
    }

    .stat-number {
        font-size: var(--font-size-2xl);
    }

    .stat-divider {
        display: none;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: var(--font-size-base);
    }

    .hero-cta {
        margin-bottom: var(--spacing-2xl);
    }
}
</style>