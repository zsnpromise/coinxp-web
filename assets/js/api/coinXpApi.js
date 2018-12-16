import { coinXpAxios } from '../axiosConfig'

let coinXpApi = {
  competition(chainName, token, info) {
    return coinXpAxios.post('/user/competition', {chainName, token, info})
  }
}
export default coinXpApi
