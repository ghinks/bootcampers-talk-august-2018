import fs from 'fs/promises'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const myFunc = async function (observer) {
  const result = await fs.readFile('package.json', 'utf8')
  observer.next(result)
}

const observer = x => {
  console.log(Array(100).join('-'))
  console.log('   my observer')
  console.log(Array(100).join('-'))
  console.log(x)
}

const myObs = new Observable(myFunc)

const myMappedObservable = myObs.pipe(map(pkgStr => JSON.parse(pkgStr).version))

myMappedObservable.subscribe(observer)
