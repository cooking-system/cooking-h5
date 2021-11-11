<!-- home -->
<template>
  <div id="widgets-list" class="preview-container">
    <div class="inner-preview-container">
      <div
        class="widget-wrapper"
        v-for="(item, i) in list"
        :name="i"
        :key="i">
        <component
          :id="`widget-${item.name}-${i}`"
          :is="item.name"
          v-bind="item.data"
        />
      </div>
      <!-- 用来占位，当置底的元素出现时 -->
      <div id="widget-fixbottom__space"></div>
    </div>
  </div>
</template>

<script>
import register from './register'
import { getConfig } from '@/utils/ssr-config'

// document.domain = 'cooking.cn'

const componentList = register()

export default {
  components: {
    ...componentList
  },
  computed: {
    language() {
      return this.$route.query ? this.$route.query.language : 'zh'
    },
    pageConfig() {
      const config = getConfig()
      return config.pageConfig || null
    }
  },
  watch: {
    language: {
      immediate: true,
      handler(val) {
        window.$lang = val
      }
    }
  },
  data() {
    return {
      // list: [
      //   { 'name': 'cooking-image', data: { src: 'https://img01.yzcdn.cn/vant/cat.jpeg' }},
      //   { 'name': 'cooking-image', data: { src: 'https://img01.yzcdn.cn/vant/cat.jpeg' }},
      //   { 'name': 'cooking-bottom-btn' },
      //   { 'name': 'cooking-button' },
      //   { 'name': 'cooking-image', data: { src: 'https://img01.yzcdn.cn/vant/cat.jpeg' }}
      // ]
      list: []
    }
  },

  created() {
    console.log('this.pageConfig')
    console.log(this.pageConfig)
    this.eventInit()
  },

  mounted() {
    console.log('this.language')
    console.log(this.language)
    this.setMarginBottomStyle()
  },

  methods: {
    // 初始化prop的值
    _setDefaultData(component) {
      // eslint-disable-next-line prefer-const
      // eslint-disable-next-line no-unused-vars
      const { name, data: originData } = component
      const target = componentList[name]
      const props = target.props
      const properties = { ...props }

      component.data = originData || {}

      Object.keys(properties).forEach(key => {
        const val = properties[key]
        if (originData && originData[key]) {
          component.data[key] = originData[key]
        } else if (val.default || typeof val.default === 'boolean') {
          component.data[key] = val.default
        }
      })
      return component
    },
    findLastOneNotFixed() {
      const target = document.querySelector('.inner-preview-container')
      const children = target.children
      const len = this.list.length - 1
      let index = len
      for (let i = len; i >= 0; i--) {
        const item = this.list[i]
        if (item.name !== 'cooking-bottom-btn') {
          index = i
          break
        }
      }
      return children[index]
    },
    setMarginBottomStyle() {
      const target = document.querySelector('.page-bottombtn__fixed')
      const spaceItem = document.querySelector('#widget-fixbottom__space')

      if (target) {
        const clientHeight = target.getBoundingClientRect().height
        spaceItem.style.height = clientHeight + 'px'
        // const lastOne = this.findLastOneNotFixed()
        // const lastOne = this.findLastOneNotFixed()
        // if (lastOne) {
        //   lastOne.style.marginBottom = clientHeight + 'px'
        // }
      } else {
        spaceItem.style.height = 0 + 'px'
      }
    },
    eventInit() {
      window.addEventListener('message', (e) => {
        const eventObj = e.data
        // eslint-disable-next-line prefer-const
        let { type, data } = eventObj
        if (data && this[type]) {
          data = JSON.parse(data)
        } else {
          console.info(`来自[${type}类型的消息无法解析]: ${data}`)
        }
        this[type] && this[type](data)
      }, false)
    },
    addComponent(item) {
      const component = this._setDefaultData(item)
      this.list.push(component)
    },
    renderComponent(data) {
      const result = data.map(e => this._setDefaultData(e))
      this.list = result
      this.setMarginBottomStyle()
    },
    setGlobalStyle(data) {
      console.log('setGlobalStyle')
      console.log(data)
      const { backgroundColor } = data
      const val = `background-color: ${backgroundColor}`
      document.querySelector('#app').setAttribute('style', val)
      document.body.setAttribute('style', val)
    }
  }
}
</script>
<style>
html, body, #app {
  background-color: #ddd;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.preview-container {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .inner-preview-container {
    height: 100%;
    overflow: auto;
  }
}
.preview-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.widget-wrapper {
  width: 100%;
  overflow: hidden;
}

// .fade-move {
//   transition: all .2s;
// }
</style>
