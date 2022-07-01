
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()

myEmitter.on('event', async() => {
  console.log('an event occurred!')

  throw new Error('test')
})

myEmitter.emit('event')

console.log('after')
