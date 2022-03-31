import { defineStore } from "pinia";

export const useBookingStore = defineStore({
  id: "booking",
  state: () => ({
    prices: [
      { start: new Date().toLocaleDateString(), end: "end", amount: 500 },
      { start: "start", end: "end", amount: 300 },
    ],
  }),
  // getters: {
  //   enabledServices: (state) => state.services.filter((i) => i.isActive),
  //   disabledServices: (state) => state.services.filter((i) => !i.isActive),
  //   getService: (state) => (id) => state.services.find((i, key) => key === id),
  // },
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
  },
});
