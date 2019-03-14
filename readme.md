# websoket初体验之实现简单聊天功能
## demo1：websocket初体验：
创建一个HTML文件，开始踏进websocket的大门，服务器是官方提供的，可以直接运行html文件看到效果。
[点击查看效果。](file:///D:/github/nodejs-websoket-chatroom/demo1/index.html)

## demo2：搭建自己的websocket server：
**比较重要的一步是**：安装nodejs-websocket（npm install nodejs-websocket）;   </br>
**首先**运行服务器端源码（node wsServer.js）；  </br>
**再**打开客户端html源码。实现的效果是将输入的小写字母转变为大写字母+“！！！” </br>
[客户端源码index.html](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo2/index.html)  </br>
[服务器端源码wsServer.js](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo2/wsServer.js)  </br>
**一个小bug**：关闭页面控制台会报错，意思就是说server挂掉了，再次打开页面需要重新开启服务。</br>
**解决方法**：在原js文件中添加一个错误处理函数即可。这样就能实现关闭页面，只是显示出错误信息，server并没有挂掉，重新运行html文件依然能够成功。

## demo3：实现简单的聊天功能：
1.首先，在客户端中构建了一个websocket实例;  </br>
2.接着，server链接，触发websocket中的onopen事件，该事件向服务器端发送数据，每打开一个客户端，都有各自的计数值来显示是谁进入了聊天。  </br>
3.然后，服务器端接受数据，并运行广播函数broadcast()，向所有连接广播。（不同的连接由不同的计数值区分）</br>
4.最后，客户端中的websocket里的onmessage事件被触发，返回的数据动态添加并显示。</br>
**注：**可打开多个客户端，查看运行效果。</br>
**小缺点：**多人聊天时，无法确定每句话是谁说的。
[客户端源码index.html](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo3/index.html)  </br>
[服务器端源码wsServer.js](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo3/wsServer.js)  </br>

## demo4：改进聊天功能：
1.进入聊天室的人和离开的人，用不同颜色表示。</br>
2.能够知道每句话是谁说的。</br>
**缺点：**</br>
1.websocket在广播时不能直接发送对象，要将对象格式化为字符串。  </br>
2.不能发送自定义事件，需要定义对象中的type属性才能识别消息类型。</br>
[客户端源码index.html](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo4/index.html)  </br>
[服务器端源码wsServer.js](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo4/wsServer.js)  </br>

## demo5：Socket.io入门:
**注意：** 在开发程序之前，需要下载安装：npm install socket.io. 下载库socket.io_2.0.3.js </br>
socket.io是一个面向实时web应用的JavaScript库，它使得服务器和客户端之间实时双向的通信成为可能。它有两个部分组成：在浏览器中运行的客户端库，和面向node.js的服务端库。</br>
[客户端源码index.html](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo5/index.html)  </br>
[服务器端源码wsServer.js](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo5/wsServer.js)  </br>

## demo6：使用Socket.io改进demo4中的缺点:
socket.io可以直接发送一个字符串，不用像websocket那样先把对象转化为字符串发送，然后再转化回来；可以发送自定义事件，不需要定义type这个属性去识别消息类型。</br>
[客户端源码index.html](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo6/index.html)  </br>
[服务器端源码wsServer.js](https://github.com/seattlegirl/nodejs-websoket-chatroom/blob/master/demo6/wsServer.js)  </br>