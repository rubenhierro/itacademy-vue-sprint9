import { defineStore } from "pinia";

export const useBookingStore = defineStore({
  id: "booking",
  state: () => ({
    prices: [
      { start: new Date().toLocaleDateString(), end: "end", amount: 500 },
    ],
    disabledDates: JSON.parse(localStorage.getItem("disabledDates")) || [
      { start: null, end: new Date() },
    ],
  }),
  getters: {
    getDisponibility: (state) =>
      state.disabledDates.filter((i) => i.end > new Date()),
  },
  actions: {
    addPrice(price) {
      this.prices = [...this.prices, price];
      console.log(this.prices);
    },
    editPrice(id, price) {
      this.prices.splice(id, 1, price);
    },
    deletePrice(id) {
      this.prices = this.prices.filter((i, key) => key !== id);
    },
    addDisabledDate(date) {
      this.disabledDates = [...this.disabledDates, date];
      console.log(this.disabledDates);
      localStorage.setItem("disabledDates", JSON.stringify(this.disabledDates));
    },
    deleteDisabledDate(id) {
      this.disabledDates = this.prices.filter((i, key) => key !== id);
    },
  },
});
