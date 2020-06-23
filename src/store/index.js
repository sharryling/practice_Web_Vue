import state from './state.js'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions'
import mutations from './mutation'
import Vue from 'vue'
import singer from './modules/singer.js'
Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        singer
    },
    state,
    getters,
    actions,
    mutations
})