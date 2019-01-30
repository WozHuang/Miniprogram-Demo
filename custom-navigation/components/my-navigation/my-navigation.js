// component/navigation/navigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBack(){
      // wx.navigateBack()
      wx.showToast({
        title: '点击了返回',
        icon: 'none'
      })
    },
    handleHome(){
      // wx.switchTab({
      //   url: '/pages/index/index',
      // })
      wx.showToast({
        title: '点击了首页',
        icon: 'none'
      })
    },
    handleHot(){
      wx.showToast({
        title: '点击了热搜',
        icon: 'none'
      })
    }
  }
})
