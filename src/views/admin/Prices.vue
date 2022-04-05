<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import { useBookingStore } from '../../stores/BookingStore';
import Price from '../../classes/Price'
import List from '../../components/List.vue';

export default {
  components: {
    Calendar,
    DatePicker,
    List
  },
  data() {
    return {
      store: useBookingStore(),
      start: null,
      end: null,
      amount: null,
      isEditing: false,
      currentPrice: null
    };
  },
  computed: {
    prices() {
      return this.store.prices
    },
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
      !this.isEditing
        ? this.store.addPrice(price)
        : this.store.editPrice(this.currentPrice, price)
      this.start = null
      this.end = null
      this.amount = null
    },
    editPrice(id) {
      this.isEditing = true
      this.start = this.store.prices[id].start
      this.end = this.store.prices[id].end
      this.amount = this.store.prices[id].amount
      this.currentPrice = id
    },
    deletePrice(id) {
      this.store.deletePrice(id)
    }
  }
};
</script>

<template>
  <div class="container">
    <div>
      <h1>Admin Precios</h1>
    </div>
    <div class="row">
      <div class="col">
        <div class="card" style="width: 20rem;">
          <div class="card-body">
            <div class="card-title">Nuevo Precio</div>
            <form id="prices-form" @submit.prevent="addPrice">
              <span v-if="isEditing" class="text-danger">Editar precio</span>

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
              <div class="col-md-6 pt-3">
                <input
                  type="number"
                  v-model="amount"
                  placeholder="Precio por semana"
                  min="0"
                  required
                />
              </div>
              <br />
              <div class="col pt-2 text-right">
                <button class="p-2 px-4 btn btn-primary shadow-lg">Crear precio</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col">
        <List
          :name="'Precios'"
          :list="prices"
          :properties="[
            { display: 'Desde', value: 'start' },
            { display: 'Hasta', value: 'end' },
            { display: 'Precio', value: 'amount' }
          ]"
          :buttons="{ edit: true, delete: true }"
          @edit="editPrice"
          @delete="deletePrice"
        />
      </div>
    </div>
  </div>
</template>