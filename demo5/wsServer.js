var app = require("http").createServer()
var io = require("socket.io")(app)

app.listen(3000)

//服务器端和客户端之间可以使用socket端口对象的emit方法，互相发送事件。
//一方使用emit发送事件后，另一方可以使用on,或者once方法，对该事件进行监听。once和on不同的地方就是，once只监听一次，会在回调函数执行完毕后，取消监听。
io.on("connection", function (socket) {
  socket.emit('news',{hello:'world'});
  socket.on('my other event',function(data) {
    console.log(data);
  })
})