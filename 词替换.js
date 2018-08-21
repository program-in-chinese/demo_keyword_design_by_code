// for in 对于 在
// if 如果
var 关键词词典 = {
  'for': '对于',
  'in': '在',
  'if': '如果'
};

var 字段列表 = document.getElementsByTagName('span');
for (var i = 0; i < 字段列表.length; i++) {
  var 字段内容 = 字段列表[i].textContent;
  var 对应中文词 = 关键词词典[字段内容];
  if (对应中文词) {
    字段列表[i].textContent = 对应中文词;
  }
}