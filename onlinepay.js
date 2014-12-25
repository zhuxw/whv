whvutil.autoLoad(function(context){
	var nameInput = document.getElementById("ctl00_ContentPlaceHolder1_payorNameTextBox");
	var okButton = document.getElementById("ctl00_ContentPlaceHolder1_okImageButton");
	nameInput.value = context.payername;
	whvutil.fireEvent(okButton, 'click');
});
