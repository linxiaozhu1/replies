// [rule: ?查绑定]
// [admin: false] 这里默认关闭了、开启true后除管理员账号外、群员不可查
function main() {
    var userID = GetUserID()
    var time = (60) //禁言的时间 单位/秒
    var qq = encodeURI(param(1))
    if (qq == 602772889) {
        sendText("查我？拉出去毙了") //这里设置机器人QQ、触发限制查询机器人QQ
        return
    }
    if (qq == 793364915) {
        sendText("不能查群主，禁言一分钟作为惩罚") //这里设置群主QQ、触发限制查询群主、并触发禁言1分钟
        sleep(800)
        GroupBan(userID, time)
        return
    }
    var data = request({
        url: "http://ovocc.top/chuanapi/chabangapi2.php?qq=" + qq ,
        "dataType": "json"
    })
    var phone = (data.phone)
    var phonediqu = (data.phonediqu)
    var lol = (data.lol)
    var wb = (data.wb)
    sendText("手机号："+phone+"\n归属地："+phonediqu+"\nLOL："+lol+"\n微博："+wb)
    
       
}
    
main()
