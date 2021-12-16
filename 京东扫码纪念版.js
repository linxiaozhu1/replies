// [rule: 京东扫码]

function main() {
    var username = GetUsername()
    sendText("请在60s内打开京东app并扫描下方二维码：")
    sendImage("http://inews.gtimg.com/newsapp_ls/0/14209999139/0")
    sleep(6000)
    sendText("登录成功，" + username + "。")
}

main()