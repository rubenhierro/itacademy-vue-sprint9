<script setup>
import { ref } from 'vue'
import { useBookingStore } from '../stores/BookingStore'
import { storeToRefs } from 'pinia';
import price from '../classes/Price'

const store = useBookingStore()
const { prices } = storeToRefs(store)
</script>
<template>
  <div>
    <h1>Reservas</h1>
    <h3>Precios</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Desde</th>
          <th scope="col">Hasta</th>
          <th scope="col">Precio semana</th>
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
