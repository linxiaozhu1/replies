// 王者荣耀低战力查询
// [rule: 低战力 ? ?] 低战力 孙悟空 qq
function main() {
    var hero = param(1)
    var server = param(2)
    console.log(hero, server)
    var data = request({
        url: "https://api.iyk0.com/wzzl/?name=" + hero + "&type=" + server,
        "method": "get", //请求方法
        "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
    })
    if (data["code"] == 200) {
        var info = image(data["photo"])
        info += "\n英雄名称：" + data["name"]
        info += "\n最低省份：" + data["province"]
        info += "\n最低城市：" + data["city"]
        info += "\n最低县区：" + data["area"]
        sendText(info)
    } else {
        sendText(data.msg)
    }
}
main()
