const app = getApp()
const emojiList = require('../components/emoji-parser/wechat_emotion.js')
const emojiKeys = Object.keys(emojiList)
Page({
  data: {
    emojiKeys
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '表情解析组件',
    })
    console.log(`作者:\tWozHuang\nGitHub:\thttps://github.com/WozHuang/Miniprogram-Demo/`)
  },
})
