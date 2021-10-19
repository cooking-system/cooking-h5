<template>
  <van-button @click="handleClick">{{ text }}</van-button>
</template>

<script>
import { nameWrapper } from '@/utils/index.js'
export default {
  name: nameWrapper('button'),
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

<style>

</style>
