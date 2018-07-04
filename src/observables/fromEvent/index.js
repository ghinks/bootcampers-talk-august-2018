const { fromEvent, interval } = rxjs
const { throttle, repeat, map, takeLast, take } = rxjs.operators

const moveExample = () => {
    // move
    let tracker = document.getElementById('tracker');
    let trackerSource = fromEvent(document.getElementById('col1'), 'mousemove')
    let trackerSub = trackerSource.subscribe(e => tracker.innerHTML = 'X co-ord on move ' + e.clientX )
}

const throttleExample = () => {
    // throttle
    let tracker = document.getElementById('tracker2');
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(throttle(ev => interval(3000)));
    result.subscribe(e => tracker.innerHTML = 'Y co-ord throttled on click ' + e.clientY);
}

const clickExample = () => {
    // press
    let button1 = document.getElementById('button1');
    const buttonClicks = fromEvent(button1, 'click');
    const remappedClicks = buttonClicks.pipe(map(ev => 'nothing')).pipe(take(3));
    const tellTale = () => {
        let i = 1;
        const text = (val) => {
            switch (val) {
                case 1:
                    return 'once';
                case 2:
                    return 'twice';
                default:
                    return 'three times not to press that button'
            }
        }
        return () =>  console.log(`If I've told you ${text(i++)}`)
    }
    remappedClicks.subscribe(tellTale());
}

moveExample();
throttleExample();
clickExample();