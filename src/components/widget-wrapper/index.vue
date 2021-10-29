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
      const { WborderRadius } = this.$attrs
      const { wBackgroundColor, wColor, wBorderColor } = this.$attrs

      return {
        width: parseInt(width) ? parseInt(width) + '%' : '',
        height: parseInt(height) ? parseInt(height) + 'px' : '',
        paddingTop: paddingTop + 'px',
        paddingLeft: paddingLeft + 'px',
        paddingRight: paddingRight + 'px',
        paddingBottom: paddingBottom + 'px',
        marginLeft: marginLeft + 'px',
        marginRight: marginRight + 'px',
        marginTop: marginTop + 'px',
        marginBottom: marginBottom + 'px',
        borderRadius: parseInt(WborderRadius) ? parseInt(WborderRadius) + 'px' : '',
        backgroundColor: wBackgroundColor || '',
        color: wColor || '',
        borderColor: wBorderColor || ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.widget-item-wrapper {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
