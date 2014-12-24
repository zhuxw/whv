autoLoad(function(){
	alert('available');

	var applyButton = document.getElementById("ctl00_ContentPlaceHolder1_applyNowButton");
	fireEvent(applyButton, 'click');
});
