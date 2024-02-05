// Example
// maximumVolume(5)  === 9
// 3 * 3 * 1 = 9
// maximumVolume(6)  === 16
// 4 * 4 * 1 = 16
// maximumVolume(7)  === 25
// 5 * 5 * 1 = 25
// maximumVolume(8)  === 36
// 6 * 6 * 1 = 36
// maximumVolume(9)  === 50
// 5 * 5 * 2 = 50
// maximumVolume(10)  === 72
// 6 * 6 * 2 = 72
// maximumVolume(20)  === 588
// 14 * 14 * 3 = 588
//
   function maximumVolume(n){
      let s = Math.round(n * 1/6), num = n - 2 * s;
      return s * num * num;
   }