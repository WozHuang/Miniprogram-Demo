// components/emoji-picker.js
const emojiMap = require('/../emoji-parser/wechat_emotion.js')

/**
 * 辅助函数：切割数组
 * 传入一个数组和间隔
 * 将这个数组等分后返回
 * 示例输入：[1,2,3] 2
 * 示例输出：[ [1,2], [3] ]
 */
const splitArray = function (originArray, interval) {
  let newArray = []
  for (let i = 0, len = originArray.length; i < len; i += interval) {
    newArray.push(originArray.slice(i, i + interval))
  }
  return newArray
}

const emojiList_local = splitArray(Object.keys(emojiMap), 24)
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 可选参数，可以明确指定所需要的表情,参数格式类似emoji-parser中的wechat_emotion.js
     */
    emojiList: {
      type: Array,
      value: [],
      observer: function(newValue) {
        this.setData({
          emojiArray: splitArray(newValue, 24)
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    emojiArray: emojiList_local
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickEmoji(e){
      const emojiCode = e.currentTarget.dataset.emoji
      this.triggerEvent('pick', {emojiCode})
    }

  }
})