class MyEmitter {
  constructor() {
    this.listeners = {}
  }

  on(event, handler) {
    if ((event in this.listeners) === false) {
      this.listeners[event] = []
    }

    this.listeners[event].push(handler)
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return
    }

    for (let handler of this.listeners[event]) {
      handler(payload)
    }
  }
}

const myEmitter = new MyEmitter()

myEmitter.on('event', (payload) => {
  console.log('an event occurred!')
})

myEmitter.emit('event')
myEmitter.emit('error')
