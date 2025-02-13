<template>
    <section id="hero" class="hero">
        <h1>Welcome to My Portal</h1>
        <p>Your one-stop solution for all your needs.</p>
        <button>Get Started</button>
    </section>
</template>

<script>
export default {
    name: "HeroSection",
};
</script>

<style scoped>
.hero {
    text-align: center;
    padding: 5rem 0;
    background-color: #f0f0f0;
}

.hero h1 {
    font-size: 3rem;
}

.hero p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.hero button {
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.hero button:hover {
    background-color: #555;
}
</style>