# bootcampers anonymous talk code

## install
I used node version 10. (well it is a talk so lets use the latest I can today)

```
npm i
```

(yes, npm i is npm install)

## run

node -r esm

[esm](https://www.npmjs.com/package/esm)

esm is awesome and allows all the usages of the import statement without me having
to setup babel. Plus it actually does a great deal of the es module stuff for real.


## example code

###  Observables TC39 proposal
[observables](https://github.com/tc39/proposal-observable)

![observables linked logo from web](https://rxjs-dev.firebaseapp.com/assets/images/logos/logo.png "Observables image item")


Using the RxJs implementation of the observables proposal ( or maybe vice versa ) some use demo use cases are given

- fromEvent, open in browser, (mac) cmd-o src/observables/fromEvent/index.html, this demonstrates observable
mouse movement and throtted mouse clicks.
- singleShot, node -r esm ./src/observables/singleShot.js, reads the version number from
package.json using an observable
- multiShot,  node -r esm ./src/observables/multiShot.js, reads the version number from
package.json using an observable over and over
- singleShotMap, node -r esm ./src/observables/singleShotMap.js, reads the version number
from packages.json and maps from string to int once
- multiShotMap, node -r esm ./src/observables/multiShotMap.js, reads , reads the version number
from packages.json and maps from string to int over and over
- distinctUntilChanged, node -r esm ./src/observables/distinctUntilChanged.js, reads the package.json
repeated times, but will only emit the observable after the initial callback if the value has
changed. Go on edit the version number in the package.json, as you increment the major version
number the event will be emitted.


### array lastItem
[array lastItem](https://github.com/keithamus/proposal-array-last)

