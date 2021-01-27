// 操作 DOM 元素，把 content 显示到网页上
const show = (content) => {
  const inp = document.createElement('input');
  window.document.getElementById('app').innerText = 'Hello,' + content;
  window.document.getElementById('app').appendChild(inp);
  console.log(1);
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;