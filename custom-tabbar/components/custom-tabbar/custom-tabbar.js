const config = require('./tabbar-config.js')
console.log(config)
Component({
  
  properties: {
    activeIndex: {
      type: Number,
      value: 0,//默认当前选中第一项
    },
  },

  created() {
    //进入页面时需要隐藏掉原有的tabbar
    wx.hideTabBar({ aniamtion: false })
  },

  data: config,

  methods: {
    clickTag(e) {
      let idx = e.currentTarget.dataset.index
      this.changeTag(idx)
    },
    // 点击中间的大加号等于点击第三项
    clickPlus() {
      this.changeTag(2)
    },
    changeTag(idx) {
      //如果点击当前所在的项，不会跳转
      if (idx == this.data.activeIndex)
        return;
      let pageUrl = this.data.tabs[idx].data

      // 特定需求，中间页的样式有点特别，那个页面没有底部tabbar
      // 因此这个要用页面跳转
      if (idx === 2) {
        wx.navigateTo({
          url: pageUrl,
        })
      }
      else {
        wx.switchTab({
          url: pageUrl,
        })
      }
    }
  }
})