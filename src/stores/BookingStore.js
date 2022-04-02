import { defineStore } from "pinia";

export const useBookingStore = defineStore({
  id: "booking",
  state: () => ({
    prices: JSON.parse(localStorage.getItem("prices")) || [],
    disabledDates: JSON.parse(localStorage.getItem("disabledDates")) || [],
    bookings: JSON.parse(localStorage.getItem("bookings")) || [],
  }),
  getters: {
    getDisponibility: (state) =>
      state.parseDisabledDates.filter((i) => i.end > new Date()),
      parseDisabledDates: (state) =>
      state.disabledDates.map(({ start, end }) => ({
        start: new Date([start]),
        end: new Date([end]),
      })),
      getPendingBookings: (state) =>
        state.bookings.filter((i) => i.isAproved === null),
  },
  actions: {
    addPrice(price) {
      this.prices = [...this.prices, price];
      localStorage.setItem("prices", JSON.stringify(this.prices));
    },
    editPrice(id, price) {
      this.prices.splice(id, 1, price);
      localStorage.setItem("prices", JSON.stringify(this.prices));
    },
    deletePrice(id) {
      this.prices = this.prices.filter((i, key) => key !== id);
      localStorage.setItem("prices", JSON.stringify(this.prices));
    },
    addDisabledDate(date) {
      this.disabledDates = [...this.disabledDates, date];
      localStorage.setItem("disabledDates", JSON.stringify(this.disabledDates));
    },
    deleteDisabledDate(id) {
      this.disabledDates = this.disabledDates.filter((i, key) => key !== id);
      localStorage.setItem("disabledDates", JSON.stringify(this.disabledDates));
    },
    addBooking(booking) {
      this.bookings = [...this.bookings, booking];
      localStorage.setItem("bookings", JSON.stringify(this.bookings));
    },
    deleteBooking(id) {
      this.bookings = this.bookings.filter((i, key) => key !== id);
      localStorage.setItem("bookings", JSON.stringify(this.bookings));
    },
    confirmBooking(booking) {
      const index = this.bookings.indexOf(booking);
      booking.isAproved = true;
      this.bookings.splice(index, 1, booking);
      localStorage.setItem("bookings", JSON.stringify(this.bookings));
    },
  },
});
