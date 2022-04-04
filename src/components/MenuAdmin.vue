<script setup>
import { RouterLink } from 'vue-router'
import { LoginStore } from '../stores/LoginStore'
const store = LoginStore()
</script>
<template>
  <div class="menu-admin">
    <nav>
      <ul>
        <li>
          <RouterLink to="/admin/servicios">Servicios</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/precios">Precios</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/disponibilidad">Disponibilidad</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/reservas">Reservas</RouterLink>
        </li>
        <li>
          <a href="#" @click="store.logout">Logout</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style>
.menu-admin {
  background-color: lightgray;
}
</style>