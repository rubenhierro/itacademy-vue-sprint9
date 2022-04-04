<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Head from './components/Head.vue'
</script>

<template>
  <div class="container">
    <header>
      <Head />
    </header>
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>