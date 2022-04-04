<script setup>
import Menu from './Menu.vue'
import MenuAdmin from './MenuAdmin.vue'
import { LoginStore } from '../stores/LoginStore';
const store = LoginStore()
</script>
<template>
  <div class="head">
    <div class="logo">
      <h1>El Racó de les Delícies</h1>
    </div>
    <div class="menu-container">
      <div>
        <Menu />
      </div>
      <div v-if="store.isLogged">
        <MenuAdmin />
      </div>
    </div>
  </div>
</template>
<style>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 2px solid lightgrey;
}
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: end;
}
</style>