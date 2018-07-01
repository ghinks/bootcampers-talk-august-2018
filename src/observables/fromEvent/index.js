let tracker = document.getElementById('tracker');
let trackerSource = Rx.Observable.fromEvent(document.getElementById('col1'), 'mousemove')
let trackerSub = trackerSource.subscribe(e => tracker.innerHTML = e.clientX );






