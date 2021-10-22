<!-- home -->
<template>
  <div class="index-container">
    <van-button @click="onClick">Test Open App</van-button>
    <Call-App />
  </div>
</template>

<script>
import CallApp from '@/packages/call-app/index'

export default {
  components: {
    CallApp
  },

  data() {
    return {
      showTips: false

    }
  },

  computed: {

  },

  mounted() { },

  methods: {
    onClick() {
      this.showTips = true
    }
  }
}
</script>
