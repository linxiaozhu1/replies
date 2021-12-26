// [rule: 公交]
// [rule: 上班 ? ] 
// [cron: 18 8 * * * ] 
// 参数可以自行抓包微信 车来了 小程序;

function main() {
    //参数配置
    var cityId = "008"                                //城市代码
    var lineId = "0769141501364"                      //线路id，正向和反向id不同
    var targetOrder = "2"                             //候车站点，其实就是站点上面的数字
    //var targetOrder = param(1) 
    var imType = ImType();
    
    var bus = request({ // 内置http请求函数
    	   "url": `https://web.chelaile.net.cn/api/bus/line!busesDetail.action?s=h5&wxs=wx_app&sign=1&h5RealData=1&v=3.9.73&src=weixinapp_cx&cityId=${cityId}&lineId=${lineId}&targetOrder=${targetOrder}`,
        "headers": {
            'Host': 'web.chelaile.net.cn',
            'Referer': 'https://servicewechat.com/wx71d589ea01ce3321/530/page-frame.html',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.14(0x18000e2f) NetType/WIFI Language/zh_CN',
            'content-type': 'text'
        },
        "method": "get" //请求方法  
    })
        var data = JSON.parse(bus.slice(15, -7))
        var list = data.data.buses
        var lineNo = data.data.line.lineNo
        var endSn = data.data.line.endSn
        var tip = data.data.tip.desc
        var last = data.data.depDesc
        var nowtime = new Date().toLocaleTimeString()
        var text = (`${lineNo}路：\n${list.length}辆开往${endSn}\n`)
        if (last.length > 0){
    	   text += last+"\n"
        }
        if (list.length > 0){
          for (var i=0; i < list.length; i++){
        	  var busId = list[i].busId
            if (list[i].travels.length > 0) {
                var bustime = list[i].travels[0].arrivalTime
                var min = Math.round((new Date(bustime) - new Date())/1000/60)
                text += (`${busId}：${min}分钟\n`)
            } else {
            	 text += (`${busId}：已过站\n`)
            	}
        	}
    } else {
        text += tip + "\n" 
    }
    text += (`通知时间：${nowtime}`)
    
    if (imType == "fake") {
        var groups = [{
            imType: "wx",
            groupCode: 24781175684,
        }]
        for (var i = 0; i < groups.length; i++) {
            groups[i]["content"] = text
            push(groups[i])
        }
    } else {
          sendText(text)
      }
}

main()