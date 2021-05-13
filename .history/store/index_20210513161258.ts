import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      item: null
    })
  })
}

export default createStore
