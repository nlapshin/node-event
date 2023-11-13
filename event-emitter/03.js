
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()

// Подписались после публикации
myEmitter.on('event', () => {
  console.log('an event occurred!')
  // throw new Error('test')
})

myEmitter.emit('event')

console.log('after')
