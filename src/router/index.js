import { createRouter, createWebHistory } from "vue-router";
import apartment from "../views/Apartment.vue";
import booking from "../views/Booking.vue";
import calendar from "../views/CalendarView.vue";
import bookings from "../views/admin/Bookings.vue";
import login from "../views/admin/Login.vue";
import prices from "../views/admin/prices.vue";
import register from "../views/admin/Register.vue";
import services from "../views/admin/Services.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "apartment",
      component: apartment,
    },
    {
      path: "/reservas",
      name: "booking",
      component: booking,
    },
    {
      path: "/admin/",
      name: "login",
      component: login,
    },
    {
      path: "/admin/registro",
      name: "register",
      component: register,
    },
    {
      path: "/admin/servicios",
      name: "services",
      component: services,
    },
    {
      path: "/admin/precios",
      name: "prices",
      component: prices,
    },
    {
      path: "/admin/reservas",
      name: "bookings",
      component: bookings,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: calendar,
    },
  ],
});

export default router;
