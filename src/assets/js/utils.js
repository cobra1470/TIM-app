/**
 * utils js
 * @authors Cobra Liu (lhg2work@sina.com)
 * @date    2018-04-27 09:50:33
 * @version $Id$
 */
const utils = {
	sortByTimer({data= null, prop = 'timer', reverse = false}){
		const compare = property => {
			return (a,b) => {
			    let val1 = new Date(a[property]).getTime();
			    let val2 = new Date(b[property]).getTime();
			    return reverse ? val2 - val1 : val1 - val2;
			}
		}
		return data.sort(compare(prop));
	},
	formatTime({t = null, hasTime = false}){
		let _now = new Date();
		let _timer = new Date(t);
		let _yesterday = new Date();
		let _week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		 
		const formatNum = num => { 
		    return num < 10 ? `0${num}` : num;
		}
		_yesterday.setDate(_yesterday.getDate() -1);

		const __Timer = {
		    fullYear: _timer.getFullYear(),
		    month: _timer.getMonth() + 1,
		    date: _timer.getDate(),
		    hours: _timer.getHours(),
		    minutes: _timer.getMinutes(),
		    day: _timer.getDay(),
		    dateString: _timer.toDateString(),
		    time: _timer.getTime()
		}
		const __Now = {
		    time: _now.getTime(),
		    dateString: _now.toDateString(),
		}
		const __Yesterday = {
		    dateString: _yesterday.toDateString(),
		}
		const _$time = hasTime ? `${__Timer.hours}:${__Timer.minutes}` : '';

		if(__Now.time - __Timer.time <= 7*24*60*60*1000){

		    if(__Now.dateString === __Timer.dateString){
		        return `${formatNum(__Timer.hours)}:${formatNum(__Timer.minutes)}`
		    } else if(__Timer.dateString === __Yesterday.dateString) {
		        return `昨天 ${_$time}`;
		    }else{
		        return `${_week[__Timer.day]} ${_$time}`;
		    }
		}else{
		    return `${__Timer.fullYear}-${formatNum(__Timer.month)}-${formatNum(__Timer.date)} ${_$time}`;
		}
	}
}

export default utils;