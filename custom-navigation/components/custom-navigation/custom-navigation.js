// component/custom-navigation/custom-navigation.js
Component({
  properties: {

  },

  data: {
    // 默认定为20，已经能够适配大多数机型（除了刘海屏基本都差不多）
    // 下面attached中会重新获取并设置导航栏高度
    statusBarHeight: 20
  },
  
  methods: {

  },

  attached(){
    // 获取状态栏高度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          statusBarHeight: res.statusBarHeight
        })
      },
    })
  }
})
