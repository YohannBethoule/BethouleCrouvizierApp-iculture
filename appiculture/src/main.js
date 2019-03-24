// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: function () {
    return {
      global: {
        environnements: ['Tous types', 'Acacia', 'Lavande'],
        visite_frequency: 10
      },
      ruchers: [],
      visites: []
    }
  },
  methods: {
    saveDataToLocalStorage: function () {
      console.log(this)
    },
    loadDataFromLocalStorage: function () {
      var fromStorage = localStorage.getItem('appiculture_datas')
      if (fromStorage != null) {
        if (fromStorage.global) {
          this.global = fromStorage.global
        }
        if (fromStorage.ruchers) {
          this.ruchers = fromStorage.ruchers
        }
        if (fromStorage.visites) {
          this.visites = fromStorage.visites
        }
      }
    }
  },
  mounted () {
    this.loadDataFromLocalStorage()
  },
  watch() {

  }
})
