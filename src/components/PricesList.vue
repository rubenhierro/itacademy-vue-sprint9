<script setup>
import { computed } from 'vue'
import { useBookingStore } from '../stores/BookingStore'

const store = useBookingStore()
const prices = computed(() => {
  return store.prices
})
</script>
<template>
  <div class="row bord p-5 shadow m-5">
    <table class="table">
      <thead>
        <tr>
          <th>Desde</th>
          <th>Hasta</th>
          <th>Precio semana</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="price of prices" key="key">
          <td>{{ price.start }}</td>
          <td>{{ price.end }}</td>
          <td>{{ price.amount }}€</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>