import { defineStore } from 'pinia'

export const useApartmentStore = defineStore({
  id: 'apartment',
  state: () => ({
    services: [],
    servicesNotInluded: []
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    addService(service) {
      this.services = [...this.services, service]
    },
    addServiceNotIncluded(service) {
      this.servicesNotInluded = [...this.servicesNotInluded, service]
    }
  }
})
