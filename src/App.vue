<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/">Apartamento</RouterLink>-
        <RouterLink to="/reservas">Reservas</RouterLink>---- // ----
        <RouterLink to="/admin/servicios">Admin Servicios</RouterLink>-
        <RouterLink to="/admin/precios">Admin Precios</RouterLink>-
        <RouterLink to="/admin/reservas">Admin Reservas</RouterLink>-
      </nav>
    </header>
      <RouterView />
  </div>


</template>

<style>
@import "@/assets/base.css";
</style>
