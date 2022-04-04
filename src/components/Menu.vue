<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="menu">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Apartamento</RouterLink>
        </li>
        <li>
          <RouterLink to="/reservas">Reservas</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>