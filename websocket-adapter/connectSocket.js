(function(win) {
  function connectSocket(_WebSocket, callback) {
    _WebSocket = _WebSocket || (win && win.WebSocket);
    let socket = new _WebSocket("ws://121.40.165.18:8800");
    socket.onopen = e => {
      console.log("socket opened.", e);
    };
    socket.onmessage = e => {
      console.log("get message", e);
      callback(e);
    };
    socket.onerror = e => {
      console.log("socket error", e);
    };
    socket.onclose = e => {
      console.log("socket closed", e);
    };
    setTimeout(() => {
      const msg = 'hello'
      console.log("send message.", msg);
      socket.send(msg);
    }, 2000);
    setTimeout(() => {
      console.log("close socket manually.");
      socket.close();
    }, 5000);
  }

  if (typeof module != "undefined" && module.exports) {
    module.exports = connectSocket;
  } else if (typeof define === "function" && define.amd) {
    define(connectSocket);
  } else {
    win.connectSocket = connectSocket;
  }
})(Function("return this")());
