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

// <div><span>for</span><input type="text" name="for替换" value="对于"></div>
function 创建替换词条(原词文本, 替换文本) {
  var 词条 = document.createElement("div");

  var 原词 = document.createElement('span');
  原词.textContent = 原词文本;

  var 替换 = document.createElement('input');
  var 替换输入框名 = 原词文本 + '替换';
  替换.type = 'text';
  替换.name = 替换输入框名;
  替换.value = 替换文本;

  词条.appendChild(原词);
  词条.appendChild(替换);
  return 词条;
}

function 取输入监听函数(关键词) {
  return function() {
    关键词词典[关键词] = document.getElementsByName(关键词 + '替换')[0].value;
    替换所有关键词();
  };
}

替换所有关键词();

var 替换表 = document.getElementById("替换表");
for(var 关键词 in 关键词词典) {
  替换表.appendChild(创建替换词条(关键词, 关键词词典[关键词]));

  var 替换输入框名 = 关键词 + '替换';
  document.getElementsByName(替换输入框名)[0].addEventListener('input', 取输入监听函数(关键词));

}