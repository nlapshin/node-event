class EventEmitter {
  constructor() {
    this.listners = []
  }

  on(event, handler) {
    this.listners.push({ event, handler })
  }

  emit(event, payload) {
    for (let listener of this.listners) {
      if (listener.event === event) {
        listener(payload)
      }
    }
  }
}
