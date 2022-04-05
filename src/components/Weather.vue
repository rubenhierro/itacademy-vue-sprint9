<script setup>
import { onMounted } from 'vue';

const loadWeather = async () => {
  try {
    const loadWeather = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3110821&appid=79249a6da5a4a52e43bdc6a5bce6de66')
      .then((response) => response.json())
      .then((data) => printWeather(data));
  }
  catch (error) {
    throw new Error(error);
  }
};
function printWeather({ weather }) {

  const iconWeather = document.getElementById('icon-weather');
  const textWeather = document.getElementById('text-weather');
  const [w] = weather;
  const img = w.icon;
  const imgURL = `http://openweathermap.org/img/wn/${img}@2x.png`;

  textWeather.innerHTML = w.main;
  iconWeather.innerHTML = `<img src="${imgURL}">`;
}
onMounted(() => {
  loadWeather()
})
</script>
<template>

    <div class="weather">
      <div id="icon-weather"></div>
      <div class="description">
        <div>
          <strong>La Ràpita</strong>
        </div>
        <div id="text-weather"></div>
      </div>
    </div>

</template>
<style>
.weather {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.description {
  display: flex;
  flex-direction: column;
}
#icon-weather {
  padding-right: 25px;
}
#text-weather {
  padding-right: 25px;
}
</style>