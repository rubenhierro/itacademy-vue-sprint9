<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import { useBookingStore } from '../../stores/BookingStore';
import List from '../../components/List.vue';
import DisabledDate from '../../classes/DisabledDate'

export default {
  components: {
    Calendar, DatePicker, List
  },
  data() {
    return {
      store: useBookingStore(),
      date: new Date(), //input
      dragValue: null,
      range: {
        start: null,
        end: null,
      },
    };
  },
  computed: {
    pendingDates() {
      return this.store.getPendingBookings
    },
    bookedDates() {
      return this.store.getAprovedBookings
    },
    disabledDates() {
      const disablePast = { start: null, end: new Date() }
      const disponibility = this.store.getDisponibility
      return [disablePast, ...disponibility, ...this.bookedDates]
    },
    selectDragAttribute() {
      return {
        popover: {
          visibility: 'hover',
          isInteractive: false, // Defaults to true when using slot
        },
      };
    },
    attributes() {
      return [
        {
          key: 'pending',
          highlight: {
            color: 'red',
            fillMode: 'light',
          },
          dates: this.pendingDates
        },
        {
          key: 'booked',
          highlight: {
            color: 'green',
            fillMode: 'light',
          },
          dates: this.bookedDates
        }
      ]
    }
  },
  methods: {
    addDisabledDate() {
      if (this.range.start && this.range.end) {
        const disabledDate = new DisabledDate(this.range.start, this.range.end)
        this.store.addDisabledDate(disabledDate)
        this.range.start = null
        this.range.end = null
      }
    },
    deleteDisabledDate(id) {
      this.store.deleteDisabledDate(id)
    }
  },
};
</script>

<template>
  <div>
    <h1>Admin Disponibilidad</h1>
  </div>
  <div class="d-flex justify-content-between">
    <form @submit.prevent="addDisabledDate">
      <DatePicker
        v-model="range"
        :columns="$screens({ default: 1, laptop: 2 })"
        :select-attribute="selectDragAttribute"
        :drag-attribute="selectDragAttribute"
        is-range
        @drag="dragValue = $event"
        :disabled-dates="disabledDates"
        :attributes="attributes"
      >
        <template v-slot:day-popover="{ format }">
          <div>
            {{ format(dragValue ? dragValue.start : range.start, 'MMM D') }}
            -
            {{ format(dragValue ? dragValue.end : range.end, 'MMM D') }}
          </div>
        </template>
      </DatePicker>
      <br />
      <button>add</button>
    </form>
    <br />

    <div>
      <List
        :name="'Reservas manuales'"
        :list="this.store.disabledDates"
        :properties="[
          { display: 'Desde', value: 'start', type: 'date' },
          { display: 'Hasta', value: 'end', type: 'date' }
        ]"
        :buttons="{ edit: false, delete: true }"
        @delete="deleteDisabledDate"
      />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
@media screen and(max-width: 600px) {
}
</style>