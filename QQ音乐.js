// [rule: QQ音乐 ?]
//作者：熊猫：1305759960 2021-12-26 
//数据来源 三三酱API http://ovooa.com
function main() {
    var keyword = encodeURI(param(1))
    var data = request({
        url: "http://ovooa.com/API/QQ_Music/?Skey=&uin=&msg=" + keyword +"&type=text",
        "dataType": "text"
    })
    var total = data.length
    if (!total) {
        sendText("抱歉，没有找到相关歌曲。")
        return
    }
 sendText( data )
    sleep(1000)
        sendText("请发送你要听的歌曲序号")
        sec = input()
    if (sec > 10) {
        sendText("没有找到对应的歌曲。")
        return
    }
    var database = request({ 
        url: "http://ovooa.com/API/QQ_Music/?Skey=&uin=&msg=" + keyword +"&n=" + sec, 
        "dataType": "json" 
    })
   sendText("[CQ:music,type=qq,id="+database.data.songid+"]")
}

main()