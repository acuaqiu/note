class Promise {
    static resolve() {
        setTimeout(() => {
            Promise.state = 'fulfilled'
            Promise.doneCallback.forEach(done => done())
        })
    }
    static reject() {
        setTimeout(() => {
            Promise.state = 'rejected'
            Promise.failCallback[0]()
            Promise.failCallback.shift()
            Promise.doneCallback.shift()
            Promise.resolve()
        })
    }
    constructor(fn) {
        Promise.state = 'pending'
        fn(Promise.resolve, Promise.reject)
    }
    then(done, fail) {
        switch (Promise.state) {
            case 'pending':
                Promise.doneCallback.push(done)
                Promise.failCallback.push(fail || null)
                break;
            case 'fulfilled':
                done()
                break;
            case 'rejected':
                done()
                break;
        }
        return this
    }
}
Promise.doneCallback = [];
Promise.failCallback = [];
Promise.state = "";
let myp = new Promise((resolve, reject) => {
    reject()
})
let p = new Promise((resolve, reject) => {
    reject()
}).then(() => {
    console.log('resolve')
}, () => {
    console.log('reject')
}).then(() => {
    return myp
})
p.then(() => {
    console.log('resolve1')
})