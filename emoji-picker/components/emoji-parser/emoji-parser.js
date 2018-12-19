// emoji解析器
// 这个组件将尝试将 [xxx] 的格式转换为表情
// 如果没有转换成功会原文输出
// 转换成功会将原文替换为一个表情
const emojiMap = require('./wechat_emotion.js')
const imgUrl = getApp().globalData.imgUrl
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: '',
      observer: function(newValue) {
        this.setData({
          nodes: parseToSpan(newValue)
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    nodes:[],
    imgHost: imgUrl+'/wechat-emoji/'
  },
})

/**
 * 尝试将一小段符号解析成对应的表情
 * @pattern 需要解析的符号
 * @return 图片的路径 / undefined
 * 示例输入 "[xxx]"
 * 示例输出 "140.gif" / undefined
 */
function parseEmoji(pattern) {
  // key为去除头尾[]的部分
  let key = pattern.substring(1, pattern.length - 1)
  let res = emojiMap[key]
  return res && res.src
}

/**
 * 尝试将一段文字解析成span数组
 * 并以type标注这个span是文字还是表情
 * 示例输入："[/\:\:)]你[/\:\:)]好[/\:\:)]啊[/\:\:)]"
 */
function parseToSpan(text) {
  // 用来拆分出表示表情的符号的正则 - [xxx]
  const reg = /\[[^\[\]]*?\]/g
  let spanArray = [];
  let textNodes = text.split(reg);
  let emojiNodes = text.match(reg);

  // 这里 textNodes 的长度必定为 emojiNodes 的+1
  // 因此只遍历 textNodes
  for (let i = 0, len = textNodes.length; i < len; i++) {
    // 处理普通文本节点
    textNodes[i] && spanArray.push({
      type: 'text',
      value: textNodes[i]
    })
    // 处理表情节点
    // 解析成功则添加一个表情节点
    // 否则按照原文本添加一个文本节点
    if (i < len - 1) {
      let imgPath = parseEmoji(emojiNodes[i])
      if (imgPath) {
        spanArray.push({
          type: 'emoji',
          value: imgPath
        })
      } else {
        spanArray.push({
          type: 'text',
          value: emojiNodes[i]
        })
      }
    }
  }

  return spanArray;
}