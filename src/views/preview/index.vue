<!-- home -->
<template>
  <div class="preview-container">
    <component
      v-for="(item, i) in list"
      :key="i"
      :is="item.name"
      v-bind="item.data"
    />
  </div>
</template>

<script>
import register from './register'

export default {
  components: {
    ...register()
  },
  data() {
    return {
      list: [
        {
          name: 'cooking-button',
          data: {
            text: '请点击这里',
            clickType: '200'
          }
        },
        {
          name: 'cooking-image',
          data: {
            src: 'https://img01.yzcdn.cn/vant/cat.jpeg'
          }
        },
        {
          name: 'cooking-button',
          data: {
            text: '请点击这里',
            clickType: '200'
          }
        },
        {
          name: 'cooking-image',
          data: {
            src: 'https://img01.yzcdn.cn/vant/cat.jpeg'
          }
        },
        {
          name: 'cooking-button',
          data: {
            text: '请点击这里',
            clickType: '200'
          }
        },
        {
          name: 'cooking-image',
          data: {
            src: 'https://img01.yzcdn.cn/vant/cat.jpeg'
          }
        }
      ]
    }
  },
  created() {
    this.eventInit()
  },
  methods: {
    eventInit() {
      window.addEventListener('message', (e) => {
        console.log(e)
      }, false)
    }
  }
}
</script>
<style lang="scss" scoped>
.preview-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
