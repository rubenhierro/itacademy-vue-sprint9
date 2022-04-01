<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import { useBookingStore } from '@/stores/BookingStore';
import Booking from '@/classes/Booking'

export default {
  components: {
    Calendar, DatePicker
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
      currentDate: null
    };
  },
  computed: {
    disabled() {
      return this.store.disabledDates
    },
    disabledDates() {
      const disablePast = { start: null, end: new Date() }
      const disponibility = this.store.getDisponibility
      return [disablePast, ...disponibility]
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
    validate() {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");
      console.log(forms);
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              alert("Congrats, your order is on the way!");
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    }
  },
  mounted(){
    this.validate()
  }
};
</script>
<template>
  <!-- Calendar -->
  <DatePicker
    v-model="range"
    :columns="2"
    :select-attribute="selectDragAttribute"
    :drag-attribute="selectDragAttribute"
    is-range
    @drag="dragValue = $event"
    :disabled-dates="disabledDates"
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
    <p v-else class="text-danger">Selecciona las fechas de tu visita</p>
  </div>

  <!-- Reservation form -->
  <form class="row g-3 needs-validation" novalidate @submit.prevent="validate">
    <div class="col-md-4 pt-3">
      <label for="validationCustom01" class="form-label">First Name</label>
      <input
        type="text"
        class="form-control"
        id="validationCustom01"
        placeholder="First Name"
        required
        minlength="3"
        pattern="[a-zA-Z ]{3,25}"
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide your First Name (3 char min.)</div>
    </div>
    <div class="col-md-4 pt-3">
      <label for="validationCustom02" class="form-label">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="validationCustom02"
        placeholder="Last name"
        required
        minlength="3"
        pattern="[a-zA-Z ]{3,25}"
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide your Last Name (3 char min.)</div>
    </div>
    <div class="col-md-4 pt-3">
      <label for="validationCustom03" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="validationCustom03"
        placeholder="Email"
        required
        minlength="3"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide a valid Email (3 char min.)</div>
    </div>
    <div class="col-md-4 pt-3">
      <label for="validationCustom04" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="validationCustom04"
        placeholder="Password"
        required
        minlength="3"
        pattern="[a-zA-Z0-9]+"
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide a valid Password (3 char min.)</div>
    </div>
    <div class="col-md-4 pt-3">
      <label for="validationCustom05" class="form-label">Address</label>
      <input
        type="text"
        class="form-control"
        id="validationCustom05"
        placeholder="Address"
        required
        minlength="3"
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide your Address (3 char min.)</div>
    </div>
    <div class="col-md-4 pt-3">
      <label for="validationCustom06" class="form-label">Phone Number</label>
      <input
        type="text"
        class="form-control"
        id="validationCustom06"
        placeholder="Phone Number"
        required
        minlength="3"
        pattern="[0-9]+"
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide your Phone Number (3 char min.)</div>
    </div>

    <div class="col m-3 pt-5 text-right">
      <button type="submit" id="btn" class="p-2 px-4 btn btn-primary shadow-lg">
        <i class="fa-regular fa-paper-plane"></i> Solicitar Reserva
      </button>
    </div>
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