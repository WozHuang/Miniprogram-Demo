const app = getApp()
const emojiList = require('../components/emoji-parser/wechat_emotion.js')
const emojiKeys = Object.keys(emojiList)
Page({
  data: {
    emojiKeys,
    msg:''
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '表情选择器组件',
    })
    console.log(`作者:\tWozHuang\nGitHub:\thttps://github.com/WozHuang/Miniprogram-Demo/`)
  },

  bindEmojiPick(e){
    const emojiCode = e.detail.emojiCode
    console.log('点击了表情，组件传回',emojiCode)
    this.setData({
      msg:this.data.msg + emojiCode
    })
  }
})
