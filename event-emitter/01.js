const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()

function handler(payload) {
  console.log('an event occurred!')
}

const newHandler = handler.bind(null)

myEmitter.on('event', handler)

myEmitter.emit('event')

myEmitter.off('event', newHandler)

myEmitter.emit('event')
