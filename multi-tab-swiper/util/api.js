// 模拟请求接口

// 返回的分类数量，修改这个值测试顶部的tab
// const categoryNum = 3;
const categoryNum = 10;

// 获得所有分类
export function getAllCategory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 一共返回10个分类
      const result = Array(categoryNum)
        .fill(null)
        .map((_, index) => ({ name: `分类${index}`, id: index }));
      resolve(result);
      log("分类列表", result);
    }, 1000);
  });
}

// 获得某个分类下的数据（支持分页），最多返回35条记录，对于 “分类2” 不返回
// @param {name}: 分类名
// @param {pageNo}: 页数（只测试有）
// @return {list} 数据
// @return hasNextPage 是否有下一页
export function getList({ name, pageNo }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result, hasNextPage;
      if (pageNo < 3) {
        result = Array(10)
          .fill(null)
          .map(generateDataItem.bind(null, name, pageNo));
        hasNextPage = true;
      } else if (pageNo === 3) {
        result = Array(5)
          .fill(null)
          .map(generateDataItem.bind(null, name, pageNo));
        hasNextPage = false;
      } else {
        result = [];
        hasNextPage = false;
      }

      if (name === "分类2") {
        result = [];
        hasNextPage = false;
      }

      log(`${name}的数据列表`, { list: result, hasNextPage });
      resolve({ list: result, hasNextPage });
    }, 1000);
  });
}

// 模拟数据
function generateDataItem(name, pageNo, _, index) {
  debugger;
  return {
    content: `${name}的数据${(pageNo - 1) * 10 + index}`,
    id: (pageNo - 1) * 10 + index
  };
}

function log(...data) {
  console.log("模拟返回", ...data);
}
