import { createStore } from 'vuex'
import { state } from './storeSection/state'
import { mutations } from './storeSection/mutations'
import { actions } from './storeSection/actions'
import { modules } from './storeSection/modules'
export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: modules
})
