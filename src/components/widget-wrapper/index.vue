<template>
  <div class="widget-item-wrapper" :style="widgetStyle">
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    widgetStyle() {
      /**
       * tips
       *  - 有些属性需要初始化，不然会有默认样式的问题
       *  - 有些属性要加上单位值，比如1px的，不处理的话可能会查找问题半天
       *  - 给定空字符串是比较好的处理方式，按照样式逻辑空字符串不生效，直接生效原本的样式，而不是简单的0px等直接覆盖
       */
      const { width, height, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.$attrs
      const { marginLeft, marginRight, marginTop, marginBottom } = this.$attrs
      const { wBorderRadius, wBorderWidth } = this.$attrs
      const { wBackgroundColor, wColor, wBorderColor } = this.$attrs
      const obj = {
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
        borderRadius: parseInt(wBorderRadius) ? parseInt(wBorderRadius) + 'px' : '',
        backgroundColor: wBackgroundColor || '',
        color: wColor || '',
        borderWidth: parseInt(wBorderWidth) ? parseInt(wBorderWidth) + 'px' : '',
        borderColor: wBorderColor || '',
        borderStyle: 'solid'
      }

      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
.widget-item-wrapper {
  width: 100%;
  border-width: 0px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
