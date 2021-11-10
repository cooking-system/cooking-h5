<template>
  <WidgetWrapper v-bind="$attrs">
    <div :style="computedStyle" class="image-wrapper">
      <a v-if="href" :href="href" target="__blank">
        <van-image class="image-wrapper__src" :src="src">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </a>
      <van-image class="image-wrapper__src" v-else :src="src">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
  </WidgetWrapper>
</template>

<script>
import { nameWrapper, getProps } from '@/utils/packages.js'
import { Image as VanImage, Loading } from 'vant'
import WidgetWrapper from '@/components/widget-wrapper/index'
import computedStyleMixin from '@/mixins/computedStyle'

const config = require('./config.json')
const props = getProps(config)

export default {
  name: nameWrapper('image'),

  mixins: [computedStyleMixin()],

  components: {
    VanImage,
    WidgetWrapper,
    [Loading.name]: Loading
  },

  props: {
    ...props,
    src: {
      label: '图片',
      type: String,
      ui: 'upload',
      default: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    },
    srcEn: {
      label: '图片(en)',
      type: String,
      ui: 'upload',
      default: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    },
    srcKm: {
      label: '图片(km)',
      type: String,
      ui: 'upload',
      default: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    },
    href: {
      label: '跳转链接',
      type: String,
      ui: 'input'
    }
  }
}
</script>

<style lang="scss" scoped>
.image-wrapper__src {
  display: block;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
</style>
