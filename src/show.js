// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
  const inp = document.createElement('input');
  window.document.getElementById('app').innerText = 'Hello,' + content;
  window.document.getElementById('app').appendChild(inp);
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;