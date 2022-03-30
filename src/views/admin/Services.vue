<script setup>
import { ref } from 'vue'
import { useApartmentStore } from '../../stores/ApartmentStore';
import { storeToRefs } from 'pinia';
import service from '@/classes/Service'

const store = useApartmentStore()
const { enabledServices, disabledServices, services } = storeToRefs(store)
const name = ref(null)
const isActive = ref(true)
const isEditing = ref(false)

function addService() {
  const newService = new service()
  newService.name = name.value
  newService.isActive = isActive.value
  console.log(newService);
  store.addService(newService)
  name.value = ''
  isEditing.value = false
}

function editService(id) {
  console.log(id);
  isEditing.value = true
  name.value = services.value[id].name
}

</script>
<template>
  <div class="container">
    <div class="admin-list">
      <div>
        <h1>Admin Services</h1>
        <span v-if="isEditing" class="text-danger">Editar servicio</span>
        <form @submit.prevent="addService">
          <input type="text" id="serviceInput" v-model="name" placeholder="Servicio" />
          <input type="checkbox" id="serviceLabel" v-model="isActive" />
          <label for="serviceLabel">{{ isActive === true ? "Activo" : "Inactivo" }}</label>
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <h3>Servicios</h3>
        <ul>
          <li v-for="(service, key) of services" :key="key" @click="editService(key)">{{ service.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.admin-list {
  display: flex;
  justify-content: space-between;
}
</style>