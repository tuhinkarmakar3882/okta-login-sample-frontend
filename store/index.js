export const state = () => ({
  user: null,
})

export const getters = {
  getUser(state) {
    return state.user
  },
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  async login({ commit }, { user }) {
    await commit('SET_USER', user)
  },

  async logout({ commit }) {
    await commit('SET_USER', null)
  },
}
