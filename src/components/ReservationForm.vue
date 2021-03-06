<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import { useBookingStore } from '@/stores/BookingStore';
import Booking from '@/classes/Booking'
import { range } from 'lodash';

export default {
  components: {
    Calendar, DatePicker
  },
  data() {
    return {
      store: useBookingStore(),
      name: null,
      email: null,
      adults: 1,
      childs: 0,
      comment: null,
      dragValue: null,
      range: {
        start: null,
        end: null,
      },
    };
  },
  computed: {
    disabledDates() {
      return [...this.store.getDisponibility, ...this.store.getAprovedBookings]
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
  methods: {
    addBooking() {
      //---- subtract a day to get it disponible in calendar
      // if (this.range.end) {
      //   const checkOut = this.range.end
      //   checkOut.setDate(checkOut.getDate() - 1)
      // }

      if (this.range.start && this.range.end) {
        const checkOut = this.range.end
        checkOut.setDate(checkOut.getDate() - 1)

        const booking = new Booking(
          this.range.start,
          checkOut,
          this.name,
          this.email,
          this.adults,
          this.childs,
          this.comment
        );

        this.store.addBooking(booking)
        this.name = null
        this.email = null
        this.comment = null
        this.adults = 1
        this.childs = 0
        range.start = null
        range.end = null
        this.alert('¡Mensaje enviado!', 'success')
      } else {
        this.alert('¡Cuidado, selecciona las fechas y rellena el formulario!', 'danger')
      }
    },
    alert(message, type) {
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      alertPlaceholder.innerHTML = "";
      const wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

      alertPlaceholder.append(wrapper)
    },
  },
};
</script>
<template>
  <!-- Alert -->
  <div id="liveAlertPlaceholder"></div>

  <!-- Calendar -->
  <DatePicker
    v-model="range"
    :columns="$screens({ default: 1, laptop: 2 })"
    :select-attribute="selectDragAttribute"
    :drag-attribute="selectDragAttribute"
    is-range
    @drag="dragValue = $event"
    :disabled-dates="disabledDates"
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

  <!-- Feedback calendar -->
  <div class="m-2">
    <p v-if="range.start && range.end">
      Desde: {{ new Date(Date.parse(range.start)).toLocaleDateString() }}
      <!-- <i class="fa-regular fa-arrow-right-long-to-line"></i> -->
      >
      Hasta: {{ new Date(Date.parse(range.end)).toLocaleDateString() }}
    </p>
    <p v-else class="text-danger">Selecciona las fechas de tu estancia</p>
  </div>

  <!-- Reservation form -->
  <form class="row g-3 needs-validation" id="booking-form" @submit.prevent="addBooking">
    <div class="col-md-6 pt-3">
      <label for="name" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Nombre"
        required
        minlength="3"
        pattern="[a-zA-Z ]{3,25}"
        v-model="name"
      />
      <div class="valid-feedback">Genial!</div>
      <div class="invalid-feedback">Escribe tu Nombre (3 letras min.)</div>
    </div>
    <div class="col-md-6 pt-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        v-model="email"
      />
      <div class="valid-feedback">Genial!</div>
      <div class="invalid-feedback">Escribe un Email válido (3 letras min.)</div>
    </div>

    <div class="col-md-3 pt-3">
      <label for="adults" class="form-label">Adultos</label>
      <input
        type="number"
        class="form-control"
        id="adults"
        placeholder="Núm. adultos"
        required
        min="1"
        max="7"
        v-model="adults"
      />
      <div class="valid-feedback">Genial!</div>
      <div class="invalid-feedback">Escribe el núm de adultos</div>
    </div>
    <div class="col-md-3 pt-3">
      <label for="childs" class="form-label">Niños</label>
      <input
        type="number"
        class="form-control"
        id="childs"
        placeholder="Núm. niños"
        required
        min="0"
        max="6"
        v-model="childs"
      />
      <div class="valid-feedback">Genial!</div>
      <div class="invalid-feedback">Escribe el núm de niños</div>
    </div>
    <div class="col-md-6 pt-3">
      <label for="comment" class="form-label">Comentario</label>
      <textarea
        type="text-area"
        class="form-control"
        id="comment"
        placeholder="Coméntanos lo que quieras..."
      ></textarea>
      <div class="valid-feedback">Genial!</div>
      <div class="invalid-feedback">Escribe tu comentario</div>
    </div>
    <div class="col m-3 pt-5 text-right">
      <button type="submit" id="btn" class="p-2 px-4 btn btn-primary shadow-lg">
        <i class="fa-regular fa-paper-plane"></i> Solicitar Reserva
      </button>
    </div>
  </form>
</template>