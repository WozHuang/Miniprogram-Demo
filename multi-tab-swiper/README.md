## 小程序做一个能够左右滑动切换的多tab页面 ##

> 主要原理：使用 `<swiper>` 和 `<scroll-view>` 组件
> **代码片段**： [https://developers.weixin.qq.com/s/mLx4FWmF757Z](https://developers.weixin.qq.com/s/mLx4FWmF757Z)
> **GitHub**: [github.com/WozHuang/Miniprogram-Demo](https://github.com/WozHuang/Miniprogram-Demo)

小程序是轻量级的app，本应小巧精悍、用完即走，但是很多企业还是想要在这辆自行车上装发动机，要求拥有原生APP的操作体验。作为一介码农也只能默默想办法实现了，总不能说这东西我不想做吧

![](./assets/smallBrother.png)

*有兴趣可以在[Github](https://github.com/WozHuang/Miniprogram-Demo)看看另外几个需求实现*

### 效果图 ###

这次要实现的是在APP中常见的多TAB滑动切换功能，没有什么可介绍的，直接上成果图：

![](./assets/sample.gif)

本来如果在web端上实现，直接去找现成的轮子使用就可以了（避免重复造轮子，而且我造的轮子也不见得有别人的好）

奈何小程序与web还有些区别，现成的轮子都用不上，还是只能自己动手造一个了。幸运的是小程序自带的部分组件也能用得上，不用从头开始造。

### 组件结构 ###

```html
<page>
	<bar /> 			// 顶部的tab选择器
	<swiper>			// 能够左右滑动的swiper组件
		<list>			// 某一个tab的列表
			<item />	// 数据项
			...
		</list>
		...
	</swiper>
</page>
```

组件结构也并不复杂，这样层层嵌套只是为了保证组件各司其职、利于维护

所利用的属性：

1. swiper
	- 可以左右滑动
	- 通过current属性切换到指定的项
	- 监听手动滑动的change事件

2. scroll-view
	- 用 scroll-into-view 属性滑动到指定的位置
	- scroll-with-animation="{{true}}" 平滑滚动
	- duration="{{200}}" 属性指定动画时长

### 存在的不足 ###

1. 从第一项切换到第三项时swiper会 1 -> 2 -> 3 的顺序切换，似乎没有直接切换的办法（设置swiper的duration属性为0可以瞬间切换，但是滑动的效果会变得奇怪）
2. 切换动画偶尔会掉帧，原因未知，优化方式未知