<script setup>
import { ref } from 'vue';
import { useBookingStore } from '../../stores/BookingStore';
import { storeToRefs } from 'pinia';
import List from '../../components/List.vue'
import DisabledDate from '../../classes/DisabledDate'

const store = useBookingStore()
const { bookings, getPendingBookings } = storeToRefs(store)

function confirmBooking(key, id) {
  store.changeBookingState(id, true)
}
function refuseBooking(key, id) {
  store.changeBookingState(id, false)
}
function deleteBooking(key, id) {
  store.deleteBooking(id)
}
</script>
<template>
  <div>
    <h1>Admin Reservas</h1>
  </div>
  <div>
    <List
      :name="'Reservas'"
      :list="bookings"
      :properties="[
        { display: 'Desde', value: 'start', type: 'date' },
        { display: 'Hasta', value: 'end', type: 'date' },
        { display: 'Nombre', value: 'name' },
        { display: 'Email', value: 'email' },
        { display: 'Estado', value: 'isAproved' },
      ]"
      :buttons="{ edit: false, delete: true, confirm: true, refuse: true }"
      @confirm="confirmBooking"
      @refuse="refuseBooking"
      @delete="deleteBooking"
    />
  </div>
</template>