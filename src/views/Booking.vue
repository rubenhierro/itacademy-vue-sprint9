<script setup>
import ReservationForm from '../components/ReservationForm.vue'
import PricesList from '../components/PricesList.vue'
</script>
<template>
  <h1>Reservas</h1>
  <h3>Precios</h3>
  <PricesList />
  <div>
    <h3>Formulario de reservas</h3>
    <div class="row bord p-5 shadow m-5">
      <ReservationForm />
    </div>
  </div>
</template>
