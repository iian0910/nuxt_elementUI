import { configure, extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { alpha, required } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('required', {
  ...required,
  message: '此欄位為必填'
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters'
})

extend('minmax', {
  validate (value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: `{_rule_} 規則：{_field_}輸入長度最少必須為 {min} 個字到 {max} 個字`
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

configure(
  {
    classes: {
      valid: 'valid',
      invalid: 'invalid'
    }
  }
)
