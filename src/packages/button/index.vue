<template>
  <WidgetWrapper v-bind="$attrs">
    {{ $attrs }}
    <van-button v-bind:style="computedStyle" class="cooking-btn" @click="handleClick">{{ text }}</van-button>
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
    ...props
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
  // border-radius: inherit;
  // background-color: inherit;
  // color: inherit;
  // border-color: inherit;
}
</style>
