function WhatIsTheTime(timeInMirror){
   let time = timeInMirror.split(':')
   let time2 = 60 - (parseInt(time[1]))
   let time1 = time2 == 60 ? 12 - parseInt(time[0]) : 12 - (parseInt(time[0]) +1 )
   let hour = time1 == 0 ? '12' : time1 == -1 ? '11' : time1 > 9 ? time1 : '0' + time1
   let minute = time2 < 10 ? '0' + time2 : time2 == 60 ? '00' : time2
   return `${hour}:${minute}`
}