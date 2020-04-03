import { createStore } from 'pinia'

export const useMainStore = createStore({
  id: 'main',
  state: () => ({
    player: null,
    error: null
  }),
  actions: {
    setPlayerData (payload) {
      this.state.player = payload
    },
    setError (payload) {
      this.state.error = payload
    }
  }
})
