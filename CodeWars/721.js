const moment = require('moment')
function dayOfTheWeek(date){
   date=date.split('/')
   let date1=new Date(date[2],date[1]-1,date[0])
   return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][moment(date1).day()];
}