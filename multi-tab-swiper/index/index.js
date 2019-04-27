import { getAllCategory } from "../util/api";
Page({
  data: {
    current: 0,
    categoryList: null // 分类列表，null表示分类正在加载
  },

  onLoad() {
    this.getCategoryList();
  },

  getCategoryList() {
    getAllCategory().then(res => {

      // 加载第一个分类的列表
      res[0].loaded = true;

      this.setData({
        categoryList: res
      });
    });
  },

  handleCategoryChange(e) {
    const { current, data } = e.detail;
    // data是组件返回的，当前选中选项的数据，也就是对应 categoryList[current] 那个

    // 让 tab 和 swiper同步
    this.setData({
      current
    })

    // 如果切换到了还没加载的分类，加载这个分类
    if(!this.data.categoryList[current].loaded){
      this.setData({
        [`categoryList[${current}].loaded`] : true
      })
    }
  }

});
