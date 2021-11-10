<template>
  <WidgetWrapper v-bind="$attrs">
    <van-button :style="computedStyle" class="cooking-btn" @click="handleClick">{{ text }}</van-button>
  </WidgetWrapper>
</template>

<script>
import WidgetWrapper from '@/components/widget-wrapper/index'
import { nameWrapper, getProps } from '@/utils/packages.js'
import computedStyleMixin from '@/mixins/computedStyle'

const config = require('./config.json')
const props = getProps(config)

export default {
  name: nameWrapper('button'),

  mixins: [computedStyleMixin()],

  components: {
    WidgetWrapper
  },

  props: {
    ...props,
    text: {
      label: '按钮文本',
      type: String,
      ui: 'input',
      default: '点击按钮',
      i18n: {
        zh: 'text',
        en: 'textEn',
        km: 'textKm'
      },
      required: true
    },
    clickType: {
      label: '事件类型',
      type: String,
      default: '100',
      ui: 'select',
      enum: [
        {
          label: '跳转链接',
          value: '100'
        },
        {
          label: '自定义代码',
          value: '200'
        }
      ]
    },
    link: {
      label: '跳转链接',
      type: String,
      ui: 'input'
    },
    code: {
      label: '自定义代码',
      type: String,
      ui: 'input-code'
    }
  },

  methods: {
    handleClick() {
      console.log(this.clickType)
    }
  }
}
</script>

<style lang="scss" scoped>
.cooking-btn {
  width: 100%;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  border-color: inherit;
}
</style>
