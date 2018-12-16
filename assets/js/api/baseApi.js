import { baseAxios } from '../axiosConfig'
let baseApi = {
  // 获取用户交易记录
  getOrderList(userNameChain) {
    return baseAxios.get('/getOrderList', {params: {userNameChain}})
  },
  // 添加新用户，返回资产
  addUser(name, userNameChain) {
    return baseAxios.get('/addUser', {params: {name, userNameChain}})
  },
  // 获取所有用户信息
  getRankList() {
    return baseAxios.get('/getRankList')
  },
  // 获取排名用户资产分布
  getUserRecord(userNameChain) {
    return baseAxios.get('/getUserRecord', {params: {userNameChain}})
  },
  // 获取所有支持的交易对
  getProductList() {
    return baseAxios.get('/getProductList')
  }
}
export default baseApi
