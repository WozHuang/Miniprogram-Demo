module.exports = {
  tabStyle: {
    //触发时的文字颜色
    activeColor: '#FF6933',
    //未触发时的文字颜色
    inactiveColor: '#7D7D7D',
  },

  tabs: [
    {
      "content": "首页", //显示的文字（可选）
      "activeImg": "./icons/tabbar_home_s_2x.png", //触发时的图片（可选，如没有的话不会显示图片）
      "inactiveImg": "./icons/tabbar_home_n_2x.png", //未触发时的图片（如果没有activeImg不会生效）
      "data": "/pages/tabbar_template/sub/index", //按钮对应的路径
    },
    {
      "content": "消息",
      "activeImg": "./icons/tabbar_supply_s_2x.png",
      "inactiveImg": "./icons/tabbar_supply_n_2x.png",
      "data": "/pages/tabbar_template/sub/message",
    },
    {
      "content": "添加",
      "activeImg": "./icons/tabbar_contacts_s_2x.png",
      "inactiveImg": "./icons/tabbar_contacts_n_2x.png",
      "data": "/pages/tabbar_template/sub/add"
    },
    {
      "content": "收藏",
      "activeImg": "./icons/tabbar_contacts_s_2x.png",
      "inactiveImg": "./icons/tabbar_contacts_n_2x.png",
      "data": "/pages/tabbar_template/sub/collection",
    },
    {
      "content": "我的",
      "activeImg": "./icons/tabbar_my_s_2x.png",
      "inactiveImg": "./icons/tabbar_my_n_2x.png",
      "data": "/pages/tabbar_template/sub/mine"
    },
  ],
}