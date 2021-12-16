// [rule: 百科 ?]
var content = request({ url: "http://xiaoapi.cn/api/sgbaike.php?msg=" + encodeURI(param(1)) })
var matched = content.match(/±img=.*±/) + ""
content = content.replace(matched, "").replace(/\\n/g, "\n").replace(/&nbsp;/g, " ")
sendText(matched ? image(matched.replace("img=", "").replace(/±/g, "")) + "\n" + content : content)