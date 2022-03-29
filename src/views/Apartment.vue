<script setup>
import { useApartmentStore } from '../stores/ApartmentStore';
import { storeToRefs } from 'pinia';

const store = useApartmentStore()
const { services, servicesNotInluded } = storeToRefs(store)
</script>

<template>
  <div>
    <h1>Apartamento</h1>
    <h3>Servicios</h3>
    <ul>
      <li v-for="service of services" key="key">{{ service }}</li>
    </ul>
    <h4>Servicios no incluidos</h4>
    <ul>
      <li v-for="service of servicesNotInluded" key="key">{{ service }}</li>
    </ul>
  </div>
</template>