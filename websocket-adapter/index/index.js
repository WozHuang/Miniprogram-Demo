const app = getApp();
import WebSocket from "../websocket-adapter";
import connectSocket from "../connectSocket";

Page({
  data: {
    messageList: []
  },
  onLoad: function() {
    connectSocket(WebSocket, e => {
      const list = this.data.messageList.slice();
      list.push(e.data);
      this.setData({
        messageList: list
      });
    });
  }
});
