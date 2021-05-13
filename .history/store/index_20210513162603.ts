export const state = () => ({
  item: null
})

export const mutations = {
  saveData (data:any) {
    state.item = data
  }
}
