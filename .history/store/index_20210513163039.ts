import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    item: []
  },
  mutations: {
    saveData (state) {
      console.log('state', state)
      // state.item.push(state)
    }
  }
})

export default store
