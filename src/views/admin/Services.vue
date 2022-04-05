<script setup>
import { ref } from 'vue'
import { useApartmentStore } from '../../stores/ApartmentStore';
import { storeToRefs } from 'pinia';
import service from '@/classes/Service'
import list from '../../components/List.vue'

const store = useApartmentStore()
const { services } = storeToRefs(store)
const name = ref(null)
const isActive = ref(true)
const isEditing = ref(false)
const currentService = ref(null)

function addService() {
  const newService = new service()
  newService.name = name.value
  newService.isActive = isActive.value
  !isEditing.value
    ? store.addService(newService)
    : store.editService(currentService.value, newService)
  name.value = ''
  isEditing.value = false
}

function editService(id) {
  isEditing.value = true
  name.value = services.value[id].name
  currentService.value = id

}
function deleteService(id) {
  store.deleteService(id)
}

</script>
<template>
  <div class="container">
    <h1>Admin Servicios</h1>
    <div class="row">
      <div class="col">
        <div class="card" style="width: 20rem;">
          <div class="card-body">
            <div class="card-title">Nuevo servicio</div>
            <span v-if="isEditing" class="text-danger">Editar servicio</span>
            <form class="row g-3" @submit.prevent="addService">
              <div class="col-md-6 pt-3">
                <input type="text" id="serviceInput" v-model="name" placeholder="Servicio" />
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="isActive"
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexCheckDefault"
                >{{ isActive === true ? "Activo" : "Inactivo" }}</label>
              </div>
              <div class="col pt-2 text-right">
                <button class="p-2 px-4 btn btn-primary shadow-lg">Crear servicio</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <list
          :name="'Servicios'"
          :list="services"
          :properties="[
            { display: 'Servicio', value: 'name' },
            { display: 'Incluido', value: 'isActive' }
          ]"
          :buttons="{ edit: true, delete: true }"
          @edit="editService"
          @delete="deleteService"
        />
      </div>
    </div>
  </div>
</template>