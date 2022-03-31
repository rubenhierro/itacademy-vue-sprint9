import { defineStore } from "pinia";

export const useApartmentStore = defineStore({
  id: "apartment",
  state: () => ({
    services: [
      { name: "tv color", isActive: true },
      { name: "aire acondicionado", isActive: false },
    ],
  }),
  getters: {
    enabledServices: (state) => state.services.filter((i) => i.isActive),
    disabledServices: (state) => state.services.filter((i) => !i.isActive),
    getService: (state) => (id) => state.services.find((i, key) => key === id),
  },
  actions: {
    addService(service) {
      this.services = [...this.services, service];
    },
    editService(id, service) {
      this.services.splice(id, 1, service);
    },
    deleteService(id) {
      this.services = this.services.filter((i, key) => key !== id);
    },
  },
});
