// import imgUrl from './assets/img1.jpeg';
// import imgUrl2 from './assets/img2.jpg';
import imgUrl3 from './assets/img3.svg';

// 操作 DOM 元素，把 content 显示到网页上
const show = (content) => {
  const inp = document.createElement('input');
  const img = document.createElement('img');
  img.src = imgUrl3;
  window.document.getElementById('app').innerText = `Hello,${content}`;
  window.document.getElementById('app').appendChild(inp);
  window.document.getElementById('app').appendChild(img);
};

// 通过 CommonJS 规范导出 show 函数
// module.exports = show;

// 通过 es6 规范导出 show 函数
export default show;
