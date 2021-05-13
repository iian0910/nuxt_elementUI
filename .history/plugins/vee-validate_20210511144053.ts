import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { alpha, required } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
