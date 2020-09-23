
let updateDate = function(){
	const weeks=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
	let child = document.querySelectorAll('div.days>div.day')
	let elem = null;
	let i = 0;
	for(let item of child){
		if(item.classList.contains('today')){
			elem = item;
			break;
		}
		i++;
	}
	let week_elem = document.querySelector('div.left>div.week');
	let day_elem = document.querySelector('div.left>div.day');
	week_elem.innerHTML = weeks[i%7];
	day_elem.innerHTML = elem.innerHTML;
}


let InitTime = function(){
	const weeks=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
	let now = new Date();
	let hour = now.getHours(),minute = now.getMinutes(),second = now.getSeconds(), date = now.getDate(), day = now.getDay();
	let elem = document.querySelectorAll('div.days>div.day')[date];
	elem.classList.add('today');
	if(hour<10){
		hour = '0' +hour;
	}
	if(minute<10){
		minute = '0' + minute;
	}
	if(second<10){
		second='0'+second;	
	}
	document.querySelector('div.left>div.time').innerHTML = hour+':'+minute+':'+second;
	document.querySelector('div.left>div.week').innerHTML = weeks[day];
	document.querySelector('div.left>div.day').innerHTML = date;
	console.log(date);
	console.log(second);
}




let updateTime = function(){
	setInterval(()=>
		{
			let now = new Date();
			let hour = now.getHours(),minute = now.getMinutes(),second = now.getSeconds();
			let elem = document.querySelector('div.left>div.time');
			if(hour<10){
				hour = '0' +hour;
			}
			if(minute<10){
				minute = '0' + minute;
			}
			if(second<10){
				second='0'+second;	
			}
			elem.innerHTML = hour+':'+minute+':'+second;
		},1000)
}
InitTime();
// updateDate();
updateTime();
