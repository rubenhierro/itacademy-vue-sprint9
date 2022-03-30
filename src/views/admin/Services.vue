<script setup>
import { ref } from 'vue'
import { useApartmentStore } from '../../stores/ApartmentStore';
import { storeToRefs } from 'pinia';

const store = useApartmentStore()
const { enabledServices, disabledServices } = storeToRefs(store)
const service = ref(null)
const enabled = false

function addService() {
  store.addService(service.value)
  service.value = ''
}

</script>
<template>
  <div class="container">
    <div>
      <h1>Admin Services</h1>
      <form @submit.prevent="addService">
        <input type="text" v-model="service" placeholder="Servicio" />
        <input type="checkbox" name="enabled" v-model="enabled" />
        <label for="enabled">{{ enabled === true ? "Activo" : "Inactivo" }}</label>

        <button type="submit">Add</button>
      </form>
    </div>

    <div>
      <h3>Servicios</h3>
      <ul>
        <li v-for="service of enabledServices" key="key">{{ service.name }}</li>
      </ul>
      <h4>Servicios no incluidos</h4>
      <ul>
        <li v-for="service of disabledServices" key="key">{{ service.name }}</li>
      </ul>
    </div>
  </div>
</template>
<style>
</style>