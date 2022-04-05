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
      const disponibility = this.store.getDisponibility
      return [...disponibility, ...this.bookedDates]
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
  <div class="container">
    <div>
      <h1>Admin Disponibilidad</h1>
    </div>
    <div class="row">
      <div class="col">
        <div class="card" style="width: 34rem;">
          <div class="card-body">
            <div class="card-title">Nueva reserva manual</div>
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
                :min-date="new Date()"
              >
                <template v-slot:day-popover="{ format }">
                  <div>
                    {{ format(dragValue ? dragValue.start : range.start, 'MMM D') }}
                    -
                    {{ format(dragValue ? dragValue.end : range.end, 'MMM D') }}
                  </div>
                </template>
              </DatePicker>
              <div class="legend d.flex align-items-center">
                <div class="reserved"></div>
                <span>Reserva aprobada</span>
                <div class="pre-reserved"></div>
                <span>Reserva pendiente (disponibles)</span>
              </div>

              <!-- Feedback calendar -->
              <div class="mt-4">
                <p v-if="range.start && range.end">
                  Desde: {{ new Date(Date.parse(range.start)).toLocaleDateString() }}
                  <!-- <i class="fa-regular fa-arrow-right-long-to-line"></i> -->
                  >
                  Hasta: {{ new Date(Date.parse(range.end)).toLocaleDateString() }}
                </p>
                <p v-else class="text-danger">Selecciona las fechas de la reserva manual</p>
              </div>
              <div class="col pt-2 text-right">
                <button class="p-2 px-4 btn btn-primary shadow-lg">Crear reserva</button>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
      <div class="col">
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
  </div>
</template>
<style>
.reserved {
  margin-top: 10px;
  margin-right: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: rgb(193, 234, 210);
}
.pre-reserved {
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 30px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: rgb(254, 209, 209);
}
</style>