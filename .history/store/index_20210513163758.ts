export const state = () => ({
  counter: 0,
  item: null
})

export const mutations = {
  increment(state, data) {
    state.counter++
    state.item = data
  }
}