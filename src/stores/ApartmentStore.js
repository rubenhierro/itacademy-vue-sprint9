import { defineStore } from "pinia";

export const useApartmentStore = defineStore({
  id: "apartment",
  state: () => ({
    services: JSON.parse(localStorage.getItem('services')) || [
      { name: "2 dormitorios, con cama doble", isActive: true },
      { name: "1 dormitorio, con cama triple", isActive: true },
      { name: "TV color", isActive: true },
      { name: "WIFI gratis", isActive: true },
      { name: "Aire acondicionado", isActive: false },
      { name: "Servicio lavandería", isActive: false },
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
      localStorage.setItem('services', JSON.stringify(this.services))
    },
    editService(id, service) {
      this.services.splice(id, 1, service);
    },
    deleteService(id) {
      this.services = this.services.filter((i, key) => key !== id);
      localStorage.setItem('service', JSON.stringify(this.services))
    },
  },
});
