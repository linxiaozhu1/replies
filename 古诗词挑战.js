// 古诗词挑战
// [rule: 古诗词挑战]
var userID = GetUserID()
function main() {
	var red = request({
		url: "https://api.iyk0.com/tzgsc/?msg=&id=" + userID
	})
	sendText(red + "退出，请回复【q】")
	txt = input()
	switch (txt) {
		case '1':
		case '2':
		case '3':
		case '4':
			answer(txt)
			break
		case 'q':
			return sendText("已退出游戏")
			break
		default:
			return sendText("超时，退出游戏")
	}
	

}

function answer(txt) {
	var sub = request({
		url: "https://api.iyk0.com/tzgsc/?msg=" + txt + "&id=" + userID
	})
	sendText (sub + "\n退出,请回复【q】")
	txt = input()
	switch (txt) {
		case '1':
		case '2':
		case '3':
		case '4':
			answer(txt)
			break
		case '下一题':
			main()
			break
		case '提示':
			answer(txt)
			break
		case 'q':
			return sendText("已退出游戏")
			break
		default:
			return sendText("超时，退出游戏")
	}

}	
main()