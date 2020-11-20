let form = document.forms.inputForm;
let label1 = document.querySelector('label.label1'),
label2 = document.querySelector('label.label2');

form.elements['input1'].onchange = function(event){
	if(event.target.value != ""){
		label1.classList.add('hava-content');
	}
}
form.elements.input2.onchange = function(event){
	if(evet.target.value != ""){
		label2.classList.add('hava-content');
	}
}