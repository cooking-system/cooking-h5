<template>
  <WidgetWrapper v-bind="$attrs">
    <van-button class="cooking-btn" @click="handleClick">{{ text }}</van-button>
  </WidgetWrapper>
</template>

<script>
import WidgetWrapper from '@/components/widget-wrapper/index'
import { nameWrapper } from '@/utils/index.js'
export default {
  name: nameWrapper('button'),
  components: {
    WidgetWrapper
  },
  props: {
    text: {
      type: String,
      default: '点击按钮',
      required: true
    },
    clickType: {
      type: String,
      default: '100',
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
}
</style>
