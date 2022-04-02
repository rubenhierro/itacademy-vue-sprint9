import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import VCalendar from "v-calendar";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VCalendar, {
  screens: {
    tablet: "576px",
    laptop: "992px",
    desktop: "1200px",
  },
});

app.mount("#app");
