const events = new EventEmitter()

class User {
  constructor(events) {
    this.events = events;
    this.name = 'nik',
    this.age = 32
  }

  setAge(newAge) {
    this.age = newAge

    this.events.emit('user.age.updated', {
      id: 'uuid',
      payload: {
        name: this.name,
        age: this.age
      }
    })
  }
}

class Gift {
  constructor(events) {
    this.events = events
    this.map = new Map()

    events.on('user.age.updated', this.sendBirthdayEmail.bind(this))
    events.on('user.age.updated', this.sendBirthdayEmail.bind(this))
  }

  sendBirthdayEmail(data) {
    const { user } = data.payload
    const message = `Happy birthday ${user.name}`
    
    throw new Error('new error')
  }
}

const user = new User(events)
const gift = new Gift(events)

/*
class EventEmitter

// База
on(event, handler) - подписка на нужное событие
handler(payload) - обработчик события

emit(event, payload1, payload2, ...) - испускание события.

// Вспомогательные события
once(event, payload) - подписаться но один раз.
off(event, handler) - отписка от события.
listeners(event) - сколько подписчиков
maxEventListeners - по-умолчанию 10
*/
