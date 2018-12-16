import Vue from 'vue'
import Row from '../components/common/row'
import Alert from '../components/common/alert'
Vue.use(Row)
if (process.client) {
  Vue.use(Alert)
  Vue.prototype.$alert = Alert
}
