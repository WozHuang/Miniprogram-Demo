// index/component/list.js
import { getList } from "../../util/api";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这个东西一般应该是分类的id，这里就用名称来模拟一下
    catName: {
      type: String
    },

    // 是否加载，loaded 设置为 true 就加载数据，false时表示还未加载
    loaded: {
      type: Boolean,
      value: true,
      observer(val) {
        if (val) {
          this.refresh();
        }
      }
    }
  },

  data: {
    dataList: [],
    pageNo: 1,
    hasNextPage: true,
    loading: false
  },

  ready() {
    if (this.data.loaded) {
      this.refresh();
    }
  },

  methods: {
    refresh() {
      this.setData({
        pageNo: 1,
        hasNextPage: true
      });
      this.getList();
    },

    getList() {
      const { pageNo, catName } = this.data;
      const name = this.data.catName;
      getList({
        name: catName,
        pageNo
      }).then(res => {
        let { list, hasNextPage } = res;
        this.setData({
          dataList: pageNo === 1 ? list : this.data.dataList.concat(list),
          hasNextPage,
          loading: false
        });
      });
    },

    onReachBottom() {
      if (this.data.hasNextPage && !this.data.loading) {
        this.setData({
          pageNo: this.data.pageNo + 1
        });
        this.getList();
      }
    }
  }
});
