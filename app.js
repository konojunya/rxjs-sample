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


