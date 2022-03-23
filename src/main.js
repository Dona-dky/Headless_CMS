import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Base de donnée
import { supabase } from "./supabase"

Vue.config.productionTip = false

//permet de ne pas importer supabase dans tous les fichiers
Vue.prototype.$supabase = supabase;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
