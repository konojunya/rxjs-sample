const Rx = require("rxjs")

// 1000ms(1秒)ごとに0からカウントアップする数字を流すストリームを作ります
/*
Rx.Observable.interval(1000)
  .subscribe((msg) => console.log(msg, new Date().toLocaleTimeString()))
*/

/*
Rx.Observable.range(0, 10)
  .subscribe((msg) => console.log(msg))
*/

// mapで加工する
/*
Rx.Observable.range(0, 10)
  .map((n) => n * 2)
  .subscribe((msg) => console.log(msg))
*/

// distinctUntilChangedオペレータを使う
/*
const source = Rx.Observable.of(0, 0, 1, 2, 1, 2, 2)
source.subscribe((n) => process.stdout.write(`${n} `))
console.log("\n")

source.distinctUntilChanged()
.subscribe((n) => process.stdout.write(`${n} `))
*/

// ストリームで時間軸を取り扱う
// intervalのソースは10msですが、2000ms(2秒)経つまでのメッセージを破棄するのがthrottleTime
/*
Rx.Observable.interval(10)
.throttleTime(2000)
.subscribe((n) => console.log(n, new Date().toLocaleDateString()))
*/

// エラーハンドリング
/*
Rx.Observable.throw(new Error('hoge'))
.subscribe(
  () => console.log("waai"),
  (err) => console.log(`handling!: ${err.toString()}`)
)
*/