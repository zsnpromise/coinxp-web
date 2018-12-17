export const state = () => ({
  locale: 'zh-cn',
  user: {},
  asset: {},
  rankList: null,
  otherUser: {},
  getUserRecord: [],
  productList: []
})
export const mutations = {
  SET_LOCALE(state, payload) {
    payload.locale && (state.locale = payload.locale)
  },
  SET_VALUE(state, payload) {
    for (let key in payload) {
      state[key] = payload[key]
    }
  }
}
