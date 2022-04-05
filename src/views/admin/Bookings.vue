<script setup>
import { computed } from 'vue';
import { useBookingStore } from '../../stores/BookingStore';
import { storeToRefs } from 'pinia';
import List from '../../components/List.vue'

const store = useBookingStore()
const { bookings, getDisponibility, getAprovedBookings } = storeToRefs(store)

const disabledDates = computed(() => {
  return [...getDisponibility.value, ...getAprovedBookings.value]
})

//---- check availability range dates
function isAvailableRangeDates(booking) {
  const start = booking.start;
  const end = booking.end;
  const dates = []

  let loop = new Date(start);
  dates.push(booking.start)
  do {
    dates.push(loop)
    let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
  }
  while (loop < end)

  for (const range of disabledDates.value) {
    for (const date of dates) {
      if ((date >= range.start) && (date <= range.end)) {
        return true
      }
    }
  }
}

function confirmBooking(key) {
  const booking = store.getBookingById(key)
  const isInRange = isAvailableRangeDates(booking)
  if (!isInRange) {
    store.changeBookingState(key, true)
    alert('¡Reserva confirmada!', 'success')
  } else {
    alert('¡Cuidado, las fechas de la reserva no están disponibles!', 'danger')
  }
}
function refuseBooking(key) {
  store.changeBookingState(key, false)
}
function deleteBooking(key) {
  store.deleteBooking(key)
}
function alert(message, type) {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  alertPlaceholder.innerHTML = "";
  const wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
</script>
<template>
  <div class="container">
    <div>
      <h1>Admin Reservas</h1>
    </div>
    <!-- Alert -->
    <div id="liveAlertPlaceholder"></div>
    <div>
      <List
        :name="'Reservas'"
        :list="bookings"
        :properties="[
          { display: 'Desde', value: 'start', type: 'date' },
          { display: 'Hasta', value: 'end', type: 'date' },
          { display: 'Nombre', value: 'name' },
          { display: 'Email', value: 'email' },
        ]"
        :buttons="{ edit: false, delete: true, confirm: true, refuse: true }"
        @confirm="confirmBooking"
        @refuse="refuseBooking"
        @delete="deleteBooking"
      />
    </div>
  </div>
</template>