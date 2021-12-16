// [rule: ^每日热点$ ]
// [cron: 0 8 * * * ]
// [admin: true ]

var data = request({
    "url": "https://api.tianapi.com/txapi/wxhottopic/index?key=" + get("tianapi_key"), // set otto tianapi_key ?
    "dataType": "json"
})
var newslist = ["每日热点："];
var content = "";
var messages = eval('(' + get("hottopic") + ')'); // set otto hottopic [{imType:"qq",groupCode:654346133}]
if (data && data.newslist) {
    hots = data.newslist.reverse()
    for (var i = 0; i < hots.length; i++) {
        newslist.push((i + 1) + ". " + hots[i].word)
    }
    content = newslist.join("\n")
} else {
    content = "每日热点，" + data
}
for (var i = 0; i < messages.length; i++) {
    message = messages[i]
    message["content"] = content
    push(message)
}
sendText("操作成功。")