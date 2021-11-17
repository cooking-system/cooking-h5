export default function() {
  return {
    computed: {
      computedStyle() {
        const { width, height, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.$attrs
        const { marginLeft, marginRight, marginTop, marginBottom } = this.$attrs
        const { borderRadius, backgroundColor, color, borderColor } = this.$attrs

        const obj = {
          // 这样也会有个bug，如果上一次设置了22px，当我把输入框清空，赋值为空字符串的时候，也不会把之前的22px覆盖掉
          // case 1：给prop设定一个默认值，如果清空/重置就使用默认值
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
          borderRadius: parseInt(borderRadius) ? parseInt(borderRadius) + 'px' : '',
          backgroundColor: backgroundColor || '',
          color: color || '',
          borderColor: borderColor || '',
          borderStyle: 'solid'
        }

        return obj
      }
    }
  }
}
