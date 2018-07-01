class Observable {
  constructor (subscribe) {
    this._subscribe = subscribe
  }
  subscribe (observer) {
    return this._subscribe(observer)
  }

  static timeout (time) {
    return new Observable(function (observer) {
      console.log('set timeout!')
      const timer = setTimeout(function () {
        observer.next()
        observer.complete()
      }, time)

      return {
          unsubscribe() {
            timer.clearTimeout()
          }
      }
    })
  }
}

const obs = Observable.timeout(2000)
obs.subscribe({
  next(v) {
    console.log('next')
  },
  complete(v) {
    console.log('done')
  }
})

obs.subscribe({
  next(v) {
    console.log('next')
  },
  complete(v) {
    console.log('done')
  }
})