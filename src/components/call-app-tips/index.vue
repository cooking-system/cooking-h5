<template>
  <transition name="slide-fade">
    <div class="masking" v-if="visible" @click="visible = false">
      <div class="masking-content">
        <div class="masking-tips-site">
          <div class="tips-row">
            <div class="round display-middle">1</div>
            <div class="display-middle tips-text">
              {{ maskingLang.one.one }}
            </div>
            <img class="display-middle blue-menu" :src="logoImgs.blueMenuImageSrc" />
            <div class="display-middle tips-text">
              {{ maskingLang.one.two }}
            </div>
          </div>
          <div class="tips-row">
            <div class="round display-middle">2</div>
            <div class="display-middle tips-text">
              {{ maskingLang.two.one }}
            </div>
            <div class="display-middle blue-button-site">
              <img class="display-middle blue-button" :src="logoImgs.blueButtonImageSrc" />
              <img class="earth" :src="logoImgs.earthImageSrc" />
              <div class="tips-text earth-text">{{ maskingLang.two.two }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  computed: {
    lang() {
      // const navigatorLanguage = languageUtils.getPageHeaderCurrentLanguage
      // return navigatorLanguage.indexOf('zh') !== -1 ? 'zh' : navigatorLanguage.indexOf('en') !== -1 ? 'en' : 'km'
      // return 'en';
      // return 'km';
      return 'zh'
    },
    logoImgs() {
      return {
        blueMenuImageSrc: require('./images/blue-menu.png'),
        blueButtonImageSrc: require('./images/blue-button.png'),
        earthImageSrc: require('./images/earth.png'),
        google: {
          src: require('./images/google-logo.png'),
          style: 'width: 0.7rem;padding-top: 0.08rem;'
        },
        android: {
          src: require('./images/android-logo.png'),
          style: 'width: 0.67rem;'
        },
        apple: {
          src: require('./images/apple-logo.png'),
          style: 'width: 0.67rem;padding-top: 0.08rem;'
        }
      }
    },
    maskingLang() {
      return {
        one: {
          one: '点击右上角的',
          two: '按钮'
        },
        two: {
          one: '选择',
          two: '在浏览器中打开'
        }
      }
    }
  },
  data() {
    return {
      visible: this.value
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.share-store {
  position: relative;
}

.mask-group-background {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.share-store-main-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.share-store-main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.store-name {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: Microsoft Tai Le;
  font-weight: bold;
  color: #fff;
}

.store-name-zh {
  font-size: 24px;
}

.button-class {
  width: 250px;
  height: 45px;
  background: linear-gradient(360deg, #FEBF01 0%, #FFEE00 100%);
  opacity: 1;
  border-radius: 24px;
  margin: 32px auto 10px auto;
  position: relative;
  transition: all 0.1s;
}

.button-class-active {
  background: linear-gradient(360deg, #FFEE00 0%, #FEBF01 100%);
}

.btn-text {
  font-size: 18px;
  font-family: Source Sans Pro;
  font-weight: bold;
  color: #532C00;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: opacity 0.5s;
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to, {
  opacity: 0;
}

.masking {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(46, 45, 45, 0.8);
}

.masking-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.masking-tips-site {
  width: fit-content;
  height: 78px;
  color: #fff;
  font-weight: bold;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

.tips-text {
  font-size: 20.5px;
}

.blue-menu {
  margin: 0 5px;
  width: 26px;
}

.blue-button {
  margin: 0 5px;
  width: 160px;
}

.blue-button-site {
  position: relative;
}

.round {
  width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  background-color: #ff6d00;
  font-size: 15.5px;
  text-align: center;
  margin-right: 10px;
}

.earth {
  width: 22px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  left: 10px;
}

.earth-text {
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  left: 38px;
  font-size: 14px;
}

.tips-row {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}
</style>
