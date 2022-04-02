<script setup>
import { ref } from 'vue';
import { useBookingStore } from '../../stores/BookingStore';
import { storeToRefs } from 'pinia';
import List from '../../components/List.vue'
import DisabledDate from '../../classes/DisabledDate'

const store = useBookingStore()
const { bookings, getPendingBookings } = storeToRefs(store)

function confirmBooking(id) {
  // store.deleteBooking(id)
  const booking = getPendingBookings.value[id]
  const disabledDate = new DisabledDate(
    booking.start,
    booking.end
  )
  store.addDisabledDate(disabledDate)
  store.confirmBooking(booking)
}
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
      :list="getPendingBookings"
      :properties="[
        { display: 'Desde', value: 'start', type: 'date' },
        { display: 'Hasta', value: 'end', type: 'date' },
        { display: 'Nombre', value: 'name' },
        { display: 'Email', value: 'email' }
      ]"
      :buttons="{ edit: false, delete: true, confirm: true }"
      @confirm="confirmBooking"
      @delete="deleteBooking"
    />
  </div>
  <div>
    <List
      :name="'Próximas'"
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
</template>