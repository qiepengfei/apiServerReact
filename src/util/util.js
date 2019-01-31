
// 获取参数
export const getUrlParam = (name) => {
  const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  return r && r[2];
};