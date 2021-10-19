<template>
  <div class="image-wrapper">
    <a v-if="href" :href="href" target="__blank">
      <van-image :src="src">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </a>
    <van-image v-else :src="src">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
  </div>
</template>

<script>
import { nameWrapper } from '@/utils/index.js'
import { Image as VanImage } from 'vant'

export default {
  components: {
    VanImage
  },
  name: nameWrapper('image'),
  props: {
    src: {
      type: String
    },
    href: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  width: 100%;
  height: 100%;
  max-width: 100%;
}
</style>
