import fs from 'fs'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const myFunc = async function (observer) {
  const handler = async () => {
    const result = await fs.promises.readFile('package.json', 'utf8')
    observer.next(result)
  }
  setInterval(handler, 3000)
}

const observer = x => {
  console.log(Array(100).join('-'))
  console.log('   my observer')
  console.log(Array(100).join('-'))
  console.log(x)
}

const myObs = new Observable(myFunc)

const myMappedObs = myObs.pipe(map(pkg => parseInt(JSON.parse(pkg).version)*2))

myMappedObs.subscribe(observer)
