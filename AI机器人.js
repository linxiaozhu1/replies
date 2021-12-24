// [rule: ^(小爱)(.*)$]
// [rule: ^(菲菲)(.*)$]
// [rule: ^(青云)(.*)$]
// [rule: ^(傻妞)(.*)$]

var nickname = param(1)
var content = param(2)
var rename = function(content) {
    return content.replace("傻妞", nickname).replace("小爱", nickname).replace("菲菲", nickname).replace("{br}", "\n")
}
var finish = false

if (content.indexOf("翻译") == -1) {
    data = request({
        "url": "https://jintia.jintias.cn/api/xatx.php?msg=" + "小爱" + content,
        "dataType": "json"
    })
    if (data && data.text) {
        sendText(rename(data.text))
        finish = true
    }
    if (!finish) {
        sendText(nickname + "刚放了个屁，容我缓缓！")
    }
}

if (!finish) {
    if (content == "") {
        content = "菲菲"
    }
    var data = request({
        "url": "http://api.qingyunke.com/api.php?key=free&appid=0&msg=" + content,
        "dataType": "json"
    })
    if (data && data.content) {
        strs = rename(data.content).split("\n")
        for (i = 0; i < strs.length; i++) {
            sendText(strs[i])
        }
        finish = true
    }
}

if (!finish) {
    sendText("暂时无法回复，先欣赏欣赏壁纸吧！")
    sendImage("https://api.mtyqx.cn/api/random.php")
}
