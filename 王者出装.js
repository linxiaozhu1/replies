// [rule: 王者出装?] 王者出装 孙悟空
// [rule: ?出装]
var hero = param(1);
hero = encodeURIComponent(hero);
var data = request({
	url:'https://api.iyk0.com/wzcz/?msg=' + hero,
	dataType:"json"
	});
if(data["code"] == 200){
	sendImage(data["img"])
	sendText(data["data"])
}else{
	sendText(data["msg"])
}
