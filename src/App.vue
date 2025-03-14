<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/portfolio">Portfolio</RouterLink>
    <RouterLink to="/personal">Personal</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
