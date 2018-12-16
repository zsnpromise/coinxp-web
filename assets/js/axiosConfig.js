import AxiosClass from './axiosClass'
import config from '../../config/api.config'

let baseAxios = new AxiosClass(config.baseUrl)
let coinXpAxios = new AxiosClass(config.coinXpUrl)

export {baseAxios, coinXpAxios}
