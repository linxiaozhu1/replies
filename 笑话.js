// [rule: 笑话 ]
function main() {
  var number = param(1)
  console.log(number)
  var data = request({
    url:
      "https://www.mxnzp.com/api/jokes/list/random?app_id=ixssxqertpltndez&app_secret=QUF5S2JLZkNqSHdyeVVLczdCNSt1QT09",
      "method": "get", //请求方法
      "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
  })
  if(data.code =="1"){
	data = data.data.slice(0, 1)
	console.log(data)
	//data.forEach(function(e){sendText(e.content)})
	sendText(data[0].content)
  }else{
  	sendText(data.msg)
  }
}
main()

