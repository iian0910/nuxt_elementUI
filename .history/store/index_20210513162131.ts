import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定義一個新的 Vue Store
const store = new Vuex.Store({
  state: {
    item: null
  },
  mutations: {
    // 將state設定為參數
    Loaded (data) {
      // state的isLoading true/false 互轉
      state.item = data
    }
  }
})
export default store
