// for in 对于 在
// if 如果
var 关键词词典 = {
  'for': '对于',
  'in': '在',
  'if': '如果'
};

function 替换所有关键词() {
  var 原代码拷贝 = document.getElementById("原代码").children[0].cloneNode(true);
  var 字段列表 = 原代码拷贝.getElementsByTagName('span');
  for (var i = 0; i < 字段列表.length; i++) {
    var 字段内容 = 字段列表[i].textContent;
    var 对应中文词 = 关键词词典[字段内容];
    if (对应中文词) {
      字段列表[i].textContent = 对应中文词;
    }
  }

  var 替换代码块 = document.getElementById("替换后代码");
  if (替换代码块.children.length == 1) {
    替换代码块.removeChild(替换代码块.children[0]);
  }
  替换代码块.appendChild(原代码拷贝);

}

function 替换for(){
  关键词词典['for'] = document.getElementsByName("for替换")[0].value;
  替换所有关键词();
}

替换所有关键词();
document.getElementsByName("for替换")[0].addEventListener('input', 替换for);
