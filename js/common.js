function toChangeDate(text) {
  var str = text.replace(/-/gi, '/');
  return str.substr(0, str.length - 1);
}


//验证邮箱
function isemail(str) {
  var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
  if (result == null) {
    return false;
  }
  return true;
}

function vailNickName(opt) {
  var nickName = opt.val;
  // var message = "";
  // var patrn = /^\d+$/;
  var length = getNickNameLength(nickName);
  var p = {};
  if (nickName === '') {
    p.message = "昵称不能为空！";
    p.result = false;  
  } else if (length < opt.minLen || length > opt.maxLen) {
    p.message = "昵称为" + opt.minLen + "-" + opt.maxLen + "个字符！";
    p.result = false;    
  } else {
    p.result = true;  
  }
  return p;
}
//计算昵称长度
function getNickNameLength(nickName) {
  var len = 0;
  for (var i = 0; i < nickName.length; i++) {
    var a = nickName.charAt(i);　　　　　　 //函数格式：stringObj.match(rgExp) stringObj为字符串必选 rgExp为正则表达式必选项
    　　　　　　 //返回值：如果能匹配则返回结果数组，如果不能匹配返回null
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}

//验证手机号
//str 参数 string

function vailPhone(str) {
  var phone = str;
  //var myreg = /^(((13[0-9]{1})|159|153)+\d{8})$/;
  var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-3]{1})|(18[5-9]{1}))+\d{8})$/;
  var p = {};
  if (phone === '') {
    p.message = "手机号码不能为空！";
    p.result = false;
    return p;
  } else if (phone.length !== 11) {
    p.message = "请输入有效的手机号码！";
    p.result = false;
    return p;
  } else if (!myreg.test(phone)) {
    p.message = "请输入有效的手机号码！";
    p.result = false;
    return p;
  } else {
    p.result = true;
    return p;
  }
}

//验证密码
//opt 参数
//val 密码值
//minLen 最小长度
//maxLen 最大长度
// var opt = {
//   val: str,
//   minLen: minLen,
//   maxLen: maxLen
// }
function vailPwd(opt) {
  var password = opt.val;
  var p = {};
  if (password === '') {
    p.message = "密码不能为空！";
    p.result = false;
    return p;
  } else if (password.length < opt.minLen || password.length > opt.maxLen) {
    p.message = "密码" + opt.minLen + "-" + opt.maxLen + "位！";
    p.result = false;
    return p;
  } else {
    p.result = true;
    return p;
  }
}

var formatDate = function(date, format) {   
    if (!date) return;   
    if (!format) format = "yyyy-MM-dd";   
    switch(typeof date) {   
        case "string":   
            date = new Date(date.replace(/-/, "/"));   
            break;   
        case "number":   
            date = new Date(date);   
            break;   
    }    
    if (!date instanceof Date) return;   
    var dict = {   
        "yyyy": date.getFullYear(),   
        "M": date.getMonth() + 1,   
        "d": date.getDate(),   
        "H": date.getHours(),   
        "m": date.getMinutes(),   
        "s": date.getSeconds(),   
        "MM": ("" + (date.getMonth() + 101)).substr(1),   
        "dd": ("" + (date.getDate() + 100)).substr(1),   
        "HH": ("" + (date.getHours() + 100)).substr(1),   
        "mm": ("" + (date.getMinutes() + 100)).substr(1),   
        "ss": ("" + (date.getSeconds() + 100)).substr(1)   
    };       
    return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {   
        return dict[arguments[0]];   
    });                   
};

//字符串转日期
function strToDate(strDate) {
  var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
    function(a) {
      return parseInt(a, 10) - 1;
    }).match(/\d+/g) + ')');
  return date;
}

function ChangeDateFormatChinese(text){
  var arr=text.split('-');
  return arr[0]+'年'+arr[1]+'月'+arr[2]+'日'
}
function ChangeDateFormat(text) {
  var str = text.replace(/年|月|日/gi, '-');
  return str.substr(0, str.length - 1);
}
function toChangeDate(text) {
    var str = text.replace(/年|月|日/gi, '/');
    return str.substr(0, str.length - 1);
}