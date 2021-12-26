// [rule: 疫情]
//作者：熊猫:1305759960 2021-12-26 

function main() {
    var content = request({ 
        "url": "http://ovooa.com/API/yiqing/", 
        "method": "get", 
        "dataType": "json", 
    })
	if(content.code == 1){
		var list = content.data;
		data ="◆累计确诊：" +list.total+"\n◆累计死亡：" +  list.death + "\n◆现有疑似："+ list.suspected+"\n◆累计治愈："+ list.cure+"\n◆无症状感染："+ list.asymptom+"\n◆境外输入："+ list.overseas+"\n◆现有确诊："+ list.econ+"\n◆现有重症："+ list.server+"\n◆更新时间："+list.time+"\n◆数据来源：人民网每30分钟更新"
    }else{
		data="接口异常。"
	}
	sendText(image(list.picture)+"\n"+data)
}

main()
