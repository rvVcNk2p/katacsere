import { defineStore, acceptHMRUpdate } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'Leo Kussy',
    isAdmin: true,
    counter: 0
  }),

  actions: {
    increment() {
      this.counter++
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
