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
  async login(
    { commit },
    { tokenType, expiresIn, accessToken, scope, idToken, isAuthenticated }
  ) {
    if (!tokenType || !expiresIn || !accessToken || !scope || !idToken)
      throw new Error('Something is missing....')

    await commit('SET_USER', {
      tokenType,
      expiresIn,
      accessToken,
      scope,
      idToken,
      isAuthenticated,
    })
  },

  async logout({ commit }) {
    await commit('SET_USER', null)
  },
}
