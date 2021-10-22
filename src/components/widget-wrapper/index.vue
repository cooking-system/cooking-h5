<template>
  <div class="widget-item-wrapper" :style="widgetStyle">
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    widgetStyle() {
      const { width, height, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.$attrs
      const { marginLeft, marginRight, marginTop, marginBottom } = this.$attrs
      return {
        width: (parseInt(width) || 100) + '%',
        height: parseInt(height) ? parseInt(height) + 'px' : 'auto',
        paddingTop: paddingTop + 'px',
        paddingLeft: paddingLeft + 'px',
        paddingRight: paddingRight + 'px',
        paddingBottom: paddingBottom + 'px',
        marginLeft: marginLeft + 'px',
        marginRight: marginRight + 'px',
        marginTop: marginTop + 'px',
        marginBottom: marginBottom + 'px'
      }
    }
  },
  mounted() {
    console.log(this)
    console.log(this.$attrs)
  }
}
</script>

<style lang="scss" scoped>
.widget-item-wrapper {
  width: 100%;
  box-sizing: border-box;
}
</style>
