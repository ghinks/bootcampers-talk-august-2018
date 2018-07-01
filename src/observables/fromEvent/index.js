const { fromEvent, interval } = rxjs
const { throttle } = rxjs.operators
let tracker = document.getElementById('tracker');
let tracker2 = document.getElementById('tracker2');

let trackerSource = fromEvent(document.getElementById('col1'), 'mousemove')
let trackerSub = trackerSource.subscribe(e => tracker.innerHTML = 'X co-ord on move ' + e.clientX )




const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttle(ev => interval(3000)));
result.subscribe(e => tracker2.innerHTML = 'Y co-ord throttled on click ' + e.clientY);

