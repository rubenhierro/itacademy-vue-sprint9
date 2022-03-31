<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import { useBookingStore } from '../../stores/BookingStore';
import Price from '../../classes/Price'

export default {
  components: {
    Calendar, DatePicker
  },
  data() {
    return {
      store: useBookingStore(),
      start: null,
      end: null,
      amount: null,
    };
  },
  computed: {
    selectDragAttribute() {
      return {
        popover: {
          visibility: 'hover',
          isInteractive: false, // Defaults to true when using slot
        },
      };
    },
  },
  watch: {
    start(val) {
      this.end = val
    }
  },
  methods: {
    addPrice() {
      const price = new Price(
        this.start, this.end, this.amount
      )
      this.store.addPrice(price)
      this.start = null
      this.end = null
      this.amount = null
    }
  }
};
</script>

<template>
  <div>
    <h1>Admin Prices</h1>
  </div>
  <form @submit.prevent="addPrice">
    <div class="d-flex">
        <DatePicker class="inline-block h-full" v-model="start">
      <template v-slot="{ inputValue, togglePopover }">
        <div class="input-group mb-3">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            @click="togglePopover()"
          >
            <i class="fa-regular fa-calendar-check"></i>
          </button>
          <input
            :value="inputValue"
            type="text"
            class="form-control"
            placeholder="Fecha inicial"
            required
          />
        </div>
      </template>
    </DatePicker>

    <DatePicker class="inline-block h-full" v-model="end">
      <template v-slot="{ inputValue, togglePopover }">
        <div class="input-group mb-3">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            @click="togglePopover()"
          >
            <i class="fa-regular fa-calendar-check"></i>
          </button>
          <input
            :value="inputValue"
            type="text"
            class="form-control"
            placeholder="Fecha final"
            required
          />
        </div>
      </template>
    </DatePicker>
    </div>
  
    <input type="number" v-model="amount" placeholder="Precio por semana" min="0" required />
    <br />
    <button type="submit">add</button>
  </form>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>