// [rule: ^提醒(.*)$]
// [rule: tips]
// [cron: 0 12 * * *]

/**
 * 
 * 定时推送、手动推送、单一回复三合一，可自行添加图片方式，参考“外卖.js”
 * set otto tips [{imType:"qq","groupCode":}]
 * 自行修改触发词“提醒”、“tips”
 * “提醒推送”可以完成tips范围推送
 * content为发送内容，自行修改
 * 
 */
var ele = "http://www.linxiaozhu.cn/jd/logo.png";
var content = image(ele) + "\n　　------林小猪 - JD挂机系统------\n\n　　　------管理员联系方式------\n添加管理员QQ：793364915\n添加机器人QQ：602772889\n添加管理员微信：Lin-VowNight\n\n　　　 ------基础机器人命令------　　\n系统绑定查询：登陆/查询\n公众号二维码：公众号\n主要活动入口：活动入口\n\n　　　------本站点登录系统------\n登陆首选系统：http://jd.linxiaozhu.cn/\n登陆备用系统：http://ninja.linxiaozhu.cn/\nPs:所有链接请用自带浏览器打开，要不无法正常跳转！！！";

var isPush = false;
var str = param(1);
var pattern = /推送/;
if (GetUserID() != "") {
    if (isAdmin() && pattern.test(str)) {
        isPush = true
    } else if (str != "") {
        sendText("推送个毛毛")
    }
} else {
    isPush = true
}
if (isPush) {
    var messages = eval('(' + get("tips") + ')');
    for (var i = 0; i < messages.length; i++) {
        message = messages[i]
        message["content"] = content
        push(message)
    }
    sendText("推送完成")
} else if (str == "") {
    sendText(content)
}

