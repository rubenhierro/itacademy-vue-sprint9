<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Head from './components/Head.vue'
import Foot from './components/Foot.vue'
</script>

<template>
  <div class="container">
    <header>
      <Head />
    </header>
    <RouterView />
    <footer>
      <Foot />
    </footer>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>