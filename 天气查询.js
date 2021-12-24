// 天气查询
// [rule: ?天气 ] 北京天气
// [rule: 天气 ? ] 天气 北京
//去https://www.mxnzp.com/doc/list申请接口权限自己替换一下
function main() {
	var address = param(1);
	var data = request({
		url:
			"https://www.mxnzp.com/api/weather/current/" +
			address +
			"?app_id=xxxxx&app_secret=xxxxxx",
		method: "get", //请求方法
		dataType: "json", //这里接口直接返回文本，所以不需要指定json类型数据
	});
	if (data["code"] == 1) {
		data = data.data;
		var info = "地区：" + data["address"];
		info += "\n地区编号：" + data["cityCode"];
		info += "\n温度：" + data["temp"];
		info += "\n天气：" + data["weather"];
		info += "\n风力：" + data["windPower"];
		info += "\n湿度：" + data["humidity"];
		info += "\n更新时间：" + data["reportTime"].slice(0, 10);
		sendText(info);
	} else {
		sendText(data.msg);
	}
}
main();
