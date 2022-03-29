<script setup>
import { ref } from 'vue'
import { useApartmentStore } from '../../stores/ApartmentStore';
import { storeToRefs } from 'pinia';

const store = useApartmentStore()
const { services, servicesNotInluded } = storeToRefs(store)
const service = ref(null)
const serviceNotIncluded = ref(null)

function addService() {
  store.addService(service.value)
  service.value = ''
}

function addServiceNotIncluded() {
  store.addServiceNotIncluded(serviceNotIncluded.value)
  serviceNotIncluded.value = ''
}
</script>
<template>
  <div class="container">
    <div>
      <h1>Admin Services</h1>
      <form @submit.prevent="addService">
        <input type="text" v-model="service" placeholder="Servicio" />
        <button type="submit">Add</button>
      </form>
      <form @submit.prevent="addServiceNotIncluded">
        <input type="text" v-model="serviceNotIncluded" placeholder="Servicio no incluido" />
        <button type="submit">Add</button>
      </form>
      <div></div>
    </div>

    <div>
      <h3>Servicios</h3>
      <ul>
        <li v-for="service of services" key="key">{{ service }}</li>
      </ul>
      <h4>Servicios no incluidos</h4>
      <ul>
        <li v-for="service of servicesNotInluded" key="key">{{ service }}</li>
      </ul>
    </div>
  </div>
</template>
<style>
</style>