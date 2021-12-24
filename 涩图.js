// 涩图+3-傻妞Javascripts插件开发示例
// [rule: ^涩图\s*(\d+)$ ] 支持正则匹配
// [admin: true] 敏感接口设置权限

function main() {
    var num = param(1) //匹配到的第一个参数
    num = parseInt(num) // 转换为数字
    for (var i = 0; i < num; i++) {
        if (i > 10) {
            sendText("小心肾亏哦～")
            break
        }
        var data = request({ // 内置http请求函数
            "url": "https://api.nyan.xyz/httpapi/sexphoto/", //请求链接
            "method": "get", //请求方法
            "dataType": "json", //指定json类型数据
        })
        if (!data || !data.data || !data.data.url) {
            sendText("小姐姐被外星人带走啦～")
        }
        var url = data.data.url
        sendImage(url)
    }
}

main()