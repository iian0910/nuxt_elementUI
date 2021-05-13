import moment from 'moment'
import { configure, extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { image, required } from 'vee-validate/dist/rules'
import Vue from 'vue'

moment().format()

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

extend('isBeforeDate', {
  validate (value) {
    const nowDate = new Date()
    return moment(value).diff(moment(nowDate)) > 1
  },
  message: '日期不得小於今日'
})

extend('betweenDate', {
  params: ['target'],
  validate (value, { target }) {
    return moment(value).diff(moment(target)) < 1
  },
  message: '起日不能早於訖日'
})

extend('differentThreeMonths', {
  params: ['target'],
  validate (value, { target }) {
    return moment(value).diff(moment(target), 'months') <= 3
  },
  message: '起訖日不得相差3個月'
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
