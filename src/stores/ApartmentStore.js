import { defineStore } from 'pinia'

export const useApartmentStore = defineStore({
  id: 'apartment',
  state: () => ({
    services: [{name: 'tv color', isActive: true}, {name: 'aire acondicionado', isActive: false}],
  }),
  getters: {
    enabledServices: (state) => state.services.filter((i) => i.isActive),
    disabledServices: (state) => state.services.filter((i) => i.isActive === false)
  },
  actions: {
    addService(service) {
      this.services = [...this.services, service]
    },
  }
})
