export const state = () => ({
  item: null
})

export const mutations = {
  increment(data:any) {
    state.item = data
  }
}
