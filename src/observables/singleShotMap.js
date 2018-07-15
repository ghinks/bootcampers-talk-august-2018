import fs from 'fs'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const myFunc = async function (observer) {
  const result = await fs.promises.readFile('package.json', 'utf8')
  observer.next(result)
}

const observer = x => {
  console.log(Array(100).join('-'))
  console.log('   my observer')
  console.log(Array(100).join('-'))
  console.log(x)
}

const myObs = new Observable(myFunc)

const myMappedObservable = myObs.pipe(map(pkgStr => parseInt(JSON.parse(pkgStr).version, 10)))

myMappedObservable.subscribe(observer)
