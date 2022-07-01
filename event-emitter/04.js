const EventEmitter = require('events')
class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log('Before executing') // 1
    this.emit('begin') // 3
    taskFunc() // 5
    this.emit('end') // 4
    console.log('After executing') // 2
  }
}
const withLog = new WithLog()

withLog.on('begin', () => console.log('About to execute')) // 3
withLog.on('end', () => console.log('Done with execute')) // 4

withLog.execute(() => console.log('*** Executing task ***')) // 5

// 1, 3, 5, 4, 2
