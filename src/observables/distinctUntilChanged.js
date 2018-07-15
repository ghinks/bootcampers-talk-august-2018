import fs from 'fs'
import { Observable } from 'rxjs'
import { map, distinctUntilChanged } from 'rxjs/operators'

const myFunc = async function (observer) {
  const handler = async () => {
    const result = await fs.promises.readFile('package.json', 'utf8')
    observer.next(result)
  }
  setInterval(handler, 1000)
}

const observer = x => {
  console.log(Array(100).join('-'))
  console.log('   my observer')
  console.log(Array(100).join('-'))
  console.log(x)
}

const myObs = new Observable(myFunc)

const myMappedObs = myObs.pipe(map(pkg => parseInt(JSON.parse(pkg).version)))

const distinctObs = myMappedObs.pipe(distinctUntilChanged())

distinctObs.subscribe(observer)
