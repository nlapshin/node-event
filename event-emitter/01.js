
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()

myEmitter.on('event', (payload) => {
  console.log('an event occurred!')

  console.log('payload', payload)
})

myEmitter.emit('event', { key: 'value'})

console.log('after')
