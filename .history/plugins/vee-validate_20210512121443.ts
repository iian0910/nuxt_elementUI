import moment from 'moment-timezone'
import { configure, extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { image, required } from 'vee-validate/dist/rules'
import Vue from 'vue'
import VueMoment from 'vue-moment'

extend('required', {
  ...required,
  message: '此欄位為必填'
})

extend('image', {
  ...image,
  message: `{_rule_} 規則：上傳資料須符合(image)規範`
})

extend('minmax', {
  validate (value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: `{_rule_} 規則：{_field_}輸入長度最少必須為 {min} 個字到 {max} 個字`
})

extend('dateValidate', {
  validate (value) {
    const nowDate = new Date()
    return value === nowDate
  },
  message: '日期不得大於小於今日'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.use(VueMoment, { moment })

configure(
  {
    classes: {
      valid: 'valid',
      invalid: 'invalid'
    }
  }
)
