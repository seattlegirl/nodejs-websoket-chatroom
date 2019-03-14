var app=require('http').createServer()
var io=require('socket.io')(app)

var PORT=3000

var clientCount=0  //客户端计数器

app.listen(PORT)

io.on('connection',function(socket){
	clientCount++
	socket.nickname='user'+clientCount
	io.emit('enter',socket.nickname+'comes in')//io.emit广播;socket.emit发送

	socket.on('message',function(str){
		io.emit('message',socket.nickname+'says:'+str)
	})

	socket.on('disconnect',function(){
		io.emit('leave',socket.nickname+'left')
	})
})

console.log("websocket server listening on port"+PORT)
