import Vue from 'vue'
import Vuex from 'vuex'
import { getSpecies } from '../api'

Vue.use(Vuex)

const state = {
  species: []
}

const getters = {
  speciesGroups: state => {
    return [...new Set(state.species.map(s => {
      return s.grouping
    }))]
  }
}

const actions = {
  getSpecies ({ commit }) {
    getSpecies()
    .then(response => commit('setSpecies', { species: response.data.data }))
  }
}

const mutations = {
  setSpecies (state, { species }) {
    state.species = species
  }
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug
})