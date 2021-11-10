import { commonProperties } from '@/utils/packages.js'

// eslint-disable-next-line no-unused-vars
const properties = {
  ...commonProperties,
  src: {
    label: '图片',
    type: String,
    ui: 'upload',
    default: 'https://img01.yzcdn.cn/vant/cat.jpeg'
  },
  srcEn: {
    label: '图片(en)',
    type: String,
    ui: 'upload',
    default: 'https://img01.yzcdn.cn/vant/cat.jpeg'
  },
  srcKm: {
    label: '图片(km)',
    type: String,
    ui: 'upload',
    default: 'https://img01.yzcdn.cn/vant/cat.jpeg'
  },
  href: {
    label: '跳转链接',
    type: String,
    ui: 'input'
  }
}
