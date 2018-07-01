import fs from 'fs/promises'
import { Observable } from 'rxjs'

const myFunc = async function (observer) {
  const handler = async () => {
    const result = await fs.readFile('package.json', 'utf8')
    observer.next(result)
  }
  setInterval(handler, 3000)
}

const observer = x => {
  console.log(Array(100).join('-'))
  console.log('   my observer')
  console.log(Array(100).join('-'))
  const pkg = JSON.parse(x)
  console.log(pkg.version)
}

const myObs = new Observable(myFunc)

myObs.subscribe(observer)
