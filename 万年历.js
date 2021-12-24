// 今天黄历/万年历
// [rule: 万年历 ]	 万年历
function main() {
  var date = new Date()
  var year = date.getFullYear()+""
  var month = date.getMonth() + 1
  month = month*1 < 10?"0"+month:month+""
  var day = date.getDate()*1 < 10?"0"+date.getDate:date.getDate()+""
  var currentDate = year+month+day
  var data = request({
    // 内置http请求函数
    url:"https://www.mxnzp.com/api/holiday/single/"+currentDate+"?ignoreHoliday=false&https://www.mxnzp.com/api/holiday/single/20181121?ignoreHoliday=false&app_id=ixssxqertpltndez&app_secret=QUF5S2JLZkNqSHdyeVVLczdCNSt1QT09",
    "method": "get", //请求方法
    "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
  })
  if(data.code =="1"){
  	data = data.data
	sendText("今天是"+year+"年"+month+"月"+day+"日，农历"+data.lunarCalendar+"、"+data.yearTips+"年，是二十四节气当中的"+data.solarTerms+"。\n今天出生的人属"+data.chineseZodiac+"，星座是"+data.constellation+"。\n宜："+data.avoid+"。\n忌："+data.suit+"。")
  }else{
  	sendText(data.msg)
  }
}
main()
