import BaseApi from '../assets/js/api/baseApi.js'
export const actions = {
  async nuxtServerInit(store, { req }) {
    if (req.locale) {
      store.commit('auth/SET_LOCALE', {
        locale: req.locale
      })
    }
    let initData = [
      BaseApi.getRankList(),
      BaseApi.getProductList()
    ]
    initData = await Promise.all(initData).catch(err => { console.log(err, 22) })
    store.commit('auth/SET_VALUE', {rankList: initData[0].data, productList: JSON.parse(initData[1].data)})
  }
}
