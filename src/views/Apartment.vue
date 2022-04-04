<script setup>
import Hero from '../components/Hero.vue'
import Weather from '../components/Weather.vue'
import Description from '../components/Description.vue'
import ServicesList from '../components/ServicesList.vue'
import Galery from '../components/Galery.vue'
import Map from '../components/Map.vue'

</script>
<template>
  <Hero />
  <main>
    <h1>Apartamento</h1>
    <hr />
    <h2>Apartamento turístico en la Ràpita</h2>
    <Description />
    <h3>Galería</h3>
    <Galery />
    <hr />
    <ServicesList />
    <hr />
    <h3>¿Dónde se encuentra?</h3>
    <Map />
    <hr />
    <h3>¿Qué tiempo hace ahora?</h3>
    <Weather />
  </main>
</template>