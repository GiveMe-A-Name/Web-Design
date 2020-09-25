let form = document.forms.inputForm;
let label1= document.querySelector('label.label1'),
label2 = document.querySelector('label.label2');

form.input1.onfocus = function(){
	if(!label1.classList.contains('hava-content')){
		label1.classList.add('hava-content');
		label1.style.fontSize="10px";
	}
}

form.input1.onblur = function(){
	if(!form.input1.value){
		label1.classList.remove('hava-content');
		label1.style.fontSize="14px";
	}
}

form.input2.onfocus = function(){
	if(!label2.classList.contains('hava-content')){
		label2.classList.add('hava-content');
		label2.style.fontSize="10px";
	}
}

form.input2.onblur = function(){
	if(!form.input2.value){
		label2.classList.remove('hava-content');
		label2.style.fontSize="14px";
	}
}
