var ws = require("nodejs-websocket")

var PORT=3000

var clientCount=0  //客户端计数器

var server = ws.createServer(function (conn) {
	console.log("New connection")
	clientCount++
	conn.nickname='user'+clientCount
	var mes={}
	mes.type="enter"
	mes.data=conn.nickname+'comes in'
	broadcast(JSON.stringify(mes)) //将mes变为字符串(对象->格式化)
	conn.on("text", function (str) {
		console.log("Received "+str)
		var mes={}
		mes.type="message"
		mes.data=conn.nickname+'says:'+str
		broadcast(JSON.stringify(mes)) //将mes变为字符串
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
		var mes={}
		mes.type="leave"
		mes.data=conn.nickname+'left'
		broadcast(JSON.stringify(mes)) //将mes变为字符串
    })
    conn.on("error",function(err){
        console.log("handle err")
        console.log(err)
    })
}).listen(PORT)

console.log("websocket server listening on port"+PORT)

function broadcast(str){ //广播，为每一个连接
	server.connections.forEach(function(connection){
		connection.sendText(str)
	})
}