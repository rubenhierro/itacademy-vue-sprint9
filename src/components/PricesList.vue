<script setup>
import { computed, onMounted } from 'vue'
import { useBookingStore } from '../stores/BookingStore'
import { storeToRefs } from 'pinia';

const store = useBookingStore()
const { getSortedPrices: prices } = storeToRefs(store)

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
          <td>{{ new Date(Date.parse(price.start)).toLocaleDateString() }}</td>
          <td>{{ new Date(Date.parse(price.end)).toLocaleDateString() }}</td>
          <td>{{ price.amount }}€</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>