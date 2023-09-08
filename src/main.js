import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import "@/assets/app.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
