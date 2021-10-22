<template>
  <WidgetWrapper v-bind="$attrs">
    <van-button class="cooking-btn" @click="handleClick">{{ text }}</van-button>
    <CallAppTips v-model="showTips" />
  </WidgetWrapper>
</template>

<script>
import WidgetWrapper from '@/components/widget-wrapper/index'
import CallAppTips from '@/components/call-app-tips/index'
import { nameWrapper } from '@/utils/index.js'
export default {
  name: nameWrapper('call-app'),
  components: {
    WidgetWrapper,
    CallAppTips
  },
  data() {
    return {
      showTips: false
    }
  },
  props: {
    text: {
      type: String,
      default: '打开APP'
    },
    iosUrl: {
      type: String,
      default: 'superapp://h5.lifekh.com/wakeup?routepath='
    },
    androidUrl: {
      type: String,
      default: 'yumnow://YumNow'
    },
    downloadUrl: {
      type: String,
      default: 'https://h5.lifekh.com/mobile-h5/wownow/down-loading'
    }
  },

  computed: {
    isDingTalk() {
      return navigator.userAgent.toLowerCase().indexOf('dingtalk') !== -1
    },
    isQQ() {
      return navigator.userAgent.toLowerCase().indexOf('qq/') !== -1
    },
    isWechat() {
      return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    },
    isIOS() {
      return navigator.userAgent.toLocaleLowerCase().indexOf('mac os x') !== -1
    },
    routePath() {
      return this.isIOS && `${this.iosUrl}` || `${this.androidUrl}`
    }
  },

  methods: {
    handleClick() {
      this.showTips = this.isQQ || this.isWechat || this.isDingTalk

      if (!this.showTips) {
        this.$nextTick(() => {
          window.location.href = this.routePath
          setTimeout(() => {
            this.gotoDownloadUrl()
          }, 1000)
        })
      }
    },
    gotoDownloadUrl() {
      this.$nextTick(() => {
        window.location.href = this.downloadUrl
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cooking-btn {
  width: 100%;
}
</style>
