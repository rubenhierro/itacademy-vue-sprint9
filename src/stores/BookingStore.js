import { defineStore } from "pinia";

export const useBookingStore = defineStore({
  id: "booking",
  state: () => ({
    prices: JSON.parse(localStorage.getItem("prices")) || [
      {
        start: "2022-03-08T12:36:57.787Z",
        end: "2022-03-08T12:36:57.787Z",
        amount: 450,
      },
      {
        start: "2022-04-14T12:47:41.258Z",
        end: "2022-04-19T12:47:41.258Z",
        amount: 500,
      },
    ],
    disabledDates: JSON.parse(localStorage.getItem("disabledDates")) || [],
    bookings: JSON.parse(localStorage.getItem("bookings")) || [],
  }),
  getters: {
    getSortedPrices: (state) =>
      state.prices.sort((a, b) => new Date(a.start) - new Date(b.start)),
    getDisponibility: (state) =>
      state.parseDisabledDates.filter((i) => i.end > new Date()),
    parseDisabledDates: (state) =>
      state.disabledDates.map(({ start, end }) => ({
        start: new Date([start]),
        end: new Date([end]),
      })),
    getPendingBookings: (state) =>
      state.bookings.filter((i) => i.isAproved === null),
    getAprovedBookings: (state) =>
      state.bookings.filter((i) => i.isAproved === true),
    getRefusedBookings: (state) =>
      state.bookings.filter((i) => i.isAproved === false),
    getBookingById: (state) => {
      return (id) => state.bookings.find((i, key) => key === id);
    },
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
    changeBookingState(id, state) {
      const booking = this.bookings.find((i, key) => key === id);
      booking.isAproved = state;
      this.bookings.splice(id, 1, booking);
      localStorage.setItem("bookings", JSON.stringify(this.bookings));
    },
  },
});
