<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/">Apartamento</RouterLink>-
        <RouterLink to="/reservas">Reservas</RouterLink>---- // ----
        <RouterLink to="/admin/servicios">Servicios</RouterLink>-
        <RouterLink to="/admin/precios">Precios</RouterLink>-
        <RouterLink to="/admin/disponibilidad"> Disponibilidad</RouterLink>-
        <RouterLink to="/admin/reservas"> Reservas</RouterLink>-
        <RouterLink to="/calendar">Calendar</RouterLink>
      </nav>
    </header>
      <RouterView />
  </div>


</template>

<style>
@import "@/assets/base.css";
</style>
