<script>
import { useBookingStore } from '../stores/BookingStore'
import ReservationForm from '../components/ReservationForm.vue'
// import { storeToRefs } from 'pinia';


// const store = useBookingStore()
// const { prices } = storeToRefs(store)

export default {
  components: ["ReservationForm"],
  data() {
    return {
      store: useBookingStore()
    };
  },
  computed: {
    prices() {
      return this.store.prices;
    }
  },
  components: { ReservationForm }
}
</script>
<template>
  <h1>Reservas</h1>
  <h3>Precios</h3>
  <div class="row bord p-5 shadow m-5">
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
  <div>
    <h3>Formulario de reservas</h3>
    <div class="row bord p-5 shadow m-5">
      <ReservationForm />
    </div>
  </div>
</template>
