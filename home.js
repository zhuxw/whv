autoLoad(function(){
	alert('home');
	var loginBtn = document.getElementById('SecureLoginPage');
	loginBtn = loginBtn.querySelector('img');
	fireEvent(loginBtn, 'click');

	var workingHolidayButton = document.getElementById('OnlineServices_workingHolidayAnchor');
	if(workingHolidayButton){
		window.location = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=214";
	}else{
		alert('first access');
	}
});
