import { createRouter, createWebHistory } from "vue-router";
import apartment from "../views/Apartment.vue";
import booking from "../views/Booking.vue";
import bookings from "../views/admin/Bookings.vue";
import login from "../views/admin/Login.vue";
import prices from "../views/admin/prices.vue";
import register from "../views/admin/Register.vue";
import services from "../views/admin/Services.vue";
import availability from "../views/admin/Availability.vue";

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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin/precios",
      name: "prices",
      component: prices,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin/disponibilidad",
      name: "availability",
      component: availability,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin/reservas",
      name: "bookings",
      component: bookings,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !JSON.parse(localStorage.getItem("isLogged"))) {
    return { name: "login" };
  }
});
export default router;
