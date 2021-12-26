// [rule: raw \[CQ:at,qq=(\d+),text=([^\[]+)]\s*/kick([\s\S]*)] @xxx/kick原因
// [rule: raw \[CQ:at,qq=(\d+),text=([^\[]+)]\s*踢([\s\S]*)] @xxx踢原因 例：@木子李 踢群内打广告
/*
木子李2021.12.10制作
目的是为了实现管理员可以踢人，当然你可以配置其他非管理员QQ也可以。
交流群：323731210
返回样式
@花猫(1975537275) 
违规事件：群内打广告
处理方式：将其移出群聊。
发起请求：木子李(56794501)
执行人：花猫 (1975537275)
*/

function main() {
    var username = GetUsername() //获取用户名
    var qqID = bucketGet("qq", "masters") //管理员QQ这里我是为了获取群主QQ
    var userID = GetUserID() //获取操作者QQ
    var why = param(3) //踢出原因
    var qq = userID.replace("2910354326", "123").replace("1628734514", "123").replace("798731886", "123").replace("2524151408", "123").replace("1752228912", "123").replace("1485056746", "123").replace("3499529265", "123").replace("949194446", "123").replace("1301517532", "123").replace("945624195", "123") //将所有管理员QQ替换为123
    if (qq == "123") {//如果QQ等于123视为管理员操作
        if (why == "") { //原因为空，给其设置一个值。
            var why = "其他"
            sendText("[CQ:at,qq=" + param(1) + ",text=" + param(2) + "](" + param(1) + ") \n违规事件：" + why + "\n处理方式：将其移出群聊。\n发起请求：" + username + "(" + userID + ")\n执行人：花猫 (1975537275)" /*执行人信息自行修改一下，原因目前无法获取机器人信息*/ )
            sleep(3000) //等待3秒后踢出，让其知道死因。
            GroupKick(param(1), false)
        } else {//有踢出原因获取并填充。

            sendText("[CQ:at,qq=" + param(1) + ",text=" + param(2) + "](" + param(1) + ") \n违规事件：" + why + "\n处理方式：将其移出群聊。\n发起请求：" + username + "(" + userID + ")\n执行人：花猫 (1975537275)" /*执行人信息自行修改一下，原因目前无法获取机器人信息*/ )
            sleep(300) //等待3秒后踢出，让其知道死因。
            GroupKick(param(1), false)
        }
    } else {//机器人管理员(群主)操作
        if (qq == "56794501") {//QQ等于群主QQ
            if (why == "") { //原因为空，给其设置一个值。
                var why = "其他"//无原因赋予一个值其他。
                sendText("[CQ:at,qq=" + param(1) + ",text=" + param(2) + "] \n违规事件：" + why + "\n处理方式：将其移出群聊。\n发起请求：" + username + "(" + userID + ")\n执行人：花猫 (1975537275)" /*执行人信息自行修改一下，原因目前无法获取机器人信息*/ )
                sleep(3000) //等待3秒后踢出，让其知道死因。
                GroupKick(param(1), false)//踢人操作
            } else {//有踢出原因获取并填充。

                sendText("[CQ:at,qq=" + param(1) + ",text=" + param(2) + "](" + param(1) + ") \n违规事件：" + why + "\n处理方式：将其移出群聊。\n发起请求：" + username + "(" + userID + ")\n执行人：花猫 (1975537275)" /*执行人信息自行修改一下，原因目前无法获取机器人信息*/ )
                sleep(300) //等待3秒后踢出，让其知道死因。
                GroupKick(param(1), false)//踢人操作
            }
            } else {}
        } else {
            sendText("再捣乱我就报警啦～")//非设置内QQ操作提示语。
        }
    }
}

main()