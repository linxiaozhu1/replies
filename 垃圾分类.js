// [rule: 垃圾分类 ? ] 垃圾分类查询
//去https://www.mxnzp.com/doc/list申请接口权限自己替换一下
function main() {
	var name = param(1); //匹配规则第一个问号的值
	name = encodeURIComponent(name)
	var data = request({
		// 内置http请求函数
		url:"https://www.mxnzp.com/api/rubbish/type?name="+name+"&app_id=xxxxxx&app_secret=xxxxxx",
		method: "get", //请求方法
		dataType: "json", //这里接口直接返回文本，所以不需要指定json类型数据
	});
	if (data["code"] == 1) {
		var list = data["data"];
		var info = list.aim.goodsName + "：" + list.aim.goodsType + "\n";
		if(list.recommendList.length > 0 && list.recommendList[0].goodsName!=list.aim.goodsName){
			info += "相关:\n";
			list.recommendList.forEach(function (e) {
				info += e.goodsName + "：" + e.goodsType + "\n";
			});
		}
		sendText(info);
	} else {
		sendText(data.msg);
	}
}
main();
