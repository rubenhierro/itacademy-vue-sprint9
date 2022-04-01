<script setup>
import { ref } from 'vue';
import { useBookingStore } from '../../stores/BookingStore';
import { storeToRefs } from 'pinia';
import List from '../../components/List.vue'

const store = useBookingStore()
const { bookings, getPendingBookings } = storeToRefs(store)

function deleteBooking(id) {
  store.deleteBooking(id)
}
</script>
<template>
  <div>
    <h1>Admin Reservas</h1>
  </div>
  <div>
    <List
      :name="'Pendientes'"
      :list="bookings"
      :properties="[
        { display: 'Desde', value: 'start', type: 'date' },
        { display: 'Hasta', value: 'end', type: 'date' },
        { display: 'Nombre', value: 'name' },
        { display: 'Email', value: 'email' }
      ]"
      :buttons="{ edit: false, delete: true }"
      @delete="deleteBooking"
    />
  </div>
  <div>
    <List
      :name="'Próximas'"
      :list="getPendingBookings"
      :properties="[
        { display: 'Desde', value: 'start', type: 'date' },
        { display: 'Hasta', value: 'end', type: 'date' },
        { display: 'Nombre', value: 'name' },
        { display: 'Email', value: 'email' }
      ]"
      :buttons="{ edit: false, delete: true }"
      @delete="deleteBooking"
    />
  </div>
</template>