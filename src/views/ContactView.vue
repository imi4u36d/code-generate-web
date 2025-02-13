<template>
    <section class="contact">
        <h2>Contact Us</h2>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Your Name" v-model="name" />
            <input type="email" placeholder="Your Email" v-model="email" />
            <textarea placeholder="Your Message" v-model="message"></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ContactView',
    setup() {
        const name = ref('');
        const email = ref('');
        const message = ref('');

        const handleSubmit = () => {
            console.log('Form submitted:', { name: name.value, email: email.value, message: message.value });
        };

        return {
            name,
            email,
            message,
            handleSubmit,
        };
    },
});
</script>

<style scoped>
.contact {
    padding: 3rem 0;
    background-color: #f0f0f0;
}

.contact h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.contact form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact input,
.contact textarea {
    width: 80%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact button {
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact button:hover {
    background-color: #555;
}
</style>