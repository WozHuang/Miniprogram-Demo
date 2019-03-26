class WebSocket {
  constructor(url) {
    this.sockTask = wx.connectSocket({
      url,
      // header: {'content-type':'application/json'},
      // method: 'GET',
      // protocols: [],
      success: () => {},
      fail: () => {},
      complete: () => {}
    });

    this.sockTask.onOpen(e => this.onopen && this.onopen(e));
    this.sockTask.onMessage(e => this.onmessage && this.onmessage(e));
    this.sockTask.onError(e => this.onerror && this.onerror(e));
    this.sockTask.onClose(e => this.onclose && this.onclose(e));
  }

  send(msg) {
    this.sockTask.send({ data: msg });
  }

  close() {
    this.sockTask.close();
  }
}

export default WebSocket;
