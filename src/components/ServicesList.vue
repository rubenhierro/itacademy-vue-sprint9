<script setup>
import { useApartmentStore } from '../stores/ApartmentStore';
import { storeToRefs } from 'pinia';
const store = useApartmentStore()
const { enabledServices, disabledServices } = storeToRefs(store)
</script>
<template>
  <h3>Servicios</h3>
  <ul>
    <li v-for="service of enabledServices" key="key">{{ service.name }}</li>
  </ul>
  <h4>Servicios no incluidos</h4>
  <ul>
    <li v-for="service of disabledServices" key="key" class="not-included">{{ service.name }}</li>
  </ul>
</template>
<style>
.not-included {
  text-decoration: line-through;
}
</style>