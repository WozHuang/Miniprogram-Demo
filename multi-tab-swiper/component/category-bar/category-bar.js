// pages/shop/components/categoryBar.js
Component({
  properties: {
    // tab列表
    tabs: {
      type: Array,
      value: []
    },
    // 当前切换到的分类
    current: {
      type: Number,
      value: 0
    },
    // 分类名称的字段的key值
    key: {
      type: String,
      value: "name"
    },
    // 是否需要滚动，为 false 时使用 justify:space-around 布局
    scroll: {
      type: Boolean,
      value: false
    }
  },

  data: {},

  methods: {
    handleTap(e) {
      const { index } = e.currentTarget.dataset;
      if (index === this.data.current) return;
      this.setData({
        current: index
      });
      this.triggerEvent("change", {
        current: index,
        data: this.data.tabs[index]
      });
    }
  }
});
