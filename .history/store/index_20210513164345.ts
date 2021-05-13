interface Data {
  name: '';
  tel: '';
  city: '';
  zip: '';
  area: '';
  address: ''
}

export const state = () => ({
  counter: 0,
  item: null
})

export const mutations = {
  increment(state, data:Data) {
    state.counter++
    state.item = data
  }
}