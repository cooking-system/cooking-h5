<template>
  <WidgetWrapper class="page-bottombtn__fixed" v-bind="$attrs">
    <!-- <van-button class="cooking-btn" @click="handleClick">{{ text }}</van-button> -->
    <div class="bottom-btn-wrapper">
      <div class="bottom-btn__item left">{{ leftText }}</div>
      <div class="bottom-btn__item right">{{ rightText }}</div>
    </div>
    <CallAppTips v-model="showTips" />
  </WidgetWrapper>
</template>

<script>
import WidgetWrapper from '@/components/widget-wrapper/index'
import CallAppTips from '@/components/call-app-tips/index'
import { nameWrapper, getProps } from '@/utils/packages.js'

const config = require('./config.json')
const props = getProps(config)

export default {
  name: nameWrapper('bottom-btn'),

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
    ...props,
    leftText: {
      label: '按钮文本(左)',
      type: String,
      ui: 'input',
      default: 'WOWNOW首页',
      i18n: {
        zh: 'leftText',
        en: 'leftTextEn',
        km: 'leftTextKm'
      }
    },
    rightText: {
      label: '按钮文本(右)',
      type: String,
      ui: 'input',
      default: '分享好友',
      i18n: {
        zh: 'rightText',
        en: 'rightTextEn',
        km: 'rightTextKm'
      }
    },

    leftTextEn: [String],
    leftTextKm: [String],
    rightTextEn: [String],
    rightTextKm: [String]
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
.page-bottombtn__fixed {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
}
.bottom-btn-wrapper {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 16px;
  border-radius: 15px 15px 0px 0px;
  background-color: #fff;

  .bottom-btn__item {
    flex: 1;
    padding: 12px 0;
    text-align: center;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 0px 2px 5px rgba(192, 25, 5, 0.2);
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    &.left {
      background: linear-gradient(90deg, #3B7BFF 0%, #2AB0F4 100%);
      box-shadow: 0px 5px 15px 0px rgba(5, 115, 247, 0.24);
      border-radius: 20px;
    }
    &.right {
      background: linear-gradient(90deg, #FA5745 0%, #F98840 100%);
      box-shadow: 0px 5px 15px 0px rgba(255, 110, 90, 0.24);
      border-radius: 20px;
    }
  }
}

</style>
